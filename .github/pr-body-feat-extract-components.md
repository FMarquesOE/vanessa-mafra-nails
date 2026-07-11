Refactor: extract Nav, Hero, PhotoFrame; types & formatting

Resumo das alterações
- Extração de componentes:
  - `client/src/components/Nav.tsx` — Nav responsivo (desktop + mobile)
  - `client/src/components/Hero.tsx` — Hero com animações e selo rotativo
  - `client/src/components/PhotoFrame.tsx` — componente reutilizável para imagens/frames

- Centralização de configuração:
  - `client/src/lib/siteConfig.ts` — centraliza textos, cores, serviços e depoimentos usados pela página

- Correções de tipagem e melhoria de segurança:
  - Substituição de usos indiscriminados de `any`/`as any` por tipos mais seguros (ou `unknown`) em handlers e hooks
  - `client/src/hooks/usePersistFn.ts` — ajustes para compatibilidade com tipos de eventos e uso de `Parameters/ReturnType`
  - Ajustes nos handlers de composição (IME) em `dialog.tsx`, `input.tsx` e `textarea.tsx`

- Limpeza e formatação:
  - Remoção de blocos duplicados/corrompidos em `client/src/pages/modelo-1.tsx`
  - Execução do Prettier em todo o projeto (`prettier --write .`)

Testes e validação local
- Rodei formatação local via `npx prettier --write .`.
- Rodei checagem TypeScript via `npx tsc --noEmit` — sem erros.

Notas e próximos passos
- Revisar `client/src/pages/modelo-1.tsx` com foco em comportamentos de animação (Framer Motion) e responsividade após extração.
- Opcional: dividir este PR em PRs menores (extração de componente vs. correção de tipos vs. formatação) se preferir revisão incremental.
- Posso adicionar reviewers/assignees e atualizar o título caso queira.

Comandos úteis para testar localmente
```bash
pnpm install
pnpm run format
pnpm run check
pnpm run dev
```

----
Gerado automaticamente pelo assistente ao preparar o PR.
