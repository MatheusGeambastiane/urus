import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, telefone } = body

    // Validate input
    if (!email && !telefone) {
      return NextResponse.json({ error: "É necessário fornecer um email ou telefone" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Check if the user exists
    // 2. Generate a verification code
    // 3. Send the code via email or WhatsApp
    // 4. Store the code with an expiration time

    // For demo purposes, we'll simulate success
    return NextResponse.json(
      {
        message: "Código de verificação enviado com sucesso",
        destination: email || telefone,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error in login route:", error)
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 })
  }
}
