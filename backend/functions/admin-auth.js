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

        const client = createClient({
            baseUrl: Deno.env.get('INSFORGE_BASE_URL') || '',
            anonKey: Deno.env.get('ANON_KEY') || ''
        });

        const { data, error } = await client.database
            .from('admin_users')
            .select('*')
            .eq('username', username)
            .single();

        if (error || !data) {
            throw new Error('Usuário ou senha inválidos.');
        }

        if (data.password_hash !== password) {
            throw new Error('Usuário ou senha inválidos.');
        }

        if (data.status === 'pending') {
            throw new Error('Seu cadastro está pendente de aprovação.');
        }

        if (data.status === 'blocked') {
            throw new Error('Seu acesso foi bloqueado.');
        }

        // Retorna sucesso. O frontend vai salvar as credenciais para usar nas proximas reqs (Basic Auth)
        return new Response(JSON.stringify({ data: { message: "Login aprovado", username: data.username } }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    } catch (err) {
        const errMsg = err instanceof Error ? err.message : String(err);
        return new Response(JSON.stringify({ error: errMsg }), {
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}
