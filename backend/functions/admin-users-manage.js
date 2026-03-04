import { createClient } from 'npm:@insforge/sdk';

async function authUser(req, client) {
    const authHeader = req.headers.get('Authorization') || '';
    if (!authHeader.startsWith('Basic ')) throw new Error('Unauthorized');
    const b64 = authHeader.substring(6);
    const decoded = atob(b64);
    const [username, ...passParts] = decoded.split(':');
    const password = passParts.join(':');

    if (!username || !password) throw new Error('Unauthorized');

    const { data } = await client.database
        .from('admin_users')
        .select('password_hash, status')
        .eq('username', username)
        .single();

    if (!data || data.password_hash !== password || data.status !== 'approved') {
        throw new Error('Unauthorized');
    }
    return username;
}

export default async function (req) {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey, x-client-info'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
    }

    try {
        const client = createClient({
            baseUrl: Deno.env.get('INSFORGE_BASE_URL') || '',
            anonKey: Deno.env.get('ANON_KEY') || ''
        });

        // Previne acesso não autorizado
        const authName = await authUser(req, client);

        if (req.method === 'GET') {
            // Get pending/active users for listing
            const { data, error } = await client.database
                .from('admin_users')
                .select('id, username, status, created_at')
                .order('created_at', { ascending: false });

            if (error) throw new Error('Erro db:' + error.message);

            return new Response(JSON.stringify({ data }), {
                status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        if (req.method === 'POST') {
            // Update a user's status
            const body = await req.json();
            const { userId, targetStatus } = body;

            if (!userId || !['approved', 'blocked'].includes(targetStatus)) {
                throw new Error('Ação ou Usuário inválido');
            }

            // Impede alterar o status do root
            const { data: userCheck } = await client.database.from('admin_users').select('username').eq('id', userId).single();
            if (userCheck && userCheck.username === 'root') {
                throw new Error('Não é possível modificar o status do administrador principal.');
            }

            const { data, error } = await client.database
                .from('admin_users')
                .update({ status: targetStatus })
                .eq('id', userId)
                .select('id, username, status');

            if (error) throw new Error(error.message);

            return new Response(JSON.stringify({ data: data[0] }), {
                status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        throw new Error('Method ' + req.method + ' not supported');

    } catch (err) {
        const errMsg = err instanceof Error ? err.message : String(err);
        return new Response(JSON.stringify({ error: errMsg }), {
            status: errMsg === 'Unauthorized' ? 401 : 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}
