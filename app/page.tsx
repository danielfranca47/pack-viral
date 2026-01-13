import Container from "@/components/layout/Container";
import CardBonus from "@/components/shared/CardBonus";
import Button from "@/components/ui/Button";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { listaDeBonus, nichosEmAlta, oqueIraReceber, oqueMudouNoCurso } from "@/data/data";
import { CircleArrowDown, CircleChevronRight, SquareCheck } from "lucide-react";
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
                  <Button>Quero monetizar</Button>
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
         {/* Seção do bônus que será recebido */}
         <section>
            <Container className="flex flex-col items-center mb-16">
               <h5 className="underline font-black text-4xl mb-12">
                  BÔNUS SOMENTE PARA OS <span className="text-tema">300 PRIMEIROS…</span>
               </h5>
               <div className="grid grid-cols-2 gap-8">
                  {listaDeBonus.map((v, k) => (
                     <CardBonus
                        titulo={v.titulo}
                        descricao={v.descricao}
                        foto={v.foto}
                        precoAtual={v.precoAtual}
                        precoAnterior={v.precoAnterior}
                        key={k}
                        chave={k}
                     />
                  ))}
               </div>
            </Container>
         </section>
         {/* TODO: Implementar a seção dos planos do curso */}
         <section className="text-center">
            <Container className="flex flex-col items-center">
               <h6 className="text-tema font-bold text-4xl">97% das pessoas já aproveitaram essa oferta, você vai ficar de fora?</h6>
               <ProgressBar />
               <p className="underline text-red-600 font font-semibold text-2xl uppercase">(Provavelmente termina hoje)</p>
               <h5 className="font-black text-4xl mt-20">Chegou A Hora de De Conhecer os Planos</h5>
               <CircleArrowDown className="size-13 bg-tema rounded-full p-1.5 mt-11 mb-10" />
               <div className="grid grid-cols-2 gap-9 *:rounded-4xl text-center *:shadow-orange-300 *:border-4 *:border-orange-400 *:shadow-md *:p-6 *:py-8">
                  {/* Plano Premium */}
                  <div className="sombraBtn text-black bg-zinc-100">
                     <p className="text-2xl italic font-light">Este é um produto 100% digital, e você receberá o acesso por email.</p>
                     <Image className="h-auto mt-4" width={650} height={600} src="/img/planos/iniciante.avif" alt="Foto descrevendo o produto" />
                     <p className="my-5 text-4xl font-black text-shadow-lg">
                        Plano Superpack <span className="text-amber-600">Premium</span>
                     </p>
                     <p className="font-bold mb-5 text-2xl">Apenas hoje, você receberá tudo isso:</p>
                     {/* Destaques */}
                     <div className="flex flex-col gap-3 *:flex *:items-center *:gap-2 text-start text-xl font-medium mb-7">
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>Pack Viral 2.0</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>+70.000 Vídeos Virais</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>Acesso Imediato</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>7 Dias de Garantia</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>Bônus 01# Treinamento Completo Tiktok Cash</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>Bônus 02# Pack Viral 1.0</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>Bônus 03# Curso Google Veo3 + 500 Vídeos Prontos</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>Bônus 04# Tiktok Shop</p>
                        </div>
                        <div className="border"></div>
                        <div>
                           <CircleChevronRight className="bg-tema rounded-full size-6" /> <p>Bônus 05# Comunidade VisionClass</p>
                        </div>
                     </div>
                     {/* Proposta */}
                     <div className="pb-5">
                        <p className="font-bold mb-4 text-2xl">Receba o acesso agora por:</p>
                        <p className="mb-13 text-7xl font-black text-tema">R$47,00</p>
                        <Button className="uppercase">Sim! Quero essa super oferta!</Button>
                        <p className="font-semibold mt-9">
                           Aproveite Agora: <span className="underline font-light">Você não encontrará este preço depois!</span>
                        </p>
                     </div>
                  </div>
                  {/* Plano Iniciante */}
                  <div className="sombraBtn"></div>
               </div>
            </Container>
         </section>
         {/* TODO: Implementar a seção da garantia do curso */}
         <section></section>
         {/* TODO: Implementar a seção das dúvidas frequentes */}
         <section></section>
         {/* TODO: Implementar a seção do CTA para o whatsapp */}
         <section></section>
      </main>
   );
}
