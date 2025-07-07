"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

export default function AvaliarPage() {
  const router = useRouter()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock data for the appointment to be rated
  const agendamento = {
    id: "8",
    servico: "Corte Degradê",
    profissional: "Rafael",
    data: "2024-04-15",
    hora: "14:30",
  }

  const handleSubmit = async () => {
    if (rating === 0) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to home page after successful submission
      router.push("/cliente")
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Avaliar Serviço</h1>
        <p className="text-muted-foreground">Compartilhe sua experiência sobre o serviço realizado</p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Avaliar Atendimento</CardTitle>
          <CardDescription>Sua avaliação ajuda a melhorar nossos serviços</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">Serviço</h3>
            <p className="font-medium">{agendamento.servico}</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">Profissional</h3>
            <p className="font-medium">{agendamento.profissional}</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-muted-foreground">Data e Hora</h3>
            <p className="font-medium">
              {new Date(agendamento.data).toLocaleDateString("pt-BR")} às {agendamento.hora}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Sua Avaliação</h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoveredRating || rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              {rating === 1
                ? "Ruim"
                : rating === 2
                  ? "Regular"
                  : rating === 3
                    ? "Bom"
                    : rating === 4
                      ? "Muito Bom"
                      : rating === 5
                        ? "Excelente"
                        : "Clique para avaliar"}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Comentário (opcional)</h3>
            <Textarea
              placeholder="Compartilhe sua experiência..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={rating === 0 || isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Avaliação"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
