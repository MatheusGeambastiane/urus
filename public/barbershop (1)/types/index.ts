export interface User {
  id: string
  nome: string
  email: string
  telefone: string
  foto?: string
  role: "admin" | "profissional" | "cliente"
  ativo: boolean
}

export interface Profissional extends User {
  role: "profissional"
  bio: string
  dias_disponiveis: string[]
  horarios_por_dia: Record<string, string[]>
  servicos_ids: string[]
  comissao_tipo: "percentual" | "fixo"
  comissao_valor: number
}

export interface Assinatura {
  id: string
  cliente_id: string
  plano_id: string
  data_inicio: string
  data_fim: string
  status: "ativa" | "expirado" | "cancelada" | "pendente"
  valor_pago: number
  forma_pagamento: "cartao" | "pix" | "dinheiro" | "transferencia"
  renovacao_automatica: boolean
  servicos_utilizados: {
    servico_id: string
    quantidade_utilizada: number
  }[]
}

export interface Cliente extends User {
  role: "cliente"
  data_cadastro: string
  historico_agendamentos: string[]
  avaliacoes: string[]
  empresa?: string
  pontos: number
  assinatura: Assinatura | null
  data_nascimento?: string
  endereco?: {
    rua: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    complemento?: string
  }
  observacoes?: string
}

export interface Servico {
  id: string
  nome: string
  descricao: string
  duracao_min: number
  preco: number
  profissionais_ids: string[]
  categoria: "corte" | "barba" | "combo" | "outros"
  disponivel: boolean
  incluso_assinatura?: {
    mensal: boolean
    premium: boolean
  }
}

export interface Agendamento {
  id: string
  cliente_id: string
  profissional_id: string
  servico_id: string
  data: string
  hora: string
  status: "agendado" | "concluido" | "cancelado"
  valor: number
  observacoes?: string
  avaliacao?: {
    nota: number
    comentario?: string
  }
}

export interface ProdutoEstoque {
  id: string
  nome: string
  quantidade: number
  tipo: "interno" | "venda"
  categoria: string
  preco_venda?: number
  preco_custo: number
  fornecedor?: string
  limite_minimo: number
  data_cadastro: string
}

export interface MovimentacaoEstoque {
  id: string
  produto_id: string
  tipo: "entrada" | "saida"
  quantidade: number
  motivo: string
  data: string
  responsavel_id: string
}

export interface Notificacao {
  id: string
  tipo: "email" | "whatsapp" | "sistema"
  destinatario_id: string
  titulo: string
  conteudo: string
  data_envio: string
  lida: boolean
}

export interface Plano {
  id: string
  nome: string
  descricao: string
  valor_mensal: number
  duracao_meses: number
  servicos_inclusos: {
    servico_id: string
    quantidade_mensal: number
  }[]
  beneficios: string[]
  ativo: boolean
}

export interface PlanoAssinatura {
  id: string
  nome: string
  descricao: string
  valor: number
  tipo: "mensal" | "premium"
  beneficios: string[]
  limite_servicos?: number
  acumula_servicos: boolean
  desconto_adicionais?: number
  pontos_por_servico: number
}

export interface MovimentacaoPontos {
  id: string
  cliente_id: string
  tipo: "credito" | "debito"
  quantidade: number
  descricao: string
  data: string
  agendamento_id?: string
}
