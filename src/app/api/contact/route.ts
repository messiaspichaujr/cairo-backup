import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, telefone, servico, mensagem } = await request.json();

    const data = await resend.emails.send({
      from: 'Site Cairo TI <onboarding@resend.dev>', 
      to: ['messiaspichau15@gmail.com'], 
      reply_to: email, 
      subject: `Novo Contato do Site - ${nome}`,
      html: `
        <div style="font-family: sans-serif; color: #0c1f44; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
          <h2 style="color: #E6007E;">Novo contato via Site</h2>
          <p>Você recebeu uma nova mensagem pelo formulário de contato.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
          <p><strong>Serviço de interesse:</strong> ${servico || 'Não informado'}</p>
          <p><strong>Mensagem:</strong><br/><br/>${mensagem}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro no Resend:', error);
    return NextResponse.json({ error: 'Erro ao enviar o e-mail.' }, { status: 500 });
  }
}