import Container from "@/components/layout/Container";
import CardTestemunhoTexto from "@/components/shared/CardTestemunhoTexto";
import Accordion from "@/components/ui/Accordion";
import { LINK_CHECKOUT_HOTMART } from "@/data/data";
import Image from "next/image";
import { Metadata } from "next";
import StickyBar from "./StickyBar";

const videosLequeCelulares = [
   "https://res.cloudinary.com/dtra2u08q/video/upload/v1785232288/5115f45c5285e2728bf81752830aaf24_odmd1w.mp4",
   "https://res.cloudinary.com/dtra2u08q/video/upload/v1785231897/From_Klickpin.com-_Useful_small_routine_upgrades_with_charm_and_ideas_for_creative_people_that_feel_easy_to_keep_up-pin-id-20125529581047819_a1cy6t.mp4",
   "https://res.cloudinary.com/dtra2u08q/video/upload/v1785231896/From_Klickpin.com-_Timeless_couple_habits_and_clever_inspiration_this_season_to_send_tonight-pin-id-881438958318420868_1_nqu4hm.mp4",
];

export const metadata: Metadata = {
   title: "Império Shop — 300 vídeos prontos para o TikTok Shop",
};

const faqTiktokShop = [
   {
      pergunta: "Como eu recebo os vídeos?",
      resposta: "Assim que o pagamento é confirmado, você recebe um e-mail com o link de acesso. É só entrar, baixar e postar.",
   },
   {
      pergunta: "Funciona pra qualquer nicho de produto?",
      resposta:
         "Os 300 vídeos estão organizados por categoria, cobrindo os nichos mais comuns vendidos no TikTok Shop. Você escolhe os que combinam com seu produto.",
   },
   {
      pergunta: "Preciso saber editar vídeo?",
      resposta: "Não. Os vídeos já vêm prontos, em formato vertical, prontos pra postar. Se quiser, pode ajustar a legenda antes de publicar.",
   },
   {
      pergunta: "E se eu não gostar?",
      resposta: "Você tem 7 dias de garantia. Se não fizer sentido pra você, é só pedir reembolso, sem burocracia.",
   },
];

