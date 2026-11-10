This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Idiomas

O site usa `next-intl` com português do Brasil como padrão, sem prefixo.
As versões traduzidas usam `/en`, `/es` e `/fr`, inclusive nas páginas de
prótese capilar, massoterapia e promoção. O seletor mantém a página, os
parâmetros de busca e a âncora ao trocar de idioma. O endereço `/` sempre
abre em português, independentemente do idioma do navegador ou de cookies.

As traduções ficam em `messages/{pt-BR,en,es,fr}.json`. Ao adicionar textos,
preencha os quatro catálogos. Valores monetários continuam em BRL.
Rotas e navegação estão em `i18n/`; links internos devem usar o `Link` de
`@/i18n/navigation` para preservar o idioma.

Validação dos catálogos: `npm run test:i18n`.
Para validar também as 16 páginas, metadados e sitemap, execute `npm run build`,
inicie o servidor com `npm start -- --port 3100` e rode
`BASE_URL=http://localhost:3100 npm run test:i18n`.
