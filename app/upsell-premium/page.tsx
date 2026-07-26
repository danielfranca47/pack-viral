import Container from "@/components/layout/Container";
import CardBonus from "@/components/shared/CardBonus";
import CardTestemunhoTexto from "@/components/shared/CardTestemunhoTexto";
import DeclineLink from "@/components/ui/DeclineLink";
import PillButton from "@/components/ui/PillButton";
import { LINK_CHECKOUT_HOTMART, listaDeBonus } from "@/data/data";
import { Check, CircleCheck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import VslPlayer from "./VslPlayer";

export const metadata: Metadata = {
   title: "Sua compra quase completa — Pack Império Viral 2.0",
};

// TODO: PIXEL DE CONVERSÃO — esta é a página de OTO, primeira tela após o checkout do produto de entrada.
// Se o pixel de compra do produto de entrada (R$5,90) dispara aqui, confirmar com quem configurou o
// rastreamento se é via Postback/Pixel nativo da Hotmart ou script manual, para não duplicar o evento.

const bonusEmDestaque = [listaDeBonus[0], listaDeBonus[2], listaDeBonus[4]];

const nichosEmAlta = [
   "Cortes de Filmes e Séries",
   "Futebol",
   "Podcasts Virais",
   "Vídeos Satisfatórios",
   "Saúde e Bem-estar",
   "Policial",
   "Takes de Carro",
   "IA / Veo3",
];

export default function UpsellPremium() {
   return (
      <main className="bg-black">
         {/* CONFIRMAÇÃO */}
         <section className="pt-12 pb-2 text-center sm:pt-16">
            <Container className="flex flex-col items-center">
               <Image src="/img/logo.png" width={180} height={78} alt="Logotipo do site" className="mb-8 h-auto w-32 sm:w-40" />
               <div className="sombraBtn mb-6 flex size-16 items-center justify-center rounded-full bg-tema">
                  <Check className="size-8 text-black" strokeWidth={3} />
               </div>
               <h1 className="mb-3 max-w-lg text-2xl font-black uppercase sm:text-3xl">Parabéns! Sua compra foi confirmada.</h1>
               <p className="mt-1.5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-tema/30 bg-zinc-950 px-6 py-3 text-sm font-semibold text-zinc-400">
                  ✓ <span className="text-white">Pack Império Shop</span> — 300 vídeos TikTok Shop · R$5,90
               </p>
               <p className="mt-6 text-sm font-extrabold tracking-wide text-video-theme uppercase">
                  ⚠ Espera — sua compra ainda não está 100% completa. Não feche essa página.
               </p>
            </Container>
         </section>

         {/* BRIDGE */}
         <section className="py-12 text-center">
            <Container className="mx-auto max-w-2xl">
               <span className="mb-5 inline-block rounded-full border border-tema/30 bg-tema/10 px-5 py-2 text-xs font-bold tracking-wide text-tema uppercase">
                  Antes de você ir...
               </span>
               <h2 className="mb-4 text-2xl font-black uppercase sm:text-3xl">
                  Você garantiu vídeos pra vender no TikTok Shop.
                  <br /> E se pudesse viralizar em <span className="text-tema">qualquer nicho?</span>
               </h2>
               <p className="text-lg text-zinc-400">
                  Você já tem os vídeos certos pra <span className="text-white">vender produtos</span>. Agora imagina ter acesso a{" "}
                  <span className="text-white">+70.000 vídeos virais</span> — filmes, futebol, saúde, memes, pets, IA — pra crescer sua conta em
                  qualquer direção, não só em vendas.
               </p>
            </Container>
         </section>

         {/* VSL */}
         <section className="py-4">
            <Container>
               <VslPlayer />
               <p className="mt-3.5 text-center text-xs font-semibold text-zinc-500">▶ Assista antes de decidir — 3 minutos</p>

               <div className="mt-8 flex flex-col items-center gap-3.5">
                  <PillButton href={LINK_CHECKOUT_HOTMART.premiumOTO} className="max-w-md">
                     Sim! Quero essa super oferta →
                  </PillButton>
                  <DeclineLink href="/downsell-iniciante">Não, obrigado. Quero continuar só com o que já comprei →</DeclineLink>
               </div>
            </Container>
         </section>

         {/* NICHOS */}
         <section className="py-14">
            <Container>
               <h3 className="mb-7 text-center text-xl font-black uppercase sm:text-2xl">Temos todos os nichos em alta 🔥</h3>
               <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {nichosEmAlta.map((nicho, k) => (
                     <div key={k} className="rounded-2xl border border-tema/30 bg-zinc-950 px-2.5 py-4 text-center text-sm font-bold text-zinc-400">
                        {nicho}
                     </div>
                  ))}
               </div>
               <p className="mt-5 text-center text-sm font-bold text-video-theme uppercase">tem muito mais — isso é só uma amostra</p>
            </Container>
         </section>

         {/* BÔNUS */}
         <section className="py-14">
            <Container>
               <h3 className="mb-9 text-center text-xl font-black uppercase underline underline-offset-8 sm:text-2xl">
                  Bônus exclusivos <span className="text-tema">só nesta página</span>
               </h3>
               <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {bonusEmDestaque.map((v, k) => (
                     <CardBonus
                        key={k}
                        titulo={v.titulo}
                        descricao={v.descricao}
                        foto={v.foto}
                        precoAnterior={v.precoAnterior}
                        precoAtual={v.precoAtual}
                        chave={k}
                     />
                  ))}
               </div>
            </Container>
         </section>

         {/* OFERTA */}
         <section className="py-14" id="oferta">
            <Container className="mx-auto max-w-2xl">
               <div className="rounded-4xl border-[3px] border-tema bg-zinc-950 p-9 text-center shadow-[0_0_80px_rgba(65,245,87,0.18)] sm:p-11">
                  <span className="mb-3.5 block text-xs font-extrabold tracking-wide text-video-theme uppercase">
                     Oferta única — só aparece agora
                  </span>
                  <h2 className="mb-6 text-2xl font-black">Pack Império Viral 2.0 — Premium</h2>
                  <ul className="mx-auto mb-8 flex w-fit flex-col gap-3 text-left text-base font-semibold">
                     {[
                        "Pack Império Viral 2.0 completo",
                        "+70.000 vídeos virais de qualquer nicho",
                        "Acesso imediato pela área de membros",
                        "7 dias de garantia",
                        "+ 3 bônus exclusivos acima",
                     ].map((v, k) => (
                        <li key={k} className="flex items-start gap-2.5">
                           <CircleCheck className="mt-0.5 size-4.5 shrink-0 text-tema" /> {v}
                        </li>
                     ))}
                  </ul>
                  <p className="text-sm text-zinc-500 line-through">De R$97,00</p>
                  <p className="my-1 text-5xl font-black text-tema">R$ 47,00</p>
                  <p className="mb-7 text-xs text-zinc-500">pagamento único · checkout seguro Hotmart</p>
                  <PillButton href={LINK_CHECKOUT_HOTMART.premiumOTO}>Sim! Quero essa super oferta →</PillButton>
                  <p className="mt-4.5 text-xs font-bold tracking-wide text-video-theme uppercase">
                     Esse preço não aparece de novo depois que você sair desta página
                  </p>
               </div>
               <div className="mt-8 text-center">
                  <DeclineLink href="/downsell-iniciante">Não, obrigado. Quero continuar só com o que já comprei →</DeclineLink>
               </div>
            </Container>
         </section>

         {/* PROVA SOCIAL */}
         <section className="py-14">
            <Container>
               <h3 className="mb-9 text-center text-xl font-black uppercase sm:text-2xl">
                  Temos mais de <span className="text-tema">10.000 alunos</span> — veja alguns feedbacks:
               </h3>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <CardTestemunhoTexto
                     texto="Fiz a compra dos packs há 2 semanas e hoje já consegui monetizar minha conta com os vídeos virais."
                     nome="Lucas M."
                     cargo="Aluno"
                     iniciais="LM"
                  />
                  <CardTestemunhoTexto
                     texto="No começo achei que era golpe. Vocês provaram o contrário — existe coisa que dá certo na internet."
                     nome="Fabio C."
                     cargo="Aluno"
                     iniciais="FC"
                  />
                  <CardTestemunhoTexto
                     texto="O melhor pack de todos que já fiz — e olha que já testei vários por aí."
                     nome="André H."
                     cargo="Aluno"
                     iniciais="AH"
                  />
               </div>
            </Container>
         </section>

         {/* GARANTIA */}
         <section className="py-16 text-center">
            <Container className="flex flex-col items-center gap-5">
               <Image src="/img/selo-garantia.avif" width={426} height={426} alt="Ilustração do selo de garantia de 7 dias" className="size-24" />
               <h3 className="text-xl font-black uppercase">Satisfação garantida</h3>
               <p className="max-w-md text-sm text-zinc-400">
                  Garantia de 7 dias para você experimentar o conteúdo. Se não ficar satisfeito por qualquer motivo, é só enviar um e-mail e
                  devolvemos 100% do seu dinheiro — sem questionamentos, sem burocracia.
               </p>
            </Container>
         </section>

         <footer className="border-t border-tema/20 py-8 text-center">
            <Container className="flex flex-col gap-1.5 text-xs text-zinc-500">
               <p>
                  Império Viral não garante resultados de venda ou monetização — o desempenho depende do seu conteúdo, do seu perfil e da sua
                  constância.
               </p>
               <p>Compra processada com segurança via Hotmart. Uma marca Empire Class.</p>
            </Container>
         </footer>
      </main>
   );
}