export default function TiktokShop() {
   return (
      <main className="bg-black pb-20">
         {/* HERO */}
         <section className="pt-12 pb-10 text-center sm:pt-16" id="topo">
            <Container className="flex flex-col items-center">
               <Image src="/img/logo.png" width={180} height={78} alt="Logotipo do site" className="mb-8 h-auto w-32 sm:w-40" />

               <span className="mb-6 inline-block rounded-full border border-tema/30 bg-tema/10 px-5 py-2 text-xs font-bold tracking-wide text-tema uppercase">
                  ✦ 300 vídeos prontos
               </span>

               <h1 className="mb-5 max-w-2xl text-3xl font-black uppercase sm:text-4xl md:text-5xl">
                  Pare de gravar vídeo.
                  <br /> Comece a <span className="text-tema">postar</span> hoje.
               </h1>
               <p className="mb-9 max-w-lg text-lg font-semibold text-zinc-400 sm:text-xl">
                  Pack com <span className="text-white">300 vídeos prontos</span> pra divulgar produtos no TikTok Shop — formato vertical, edição
                  pronta, é só baixar e publicar.
               </p>

               {/* Leque de celulares */}
               <div className="relative mb-8 h-64 w-full max-w-md sm:h-80">
                  <div className="absolute top-3.5 left-1/2 z-10 h-56 w-32 -translate-x-1/2 -rotate-[13deg] overflow-hidden rounded-3xl border-2 border-tema bg-zinc-950 shadow-[0_0_40px_rgba(65,245,87,0.4)] sm:h-70 sm:w-38">
                     <div className="absolute top-3 left-3 z-10 rounded-md bg-tema px-2 py-1 text-[10px] font-black text-black">VÍDEO 118</div>
                     <video
                        src={videosLequeCelulares[0]}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                     />
                  </div>
                  <div className="absolute top-3.5 left-1/2 z-20 h-56 w-32 -translate-x-1/2 rotate-[13deg] overflow-hidden rounded-3xl border-2 border-tema bg-zinc-950 shadow-[0_0_40px_rgba(65,245,87,0.4)] sm:h-70 sm:w-38">
                     <div className="absolute top-3 left-3 z-10 rounded-md bg-tema px-2 py-1 text-[10px] font-black text-black">VÍDEO 244</div>
                     <video
                        src={videosLequeCelulares[1]}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                     />
                  </div>
                  <div className="absolute top-0 left-1/2 z-30 h-64 w-33 -translate-x-1/2 overflow-hidden rounded-3xl border-2 border-tema bg-zinc-950 shadow-[0_0_40px_rgba(65,245,87,0.55)] sm:h-80 sm:w-40">
                     <div className="absolute top-3 left-3 z-10 rounded-md bg-tema px-2 py-1 text-[10px] font-black text-black">VÍDEO 007</div>
                     <video
                        src={videosLequeCelulares[2]}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                     />
                  </div>
               </div>

               <div className="mb-7 flex flex-wrap items-center justify-center gap-4">
                  <span className="text-base text-zinc-500 line-through">De R$37,00</span>
                  <span className="text-4xl font-black text-tema">R$ 5,90</span>
               </div>
               <a href={LINK_CHECKOUT_HOTMART.tiktokShop} className="sombraBtn w-full max-w-xs rounded-full bg-tema px-8 py-4 text-center text-base font-extrabold uppercase text-black transition hover:-translate-y-0.5">
                  Quero os vídeos →
               </a>

               <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs font-semibold text-zinc-400 sm:text-sm">
                  <span>✓ Garantia de 7 dias</span>
                  <span>✓ Acesso na hora</span>
                  <span>✓ Compra 100% segura</span>
               </div>
            </Container>
         </section>

         {/* PROBLEMA */}
         <section className="py-14 text-center">
            <Container className="max-w-2xl">
               <h2 className="mb-4 text-2xl font-black uppercase sm:text-3xl">
                  Você já escolheu o produto.
                  <br /> O que falta é o vídeo.
               </h2>
               <p className="text-lg text-zinc-400">
                  Gravar, editar e legendar um vídeo por dia toma tempo que quem está começando no TikTok Shop não tem. Enquanto isso, a
                  concorrência posta todo dia — e quem posta mais, vende mais.
               </p>
            </Container>
         </section>

         {/* O QUE VOCÊ RECEBE */}
         <section className="py-14">
            <Container>
               <div className="mx-auto mb-10 max-w-lg text-center">
                  <span className="mb-4 inline-block rounded-full border border-tema/30 bg-tema/10 px-5 py-2 text-xs font-bold tracking-wide text-tema uppercase">
                     O que vem no pack
                  </span>
                  <h2 className="text-2xl font-black uppercase sm:text-3xl">
                     300 vídeos prontos,
                     <br /> organizados por nicho.
                  </h2>
               </div>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                     {
                        num: "01",
                        titulo: "300 vídeos em vertical",
                        desc: "Formato 9:16, resolução pronta pra TikTok e TikTok Shop — sem precisar cortar ou reformatar nada.",
                     },
                     {
                        num: "02",
                        titulo: "Organizados por categoria",
                        desc: "Separados por tipo de produto, pra você achar rápido o vídeo certo pra cada item que estiver vendendo.",
                     },
                     {
                        num: "03",
                        titulo: "Liberado pra uso comercial",
                        desc: "Pode baixar, editar a legenda e postar no seu perfil de vendedor sem restrição.",
                     },
                     {
                        num: "04",
                        titulo: "Entrega automática",
                        desc: "Acesso liberado por e-mail assim que o pagamento é confirmado — sem espera.",
                     },
                  ].map((v, k) => (
                     <div key={k} className="rounded-3xl border-2 border-tema/30 bg-zinc-950 p-7">
                        <span className="mb-3 block font-black text-tema">{v.num}</span>
                        <h3 className="mb-2 text-lg font-extrabold">{v.titulo}</h3>
                        <p className="text-sm text-zinc-400">{v.desc}</p>
                     </div>
                  ))}
               </div>
            </Container>
         </section>

         {/* PROVA SOCIAL */}
         <section className="py-14">
            <Container>
               <h2 className="mx-auto mb-9 max-w-xl text-center text-2xl font-black uppercase sm:text-3xl">
                  Gente que parou de gravar
                  <br /> e começou só a <span className="text-tema">postar</span>.
               </h2>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <CardTestemunhoTexto
                     texto="Eu perdia um dia inteiro editando um vídeo só. Com o pack eu posto 3 por dia sem esforço."
                     nome="Jéssica R."
                     cargo="Vendedora TikTok Shop"
                     iniciais="JR"
                  />
                  <CardTestemunhoTexto
                     texto="Valeu muito mais que os R$5,90. Os vídeos já vêm no formato certo, só subir."
                     nome="Marcos C."
                     cargo="Revendedor"
                     iniciais="MC"
                  />
                  <CardTestemunhoTexto
                     texto="Comprei achando que era pouca coisa e me surpreendi com a quantidade de nichos cobertos."
                     nome="Ana L."
                     cargo="Dropshipper"
                     iniciais="AL"
                  />
               </div>
            </Container>
         </section>

         {/* COMO FUNCIONA */}
         <section className="border-y border-tema/20 bg-zinc-950 py-14">
            <Container>
               <h2 className="mb-9 text-center text-2xl font-black uppercase sm:text-3xl">
                  Três passos entre você
                  <br /> e o primeiro vídeo postado.
               </h2>
               <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                     { n: "01", titulo: "Você garante seu acesso", desc: "Pagamento único de R$5,90, direto pelo checkout seguro." },
                     { n: "02", titulo: "Recebe o link na hora", desc: "Acesso liberado por e-mail em poucos minutos após a confirmação." },
                     { n: "03", titulo: "Escolhe e posta", desc: "Baixa o vídeo do nicho certo e publica no seu perfil ainda hoje." },
                  ].map((v, k) => (
                     <div className="border-l-[3px] border-tema pl-4.5" key={k}>
                        <div className="text-3xl font-black text-tema">{v.n}</div>
                        <h3 className="mt-2.5 mb-1.5 text-base font-extrabold">{v.titulo}</h3>
                        <p className="text-sm text-zinc-400">{v.desc}</p>
                     </div>
                  ))}
               </div>
            </Container>
         </section>

         {/* OFERTA */}
         <section className="py-14" id="oferta">
            <Container>
               <div className="grid grid-cols-1 items-center gap-8 rounded-4xl border-[3px] border-tema bg-zinc-950 p-9 shadow-[0_0_70px_rgba(65,245,87,0.15)] md:grid-cols-2">
                  <div>
                     <span className="mb-3 block text-xs font-extrabold tracking-wide text-video-theme uppercase">Oferta de entrada</span>
                     <h2 className="mb-4 text-2xl font-black">Pack Império Shop — 300 vídeos prontos</h2>
                     <ul className="flex flex-col gap-2.5 text-sm font-semibold text-zinc-300 sm:text-base">
                        <li>
                           ✓ <span className="text-white">300 vídeos</span> em formato vertical, prontos pra postar
                        </li>
                        <li>
                           ✓ Organização por <span className="text-white">categoria de produto</span>
                        </li>
                        <li>
                           ✓ Liberado para <span className="text-white">uso comercial</span>
                        </li>
                        <li>
                           ✓ Acesso <span className="text-white">imediato</span> após a confirmação
                        </li>
                     </ul>
                  </div>
                  <div className="rounded-3xl border border-tema/30 bg-black p-7 text-center">
                     <p className="text-sm text-zinc-500 line-through">De R$37,00</p>
                     <p className="my-1 text-5xl font-black text-tema">R$ 5,90</p>
                     <p className="mb-6 text-xs text-zinc-500">à vista, pagamento único</p>
                     <a
                        href={LINK_CHECKOUT_HOTMART.tiktokShop}
                        className="sombraBtn block w-full rounded-full bg-tema px-8 py-4 text-sm font-extrabold uppercase text-black transition hover:-translate-y-0.5"
                     >
                        Quero meu acesso agora →
                     </a>
                     <p className="mt-4.5 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-400">
                        🛡 Garantia incondicional de 7 dias
                     </p>
                  </div>
               </div>
            </Container>
         </section>

         {/* FAQ */}
         <section className="py-14">
            <Container className="mx-auto max-w-2xl">
               <h2 className="mb-9 text-center text-2xl font-black uppercase sm:text-3xl">Antes de decidir</h2>
               <Accordion perguntasRespostas={faqTiktokShop} />
            </Container>
         </section>

         {/* CTA FINAL */}
         <section className="py-16 text-center">
            <Container>
               <h2 className="mb-3 text-3xl font-black uppercase">
                  300 vídeos por <span className="text-tema">R$5,90.</span>
               </h2>
               <p className="mb-7 font-semibold text-zinc-400">Menos que um lanche. Semanas de conteúdo pronto.</p>
               <a
                  href={LINK_CHECKOUT_HOTMART.tiktokShop}
                  className="sombraBtn inline-block rounded-full bg-tema px-8 py-4 text-base font-extrabold uppercase text-black transition hover:-translate-y-0.5"
               >
                  Garantir meu acesso →
               </a>
            </Container>
         </section>

         <footer className="border-t border-tema/20 py-8 text-center">
            <Container className="flex flex-col gap-1.5 text-xs text-zinc-500">
               <p>Império Shop não garante resultados de venda — o desempenho depende do seu produto, do seu perfil e da sua estratégia de divulgação.</p>
               <p>Compra processada com segurança via Hotmart. Uma marca Empire Class.</p>
            </Container>
         </footer>

         <StickyBar />
      </main>
   );
}
