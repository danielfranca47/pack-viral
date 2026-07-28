# Pack Império Viral 2.0 Landing Page

Transforme seu tempo livre em dinheiro! Com nosso Pack Império Viral 2.0, você posta vídeos prontos, pega milhões de visualizações e começa a receber em dólar e tudo de forma simples e rápida. Descubra como ganhar em dólar postando vídeos virais e maximize seu potencial de renda com nossa plataforma intuitiva e ferramentas comprovadas.

![pack-viral](https://github.com/user-attachments/assets/86f42818-74c5-4398-9402-e3839ff2e930)

## URLs do Projeto

**Produção (Vercel):** https://pack-viral.vercel.app

### Landing principal

- https://pack-viral.vercel.app/

### Funil de vendas (Hotmart)

| Página | URL |
|---|---|
| Entrada — Pack Império Shop | https://pack-viral.vercel.app/tiktok-shop |
| OTO — Upsell Premium | https://pack-viral.vercel.app/upsell-premium |
| Downsell — Iniciante | https://pack-viral.vercel.app/downsell-iniciante |
| Obrigado — aceitou o Premium | https://pack-viral.vercel.app/obrigado-premium |
| Obrigado — aceitou o Iniciante | https://pack-viral.vercel.app/obrigado-iniciante |
| Obrigado — recusou os dois upsells | https://pack-viral.vercel.app/obrigado |

### Checkout Hotmart

Definidos em [`data/data.ts`](data/data.ts) → `LINK_CHECKOUT_HOTMART`.

- Entrada (Pack Império Shop): https://pay.hotmart.com/E104241491K
- Premium (link direto): https://pay.hotmart.com/U106225774D
- Iniciante (link direto): https://pay.hotmart.com/N106408909N
- OTO Premium (com cupom da oferta): https://pay.hotmart.com/U106225774D?off=eidjh6nk
- Downsell Iniciante (com cupom da oferta): https://pay.hotmart.com/N106408909N?off=zyttrf6q

> Nas páginas `/upsell-premium` e `/downsell-iniciante`, a compra em um clique é feita pelo **widget do Funil de Vendas da Hotmart**, não pelos links acima — eles ficam só como referência.

### Área de membros (Hotmart Club)

Definidos em [`data/data.ts`](data/data.ts) → `LINK_AREA_MEMBROS`. Usados nas páginas de obrigado para levar o aluno direto ao conteúdo comprado.

- Pack Império Shop: https://hotmart.com/pt-br/club/empire-class/products/7133432
- Pack Premium: https://hotmart.com/pt-br/club/empire-class/products/7901991
- Pack Iniciante: https://hotmart.com/pt-br/club/empire-class/products/7968705

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- **Next.js**: Um framework React para construção de aplicações web otimizadas e escaláveis.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS**: Para estilização e layout da aplicação.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **TypeScript**: Um superconjunto de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Um framework CSS utilitário para estilização rápida e responsiva.
- **ESLint**: Ferramenta para identificar e corrigir problemas em código JavaScript.

## Boas Práticas

- **Componentização**: Divida a interface em componentes reutilizáveis para facilitar a manutenção e a escalabilidade.
- **Acessibilidade**: Certifique-se de que a aplicação seja acessível a todos os usuários, seguindo as diretrizes de acessibilidade.
- **SEO**: Utilize as funcionalidades do Next.js para otimizar a aplicação para motores de busca, como a geração de páginas estáticas e a configuração de metadados.
- **Testes**: Implemente testes unitários e de integração para garantir a qualidade do código e a funcionalidade da aplicação.

## Começando

Para rodar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Editando o Projeto

### Editando Imagens

As imagens estão localizadas no diretório `public/img/`. Você pode substituir as imagens existentes ou adicionar novas. Certifique-se de que os nomes das imagens correspondam aos referenciados no código.

### Editando Cores Globais

Os estilos globais podem ser modificados no arquivo `globals.css` localizado no diretório `app/`. Você pode alterar cores, fontes e outros estilos para atender às suas necessidades de design.

### Editando a Página

Você pode começar a editar a página principal modificando `app/page.tsx`. A página se atualiza automaticamente à medida que você edita o arquivo.
