import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Home() {
   return (
      <main>
         {/* TODO: Implementar a seção inicial */}
         <section>
            <Container className="flex flex-col items-center text-center pt-4 pb-25">
               {/* Logo */}
               <Image width={292} height={127} className="mt-2.5 mb-30 w-60 h-auto" src="/img/logo.png" alt="Logotipo do site" />
               {/* Intro */}
               <div className="">
                  <h1 className="mb-12.5 text-4xl font-black uppercase">
                     Descubra como <br />
                     <span className="text-[#41f557]">ganhar em dólar</span>
                     <br /> postando vídeos virais
                  </h1>
                  <p className="text-2xl mb-40">
                     <span className="font-semibold">Transforme seu tempo livre em dinheiro!</span> Com nosso{" "}
                     <span className="font-semibold">Pack Viral 2.0</span>, você posta vídeos prontos, pega milhões de visualizações e começa a
                     receber em dólar e tudo de forma simples e rápida.
                  </p>
               </div>
               {/* TODO: Mais tarde gerar a foto ideal para esta seção */}
               {/* Destaque do conteúdo */}
               <Image
                  width={857}
                  height={682}
                  className="mb-47 self-baseline"
                  src="/img/ilustracao.avif"
                  alt="Foto demonstrando os bônus que serão adquiridos ao realizar o trabalho"
               />
               <button className="bg-[#00B419] text-3xl text-white px-5 py-3 rounded font-semibold sombraBtn cursor-pointer hover:-translate-y-1.25 transition">
                  Quero Monetizar!
               </button>
            </Container>
         </section>
         {/* TODO: Implementar a seção dos nichos em alta */}
         <section></section>
         {/* TODO: Implementar a seção do que mudou no pack viral */}
         <section></section>
         {/* TODO: Implementar a seção do que mais o cliente irá receber */}
         <section></section>
         {/* TODO: Implementar a seção dos testemunhos dos clientes */}
         <section></section>
         {/* TODO: Implementar a seção do bônus que será recebido */}
         <section></section>
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
