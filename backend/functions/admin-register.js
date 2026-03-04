import { createClient } from 'npm:@insforge/sdk';

export default async function (req) {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey, x-client-info'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
    }

    try {
        const body = await req.json();
        const { username, password } = body;

        if (!username || !password || username.length < 3 || password.length < 6) {
            throw new Error('Dados inválidos. A senha precisa ter pelo menos 6 caracteres.');
        }

        const client = createClient({
            baseUrl: Deno.env.get('INSFORGE_BASE_URL') || '',
            anonKey: Deno.env.get('ANON_KEY') || ''
        });

        // 1. Tenta inserir na tabela
        const { error: insertError } = await client.database
            .from('admin_users')
            .insert([{
                username,
                password_hash: password, // salvando cru apenas para facilitar a auth simulada Basic via header
                status: 'pending'
            }]);

        if (insertError) {
            if (insertError.message && insertError.message.includes('unique constraint')) {
                throw new Error('Este usuário já existe.');
            }
            throw new Error('Erro ao salvar no banco: ' + insertError.message);
        }

        // 2. Dispara e-mail via Resend notificando Diego
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        if (resendApiKey) {
            await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${resendApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'Sistema DALUDI <onboarding@resend.dev>', // se houver domĩnio verificado, trocar.
                    to: 'diego@daludi.com.br',
                    subject: 'Novo Cadastro - Painel Administrativo DALUDI',
                    html: `
                        <h2>Novo Cadastro Administrativo</h2>
                        <p>O usuário <strong>${username}</strong> solicitou acesso ao painel de administração da DALUDI.</p>
                        <p>Por favor, acesse o painel (admin) via perfil root para aprovar ou rejeitar o acesso.</p>
                    `
                })
            });
        } else {
            console.warn('RESEND_API_KEY não encontrada, e-mail não enviado.');
        }

        return new Response(JSON.stringify({ data: { message: "Cadastro recebido! Aguarde aprovação." } }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (err) {
        const errMsg = err instanceof Error ? err.message : String(err);
        return new Response(JSON.stringify({ error: errMsg }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}
