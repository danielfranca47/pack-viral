import Container from "@/components/layout/Container";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { listaDeBonus, nichosEmAlta, oqueIraReceber, oqueMudouNoCurso } from "@/data/data";
import { SquareCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
   return (
      <main className="bg-black">
         {/* Seção inicial */}
         <section>
            <div style={{ backgroundImage: "url('/img/banner.webp')" }}>
               <Container className="flex flex-col items-center text-center pt-4 pb-25">
                  {/* Logo */}
                  <Image width={292} height={127} className="mt-2.5 mb-30 w-60 h-auto" src="/img/logo.png" alt="Logotipo do site" />

                  {/* Intro */}
                  <div>
                     <h1 className="mb-12.5 text-4xl font-black uppercase">
                        Descubra como <br />
                        <span className="text-tema">ganhar em dólar</span>
                        <br /> postando vídeos virais
                     </h1>
                     <p className="text-2xl mb-35 mx-50">
                        <span className="font-semibold">Transforme seu tempo livre em dinheiro!</span> Com nosso{" "}
                        <span className="font-semibold">Pack Viral 2.0</span>, você posta vídeos prontos,{" "}
                        <span className="font-semibold text-tema">pega milhões de visualizações</span> e começa a receber em dólar e tudo de
                        forma simples e rápida.
                     </p>
                  </div>

                  {/* TODO: Mais tarde gerar a foto ideal para esta seção */}
                  {/* Destaque do conteúdo */}
                  <Image
                     width={857}
                     height={682}
                     className="mb-37 self-baseline"
                     src="/img/ilustracao.avif"
                     alt="Foto demonstrando os bônus que serão adquiridos ao realizar o trabalho"
                  />

                  {/* CTA */}
                  <button className="bg-[#FF751E] text-[27px] text-white px-6 py-3 rounded font-semibold sombraBtn cursor-pointer hover:-translate-y-1.25 transition">
                     Quero Monetizar!
                  </button>
               </Container>
            </div>
            {/* Vídeo de demonstração */}
            {/* TODO: Mais tarde implementar um poster muito mais melhor */}
            {/* TODO: Estudar mais sobre a API em https://next-video.dev/docs#main */}
            <div className="mt-6 flex flex-col items-center">
               <h6 className="font-bold text-2xl mb-8">Entenda melhor no vídeo abaixo:</h6>
               <VideoPlayer />
            </div>
         </section>
         {/* Seção dos nichos em alta */}
         <section>
            <Container className="flex flex-col items-center mt-25 mb-17">
               <h2 className="font-black text-4xl mb-9">Temos Todos Os Nichos em Alta 🔥</h2>
               <div className="grid grid-cols-3 gap-12">
                  {nichosEmAlta?.map(({ titulo, foto }, k) => (
                     <div key={k}>
                        <Image className="rounded" width={260} height={146} src={foto} alt={`Ilustração demostrando o curso sobre: ${titulo}`} />
                        <p className="max-w-3xs text-xl mt-2">{titulo}</p>
                     </div>
                  ))}
               </div>
               <p className="text-2xl text-red-600 mt-8 text-center">TEM MUITO MAIS, ISSO É APENAS UMA AMOSTRA DO QUE VOCÊ TERÁ ACESSO!</p>
            </Container>
         </section>
         {/* Seção do que mudou no pack viral */}
         <section>
            <Container className="flex flex-col items-center mb-17">
               <h3 className="font-bold text-3xl text-center mb-7">
                  O que mudou no <span className="text-tema">Pack Viral 2.0?</span>
               </h3>
               <div className="flex flex-col gap-3 text-2xl">
                  {oqueMudouNoCurso.map((v, k) => (
                     <div className="flex items-center gap-2" key={k}>
                        <SquareCheck className="text-tema" /> <p>{v}</p>
                     </div>
                  ))}
               </div>
            </Container>
         </section>
         {/* Seção do que mais o cliente irá receber */}
         <section>
            <Container className="flex flex-col items-center mb-24">
               <h3 className="font-bold text-4xl mb-9">Veja o que você vai receber a mais:</h3>
               <div className="flex flex-col gap-7 mx-50">
                  {oqueIraReceber.map(({ titulo, descricao }, k) => (
                     <div className="flex flex-col gap-2 text-2xl" key={k}>
                        <h6 className="text-tema font-bold">{titulo}</h6>
                        <p>{descricao}</p>
                     </div>
                  ))}
               </div>
            </Container>
         </section>
         {/* Seção dos testemunhos dos clientes */}
         <section>
            <Container className="flex flex-col items-center mb-36">
               <h3 className="font-black text-4xl text-center mb-12">
                  Temos mais de <span className="text-tema">10.000 alunos</span> e aqui está os feedbacks de alguns deles:
               </h3>
               <EmblaCarousel />
            </Container>
         </section>
         {/* TODO: Implementar a seção do bônus que será recebido */}
         <section>
            <Container className="flex flex-col items-center mb-16">
               <h5 className="underline font-black text-4xl mb-12">
                  BÔNUS SOMENTE PARA OS <span className="text-tema">300 PRIMEIROS…</span>
               </h5>
               <div className="grid grid-cols-2 gap-8">
                  {listaDeBonus.map((v, k) => (
                     <div key={k} className="shadow-orange-300 border-4 border-orange-400 shadow-md flex flex-col mx-auto rounded-3xl">
                        <Image
                           width={1024}
                           height={819}
                           className="w-auto h-auto"
                           src={v.foto}
                           alt="Ilustração demonstrando o bônus que será recebido "
                        />
                        <div className="p-7 bg-zinc-950 text-2xl rounded-[inherit]">
                           <h6 className="italic text-tema font-bold text-[19px] underline">Bônus #0{k + 1}</h6>
                           <p className="text-3xl font-semibold mt-2 mb-4 text-green-300">{v.titulo}</p>
                           <p>{v.descricao}</p>
                           <div className="mt-4">
                              <p>
                                 De: <span className="text-red-500 font-bold">{v.precoAnterior}</span>
                              </p>
                              <p>
                                 Por: <span className="text-green-600 font-bold">{v.precoAtual}</span>
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </Container>
         </section>
         {/* TODO: Implementar a seção dos planos do curso */}
         <section></section>
         {/* TODO: Implementar a seção da garantia do curso */}
         <section></section>
         {/* TODO: Implementar a seção das dúvidas frequentes */}
         <section></section>
         {/* TODO: Implementar a seção do CTA para o whatsapp */}
         <section></section>
      </main>
   );
}
