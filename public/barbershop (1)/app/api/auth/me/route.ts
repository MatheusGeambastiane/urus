import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    // In a real application, you would:
    // 1. Extract the JWT token from the Authorization header
    // 2. Verify the token
    // 3. Fetch the user data from the database

    // For demo purposes, we'll return a mock user
    return NextResponse.json(
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        nome: "João Silva",
        email: "joao@example.com",
        telefone: "+5511999999999",
        foto: "https://randomuser.me/api/portraits/men/1.jpg",
        role: "cliente",
        ativo: true,
        data_cadastro: "2024-01-15",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error in me route:", error)
    return NextResponse.json({ error: "Erro ao obter dados do usuário" }, { status: 500 })
  }
}
