interface INichoEmAlta {
   /** Tamanho da imagem: 260 x 146 */
   foto: string;
   titulo: string;
}
export const nichosEmAlta: INichoEmAlta[] = [
   { titulo: "Videos do desenho do Simpsons. Muito bom para monetizar a conta muito rápido!", foto: "/img/nichosEmAlta/1.png" },
   { titulo: "Poste cortes de Filmes e Séries. Um dos melhores nichos para obter resultados rápidos.", foto: "/img/nichosEmAlta/2.png" },
   { titulo: "O nicho de policial é muito pouco explorado e chance muito alta de viralizar.", foto: "/img/nichosEmAlta/3.png" },
   { titulo: "Muito bom para quem quer monetizar ou vender produtos.", foto: "/img/nichosEmAlta/4.png" },
   { titulo: "Cortes virais e muito lucrativos para vender produtos online.", foto: "/img/nichosEmAlta/5.png" },
   { titulo: "Simplesmente um dos nichos mais procurados e consumido do Brasil.", foto: "/img/nichosEmAlta/6.png" },
   { titulo: "Videos satisfatórios e que prendem o espectador e gera engajamento.", foto: "/img/nichosEmAlta/7.png" },
   { titulo: "Takes de Carro super viras para começar uma conta em qualquer rede social.", foto: "/img/nichosEmAlta/8.png" },
   { titulo: "Um pack especial de vídeos de achadinhos para vender seus produtos na internet.", foto: "/img/nichosEmAlta/9.png" },
   { titulo: "Videos de saúdes é um dos melhores nichos para pessoas que querem viralizar rapidamente.", foto: "/img/nichosEmAlta/10.png" },
   { titulo: "Nicho de futebol é muito viral no Brasil, e você consegue ter resultados rápidos.", foto: "/img/nichosEmAlta/11.png" },
   { titulo: "Melhores momentos dos podcast’s brasileiros para viralizar seu perfil.", foto: "/img/nichosEmAlta/12.png" },
];

export const oqueMudouNoCurso = [
   "Não entregamos só packs: entregamos packs + estratégia.",
   "Packs atualizados com conteúdos virais para acelerar seus resultados.",
   "Você não precisa saber editar: só baixar e postar.",
   "Acesso ao Google VEO3 e +500 vídeos em novo formato viral.",
   "Área de Membros nova com mais eficiência para os alunos",
   "5 bônus exclusivos que podem te levar a faturar R$3.000+ por mês.",
   "Suporte 24 horas para nunca ficar perdido.",
];

interface IOqueIraReceber {
   titulo: string;
   descricao: string;
}
export const oqueIraReceber: IOqueIraReceber[] = [
   {
      titulo: "⏰ Melhores Horários para Postar",
      descricao:
         "Descubra os horários estratégicos em que seus vídeos têm mais chances de viralizar e alcançar milhares de pessoas rapidamente.",
   },
   {
      titulo: "#️⃣ Hashtags Virais",
      descricao:
         "Tenha acesso às hashtags que realmente impulsionam o alcance dos seus vídeos e colocam seu conteúdo na frente de novos seguidores todos os dias.",
   },
   {
      titulo: "🎵 Áudios e Músicas Motivacionais",
      descricao:
         "Receba uma seleção de músicas e áudios em alta no TikTok para aumentar o engajamento e deixar seus posts ainda mais atrativos.",
   },
   { titulo: "🎬 Acesso ao CapCut PRO (Compartilhado)", descricao: "Vamos disponibilizar contas de Capcut PRO para os alunos usarem!" },
   { titulo: "🤖 Banco das Melhores IA’s", descricao: "Vou te passar todas inteligências artificiais que eu uso para ganhar muito dinheiro!" },
   {
      titulo: "✨ Pack Profissional de Edições (Transições, Efeitos Sonoros e Backgrounds)",
      descricao:
         "Transforme seus vídeos em produções profissionais com transições incríveis, efeitos sonoros envolventes e backgrounds prontos para bombar nas redes sociais.",
   },
];

export const testemunhos = [
   "/img/testemunhos/1.avif",
   "/img/testemunhos/2.avif",
   "/img/testemunhos/3.avif",
   "/img/testemunhos/4.avif",
   "/img/testemunhos/5.avif",
   "/img/testemunhos/6.avif",
   "/img/testemunhos/7.avif",
   "/img/testemunhos/8.avif",
   "/img/testemunhos/9.avif",
];

interface IBonus {
   titulo: string;
   descricao: string;
   precoAnterior: number | string;
   precoAtual: number | string;
   /** Tamanho da imagem: X x X */
   foto: string;
}
export const listaDeBonus: IBonus[] = [
   {
      titulo: "Treinamento Completo TikTok Cash",
      descricao: "Do básico ao avançado, aprenda passo a passo como crescer no TikTok e monetizar sua conta sem complicação.",
      foto: "/img/bonus/1.avif",
      precoAnterior: "R$297,90",
      precoAtual: "Grátis",
   },
   {
      titulo: "Treinamento Completo TikTok Cash",
      descricao: "Do básico ao avançado, aprenda passo a passo como crescer no TikTok e monetizar sua conta sem complicação.",

      foto: "/img/bonus/2.avif",
      precoAnterior: "R$297,90",
      precoAtual: "Grátis",
   },
   {
      titulo: "Treinamento Completo TikTok Cash",
      descricao: "Do básico ao avançado, aprenda passo a passo como crescer no TikTok e monetizar sua conta sem complicação.",
      foto: "/img/bonus/3.avif",
      precoAnterior: "R$297,90",
      precoAtual: "Grátis",
   },
   {
      titulo: "Treinamento Completo TikTok Cash",
      descricao: "Do básico ao avançado, aprenda passo a passo como crescer no TikTok e monetizar sua conta sem complicação.",
      foto: "/img/bonus/4.avif",
      precoAnterior: "R$297,90",
      precoAtual: "Grátis",
   },
   {
      titulo: "Treinamento Completo TikTok Cash",
      descricao: "Do básico ao avançado, aprenda passo a passo como crescer no TikTok e monetizar sua conta sem complicação.",
      foto: "/img/bonus/5.avif",
      precoAnterior: "R$297,90",
      precoAtual: "Grátis",
   },
];
