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
        const url = new URL(req.url);
        const id = url.searchParams.get('id');

        if (!id) {
            return new Response(JSON.stringify({ error: 'ID é obrigatório' }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        const client = createClient({
            baseUrl: Deno.env.get('INSFORGE_BASE_URL') || '',
            anonKey: Deno.env.get('ANON_KEY') || ''
        });

        const { data, error } = await client.database
            .from('leads')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            throw new Error(JSON.stringify(error));
        }

        return new Response(JSON.stringify({ data }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        return new Response(JSON.stringify({ error: errorMsg }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}
