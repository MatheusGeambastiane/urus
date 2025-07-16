// app/api/send-email/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const data = await req.json()

  const { nome, telefone, servico, horario, vemmoto } = data

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "cyberssatic@gmail.com",
      pass: "vtneyewerovlqeos", // coloque isso no .env
    },
  })

  const mailOptions = {
    from: "cyberssatic@gmail.com",
    to: "barbeariaurusba@gmail.com",
    subject: "Novo agendamento - Campanha Motociclista",
    text: `
Novo agendamento recebido:

Nome: ${nome}
Telefone: ${telefone}
Serviço: ${servico}
Horário: ${horario}
Virá de moto? ${vemmoto}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email enviado com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json({ message: "Erro ao enviar email" }, { status: 500 })
  }
}
