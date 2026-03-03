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
        const { id, faturamento_mensal, numero_colaboradores, principal_gargalo, objetivo_12_meses } = body;

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

        // 1. Update lead to qualified
        const { data: updatedLead, error: updateError } = await client.database
            .from('leads')
            .update({
                faturamento_mensal,
                numero_colaboradores,
                principal_gargalo,
                objetivo_12_meses,
                status: 'qualified',
                updated_at: new Date().toISOString()
            })
            .eq('id', id)
            .select('*')
            .single();

        if (updateError) {
            throw new Error(JSON.stringify(updateError));
        }

        // 2. Send emails via Resend
        const resendApiKey = Deno.env.get('RESEND_API_KEY') || '';
        const pdfUrl = 'https://2xnqiy3h.us-east.insforge.app/api/storage/buckets/daludi-assets/objects/DALUDI_Arquitetura_Operacional.pdf';

        if (resendApiKey) {
            // Internal notification
            try {
                const res = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${resendApiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from: 'DALUDI <start@daludi.com.br>',
                        to: ['start@daludi.com.br'],
                        subject: `[LEAD QUALIFICADO] ${updatedLead.nome} — ${updatedLead.empresa}`,
                        html: `<h2>Novo Lead Qualificado</h2>
                            <p><strong>Nome:</strong> ${updatedLead.nome}</p>
                            <p><strong>Empresa:</strong> ${updatedLead.empresa}</p>
                            <p><strong>Cargo:</strong> ${updatedLead.cargo}</p>
                            <p><strong>E-mail:</strong> ${updatedLead.email}</p>
                            <p><strong>WhatsApp:</strong> ${updatedLead.whatsapp}</p>
                            <p><strong>Faturamento:</strong> ${faturamento_mensal}</p>
                            <p><strong>Colaboradores:</strong> ${numero_colaboradores}</p>
                            <p><strong>Gargalo:</strong> ${principal_gargalo}</p>
                            <p><strong>Objetivo 12m:</strong> ${objetivo_12_meses}</p>`
                    })
                });

                if (!res.ok) {
                    const text = await res.text();
                    console.error('ERRO RESEND (Interno):', text);
                }
            } catch (emailErr) {
                console.error('Falha na request Interna (Resend):', emailErr);
            }

            // Lead email with PDF
            try {
                const res = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${resendApiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from: 'DALUDI <start@daludi.com.br>',
                        to: [updatedLead.email],
                        subject: `Análise Iniciada: Dados da ${updatedLead.empresa} recebidos com sucesso.`,
                        html: `<div style="text-align: center; margin-bottom: 30px;">
                                <img src="https://2xnqiy3h.us-east.insforge.app/api/storage/buckets/daludi-assets/objects/LogoHorizontalprincipal_transparente.png" alt="DALUDI" style="max-height: 40px; height: auto;">
                               </div>
                               <h2>Olá ${updatedLead.nome}, excelente decisão.</h2>
                            <p>Suas informações já estão em análise pelo nosso time de estrategistas. Enquanto preparamos o seu Diagnóstico personalizado com os próximos passos para a ${updatedLead.empresa}, peço que dê uma lida neste material que preparei exclusivamente para você:</p>
                            <p><a href="${pdfUrl}" style="display:inline-block;background:#00F5C4;color:#050505;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:600;">📄 Baixar Material PDF</a></p>
                            <p>Fique atento ao seu WhatsApp e e-mail, pois entrarei em contato em breve para discutirmos os gargalos da sua operação.</p>
                            <br>
                            <p>Atenciosamente,<br><strong>Diego Araújo</strong><br>DALUDI | Arquitetura Estratégica de IA</p>`
                    })
                });

                if (!res.ok) {
                    const text = await res.text();
                    console.error('ERRO RESEND (Lead):', text);
                }
            } catch (emailErr) {
                console.error('Falha na request Lead (Resend):', emailErr);
            }
        }

        return new Response(JSON.stringify({ data: updatedLead, success: true }), {
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
