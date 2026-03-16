import Container from "@/components/layout/Container";
import CardBonus from "@/components/shared/CardBonus";
import CardPlano from "@/components/shared/CardPlano";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { listaDeBonus, nichosEmAlta, oqueIraReceber, oqueMudouNoCurso, perguntaResposta } from "@/data/data";
import { CircleArrowDown, SquareCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
   return (
      <main className="bg-black">
         {/* Seção inicial */}
         <section>
            <div className="bg-contain bg-no-repeat md:bg-cover md:bg-center bg-[url('/img/bannerMobile2.webp')] md:bg-[url('/img/banner.webp')]">
               <Container className="flex flex-col items-center text-center pt-4 pb-12 sm:pb-25">
                  {/* Logo */}
                  <Image
                     width={292}
                     height={127}
                     className="mt-2.5 mb-70 md:mb-30 sm:mb-30 w-40 sm:w-60 h-auto"
                     src="/img/logo.png"
                     alt="Logotipo do site"
                  />

                  {/* Intro */}
                  <div>
                     <h1 className="mb-8 sm:mb-12.5 text-2xl sm:text-3xl md:text-4xl font-black uppercase">
                        Descubra como <br />
                        <span className="text-tema">ganhar em dólar</span>
                        <br /> postando vídeos virais
                     </h1>
                     <p className="text-xl font-semibold sm:text-2xl mb-10 xl:mb-25 2xl:mb-35 sm:mx-10 md:30 lg:mx-50  text-shadow-lg">
                        <span>Transforme seu tempo livre em dinheiro!</span> Com nosso <span>Pack Império Viral 2.0</span>, você posta vídeos
                        prontos, <span className="text-tema">pega milhões de visualizações</span> e começa a receber em dólar e tudo de forma
                        simples e rápida.
                     </p>
                  </div>

                  {/* TODO: Mais tarde gerar a foto ideal para esta seção */}
                  {/* Destaque do conteúdo */}
                  <Image
                     width={857}
                     height={682}
                     className="mb-10 xl:mb-37 self-baseline"
                     src="/img/ilustracao.png"
                     alt="Foto demonstrando os bônus que serão adquiridos ao realizar o trabalho"
                  />

                  {/* CTA */}
                  <Button>Quero monetizar</Button>
               </Container>
            </div>
            {/* Vídeo de demonstração */}
            <div className="mt-6 flex flex-col items-center text-center">
               <h6 className="font-bold text-xl sm:text-3xl mb-8">Entenda melhor no vídeo abaixo:</h6>
               <VideoPlayer />
            </div>
         </section>
         {/* Seção dos nichos em alta */}
         <section>
            <Container className="flex flex-col items-center mt-20 md:mt-25 mb-13 sm:mb-17">
               <h2 className="font-black text-2xl sm:text-3xl md:text-4xl mb-9 text-center">Temos Todos Os Nichos em Alta 🔥</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
                  {nichosEmAlta?.map(({ titulo, foto }, k) => (
                     <div key={k}>
                        <Image className="rounded" width={260} height={146} src={foto} alt={`Ilustração demostrando o curso sobre: ${titulo}`} />
                        <p className="max-w-3xs sm:text-xl mt-2 w-full h-auto">{titulo}</p>
                     </div>
                  ))}
               </div>
               <p className="text-lg sm:text-2xl text-red-600 mt-8 text-center">
                  TEM MUITO MAIS, ISSO É APENAS UMA AMOSTRA DO QUE VOCÊ TERÁ ACESSO!
               </p>
            </Container>
         </section>
         {/* Seção do que mudou no pack império viral 2.0 */}
         <section>
            <Container className="flex flex-col items-center mb-17">
               <h3 className="font-bold text-2xl sm:text-3xl text-center mb-7">
                  O que mudou no <span className="text-tema">Pack Império Viral 2.0?</span>
               </h3>
               <div className="flex flex-col gap-3 sm:text-xl sm:mx-15 md:text-2xl">
                  {oqueMudouNoCurso.map((v, k) => (
                     <div className="flex items-center gap-2" key={k}>
                        <SquareCheck className="text-black bg-tema rounded shrink-0 " /> <p>{v}</p>
                     </div>
                  ))}
               </div>
            </Container>
         </section>
         {/* Seção do que mais o cliente irá receber */}
         <section>
            <Container className="flex flex-col items-center mb-16 sm:mb-24">
               <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-7 sm:mb-9 text-center">Veja o que você vai receber a mais:</h3>
               <div className="flex flex-col gap-7 sm:mx-10 md:mx-20 xl:mx-50">
                  {oqueIraReceber.map(({ titulo, descricao }, k) => (
                     <div className="flex flex-col gap-2 " key={k}>
                        <h6 className="text-tema font-bold text-xl sm:text-2xl">{titulo}</h6>
                        <p className="text-lg sm:text-2xl">{descricao}</p>
                     </div>
                  ))}
               </div>
            </Container>
         </section>
         {/* Seção dos testemunhos dos clientes */}
         <section>
            <Container className="flex flex-col items-center mb-15 sm:mb-36">
               <h3 className="font-black text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12">
                  Temos mais de <span className="text-tema">10.000 alunos</span> e aqui está os feedbacks de alguns deles:
               </h3>
               <EmblaCarousel />
            </Container>
         </section>
         {/* Seção do bônus que será recebido */}
         <section>
            <Container className="flex flex-col items-center mb-16">
               <h5 className="underline text-center font-black text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12">
                  BÔNUS SOMENTE PARA OS <span className="text-tema">300 PRIMEIROS…</span>
               </h5>
               <div className="grid grid-cols-1 sm:mx-8 md:mx-0 md:grid-cols-2 gap-8">
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
         {/* Seção dos planos do curso */}
         <section>
            <Container className="flex flex-col items-center text-center">
               <h6 className="text-tema font-bold text-2xl sm:text-3xl md:text-4xl">
                  97% das pessoas já aproveitaram essa oferta, você vai ficar de fora?
               </h6>
               <ProgressBar />
               <p className="underline text-red-600 font font-semibold text-xl sm:text-2xl uppercase">(Provavelmente termina hoje)</p>
               <h5 className="font-black text-2xl sm:text-3xl md:text-4xl mt-20">Chegou A Hora de De Conhecer os Planos</h5>
               <CircleArrowDown className="size-10 sm:size-13 bg-tema rounded-full p-1.5 mt-6 sm:mt-11 mb-10" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-9 *:rounded-4xl text-center *:shadow-orange-300 *:border-4 *:border-green-400 *:shadow-md *:p-6 *:py-8 relative">
                  {/* Plano Premium */}
                  <CardPlano
                     foto="/img/planos/premium.png"
                     cta="SIM! QUERO ESSA SUPER OFERTA!"
                     modo="premium"
                     preco={47}
                     destaques={[
                        "Pack Império Viral 2.0",
                        "+70.000 Vídeos Virais",
                        "Acesso Imediato",
                        "7 Dias de Garantia",
                        "Bônus 01# Treinamento Completo Tiktok Cash",
                        "Bônus 02# Pack Império Viral 2.0",
                        "Bônus 03# Curso Google Veo3 + 500 Vídeos Prontos",
                        "Bônus 04# Tiktok Shop",
                        "Bônus 05# Comunidade EmpireClass",
                     ]}
                  />
                  {/* Plano Iniciante */}

                  <CardPlano
                     foto="/img/planos/iniciante.png"
                     cta="Quero Comprar Essa Oferta!"
                     modo="iniciante"
                     preco={27}
                     destaques={["Pack Império Viral 2.0", "+10.000 Vídeos Virais", "Acesso Imediato", "7 Dias de Garantia"]}
                  />
               </div>
            </Container>
         </section>
         {/* Seção do selo de garantia do curso */}
         <section>
            <Container className="flex flex-col items-center gap-9 sm:gap-14 py-20 sm:py-30 text-center">
               <Image
                  className="size-56"
                  width={426}
                  height={426}
                  src="/img/selo-garantia.avif"
                  alt="Ilustração do selo de garantia de 7 dias"
               />
               <h6 className=" text-2xl sm:text-3xl md:text-4xl font-black">Satisfação garantida</h6>
               <p className="font-light text-xl sm:text-2xl sm:mx-5 md:mx-20 xl:mx-80">
                  Eu ofereço uma garantia de 7 dias para você experimentar o conteúdo, se não ficar satisfeito com o conteúdo ou se você se
                  arrepender por qualquer outro motivo, basta me enviar um e-mail e eu devolvo 100% do seu dinheiro. Sem questionamentos e sem
                  burocracia.
               </p>
            </Container>
         </section>
         {/* Separador */}
         <hr className="text-tema border-2" />
         {/* Seção das dúvidas frequentes */}
         <section>
            <Container className="text-center py-20 sm:py-30">
               <h6 className="mb-7 sm:mb-15 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black">DÚVIDAS FREQUENTES</h6>
               <div className="text-start sm:mx-15 md:mx-30 lg:mx-45">
                  <Accordion perguntasRespostas={perguntaResposta} />
               </div>
            </Container>
         </section>
         <hr className="text-tema border-2" />
         {/* Seção do CTA para o whatsapp */}
         <section>
            <Container className="flex flex-col items-center py-15 lg:py-20 2xl:py-30 text-center gap-8">
               <h6 className="text-2xl sm:text-3xl font-semibold">Ainda ficou com alguma dúvida que você não encontrou a resposta acima?</h6>
               <p className="text-xl sm:text-2xl">Fale conosco no WhatsApp clicando no botão abaixo:</p>
               <Button className="uppercase">Tire suas dúvidas</Button>
            </Container>
         </section>
      </main>
   );
}
