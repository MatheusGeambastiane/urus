import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, telefone, code } = body

    // Validate input
    if ((!email && !telefone) || !code) {
      return NextResponse.json({ error: "Dados incompletos para verificação" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Verify the code against the stored one
    // 2. Check if the code is still valid (not expired)
    // 3. Create a session or JWT token
    // 4. Return the token and user data

    // For demo purposes, we'll simulate a successful verification
    // with a mock user and token
    return NextResponse.json(
      {
        user: {
          id: "123e4567-e89b-12d3-a456-426614174000",
          nome: "João Silva",
          email: email || null,
          telefone: telefone || null,
          role: "cliente",
          ativo: true,
        },
        token: "mock_jwt_token",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error in verify route:", error)
    return NextResponse.json({ error: "Erro ao processar a verificação" }, { status: 500 })
  }
}
