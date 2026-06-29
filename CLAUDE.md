# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page de venda (página única) para o produto digital "Pack Império Viral 2.0", vendido via checkout externo (Hotmart). É um app Next.js (App Router) com TypeScript e Tailwind CSS v4, sem backend próprio — toda a página é estática/client-rendered e o conteúdo vem de um arquivo de dados central.

## Commands

```bash
npm run dev      # servidor de desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # serve o build de produção
npm run lint     # ESLint (eslint-config-next, core-web-vitals + typescript)
```

Não há suíte de testes configurada neste projeto (sem Jest/Vitest/Playwright).

## Architecture

- **Página única**: toda a landing está em [app/page.tsx](app/page.tsx), composta por seções (`<section>`) sequenciais (hero, vídeo, nichos em alta, bônus, planos, garantia, FAQ, CTA final). Não há outras rotas.
- **Conteúdo centralizado em dados**: textos repetíveis (nichos, bônus, perguntas/respostas, lista "o que mudou") ficam em [data/data.ts](data/data.ts), tipados em [types/types.ts](types/types.ts). Ao editar copy/conteúdo, prefira alterar `data/data.ts` em vez de hardcodear no JSX.
- **Componentes divididos por camada**:
  - `components/layout/` — wrappers estruturais (ex.: `Container`, que centraliza largura máxima e padding responsivo).
  - `components/shared/` — blocos compostos específicos da landing (`CardPlano`, `CardBonus`).
  - `components/ui/` — primitivos reutilizáveis (`Button`, `Accordion`, `EmblaCarousel`, `ProgressBar`, `VideoPlayer`).
- **`Button` ([components/ui/Button.tsx](components/ui/Button.tsx)) renderiza `<a>` quando recebe `href`, ou `<button>` quando não recebe.** Os CTAs de compra ("Quero monetizar" no hero e os dois `CardPlano`) usam `href={LINK_CHECKOUT_HOTMART.premium|iniciante}`, com as URLs reais de checkout da Hotmart centralizadas em [data/data.ts](data/data.ts). O botão "Tire suas dúvidas" (CTA do WhatsApp) ainda está sem `href`.
- **Alias de import**: `@/*` aponta para a raiz do projeto (configurado em [tsconfig.json](tsconfig.json)). Use `@/components/...`, `@/data/data`, `@/types/types` em vez de paths relativos longos.
- **Tema visual**: cor de destaque definida em [app/globals.css](app/globals.css) via `--tema` (`#41f557`) e exposta ao Tailwind como `text-tema`/`bg-tema` etc. Fundo global é preto (`--background`). Há uma classe utilitária custom `.sombraBtn` para a sombra verde dos cards/botões.
- **Vídeo**: `next-video` está integrado via `withNextVideo` em [next.config.ts](next.config.ts); o componente `VideoPlayer` consome os vídeos da pasta `videos/`.
- **Imagens**: todas as imagens da landing ficam em `public/img/` (banners, ilustrações, fotos de bônus/planos, selo de garantia, testemunhos, nichos). Ao trocar imagens, manter o mesmo nome de arquivo referenciado no código ou atualizar todas as referências.
