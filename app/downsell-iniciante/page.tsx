import Container from "@/components/layout/Container";
import HotmartFunnelWidget from "@/components/shared/HotmartFunnelWidget";
import Accordion from "@/components/ui/Accordion";
import DeclineLink from "@/components/ui/DeclineLink";
import { CircleCheck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
   title: "Uma opção mais simples — Pack Império Viral",
};

const faqDownsell = [
   {
      pergunta: "Posso fazer upgrade pro Premium depois?",
      resposta:
         "No momento essa oferta é única para esta página. Depois de sair, o acesso ao plano completo com os 5 bônus não fica mais disponível neste valor.",
   },
   {
      pergunta: "Os vídeos são diferentes dos do plano completo?",
      resposta: "Não. São os mesmos vídeos virais, só que em quantidade reduzida (10.000 em vez de 70.000) e sem os bônus extras.",
   },
   {
      pergunta: "Como recebo o acesso?",
      resposta: "Assim que o pagamento é confirmado, você recebe um e-mail com o acesso à área de membros. É imediato.",
   },
];

export default function DownsellIniciante() {
   return (
      <main className="bg-black">
         {/* HEADER SUAVE */}
         <section className="pt-12 pb-2 text-center sm:pt-16">
            <Container className="flex flex-col items-center">
               <Image src="/img/logo.png" width={180} height={78} alt="Logotipo do site" className="mb-7 h-auto w-32 sm:w-40" />
               <p className="mb-3.5 text-sm font-semibold text-zinc-400">Sem problemas — entendemos.</p>
               <h1 className="mb-4 max-w-lg text-2xl font-extrabold sm:text-3xl">
                  Que tal uma versão mais simples do Pack Império Viral, sem compromisso?
               </h1>
               <p className="max-w-md text-base text-zinc-400">
                  Preparamos uma opção de entrada, com o essencial pra você começar a viralizar, por uma fração do valor.
               </p>
            </Container>
         </section>

         {/* OFERTA */}
         <section className="py-10" id="oferta">
            <Container className="mx-auto max-w-xl">
               <div className="rounded-4xl border-2 border-tema/20 bg-zinc-950 p-8 text-center sm:p-10">
                  <h2 className="mb-6 text-xl font-extrabold sm:text-2xl">Pack Império Viral 2.0 — Plano Iniciante</h2>
                  <ul className="mx-auto mb-7 flex w-fit flex-col gap-3 text-left text-base font-medium">
                     {["Pack Império Viral 2.0", "+10.000 vídeos virais", "Acesso imediato pela área de membros", "7 dias de garantia"].map(
                        (v, k) => (
                           <li key={k} className="flex items-start gap-2.5">
                              <CircleCheck className="mt-0.5 size-4.5 shrink-0 text-tema" /> {v}
                           </li>
                        )
                     )}
                  </ul>
                  <p className="text-sm text-zinc-500 line-through">Plano completo: R$97,00</p>
                  <p className="my-1 text-4xl font-black text-tema sm:text-5xl">R$ 27,00</p>
                  <p className="mb-6 text-xs text-zinc-500">pagamento único · checkout seguro Hotmart</p>
                  <HotmartFunnelWidget />
                  <div className="mt-4.5">
                     <DeclineLink href="/obrigado">Não, obrigado. Só o que já tenho está bom →</DeclineLink>
                  </div>
               </div>
            </Container>
         </section>

         {/* POR QUE É MENOR */}
         <section className="border-y border-tema/20 bg-zinc-950 py-12">
            <Container className="mx-auto max-w-xl">
               <h3 className="mb-6 text-center text-lg font-extrabold sm:text-xl">O que muda em relação ao plano completo</h3>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl p-4">
                     <span className="mb-2.5 block text-xs font-bold tracking-wide text-zinc-500 uppercase">Premium (R$47)</span>
                     <ul className="flex flex-col gap-2 text-sm text-zinc-500">
                        <li>+70.000 vídeos virais</li>
                        <li>5 bônus inclusos</li>
                        <li>Acesso imediato</li>
                        <li>7 dias de garantia</li>
                     </ul>
                  </div>
                  <div className="rounded-2xl p-4">
                     <span className="mb-2.5 block text-xs font-bold tracking-wide text-tema uppercase">Iniciante (R$27)</span>
                     <ul className="flex flex-col gap-2 text-sm text-white">
                        <li>+10.000 vídeos virais</li>
                        <li>Sem bônus adicionais</li>
                        <li>Acesso imediato</li>
                        <li>7 dias de garantia</li>
                     </ul>
                  </div>
               </div>
            </Container>
         </section>

         {/* GARANTIA */}
         <section className="py-14 text-center">
            <Container className="flex flex-col items-center gap-4">
               <Image src="/img/selo-garantia.avif" width={426} height={426} alt="Ilustração do selo de garantia de 7 dias" className="size-20" />
               <h3 className="text-lg font-extrabold">Satisfação garantida</h3>
               <p className="max-w-md text-sm text-zinc-400">
                  Mesma garantia de 7 dias do plano completo. Se não fizer sentido pra você, é só enviar um e-mail e devolvemos 100% do valor —
                  sem burocracia.
               </p>
            </Container>
         </section>

         {/* FAQ */}
         <section className="py-12">
            <Container className="mx-auto max-w-xl">
               <h3 className="mb-7 text-center text-lg font-extrabold sm:text-xl">Dúvidas rápidas</h3>
               <Accordion perguntasRespostas={faqDownsell} />
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
