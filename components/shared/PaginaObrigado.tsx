import Container from "@/components/layout/Container";
import PillButton from "@/components/ui/PillButton";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface ILinhaPedido {
   label: string;
   value: string;
}

interface IPaginaObrigado {
   titulo: ReactNode;
   subtitulo: string;
   pedido: ILinhaPedido[];
   total: string;
   passos: ReactNode[];
   /** Link direto para o produto correspondente na área de membros (Hotmart Club) */
   linkAreaMembros: string;
}

const PaginaObrigado = ({ titulo, subtitulo, pedido, total, passos, linkAreaMembros }: IPaginaObrigado) => {
   return (
      <main className="bg-black">
         <Container className="flex flex-col items-center py-14 text-center sm:py-20">
            <Image src="/img/logo.png" width={180} height={78} alt="Logotipo do site" className="mb-8 h-auto w-32 sm:w-40" />

            <div className="sombraBtn mb-6 flex size-16 items-center justify-center rounded-full bg-tema sm:size-18">
               <Check className="size-8 text-black" strokeWidth={3} />
            </div>

            <h1 className="mb-3 max-w-lg text-2xl font-black uppercase sm:text-3xl">{titulo}</h1>
            <p className="mb-9 max-w-md text-zinc-400">{subtitulo}</p>

            {/* Resumo do pedido */}
            <div className="mb-8 w-full max-w-md rounded-3xl border-2 border-tema bg-zinc-950 p-6 text-left sm:p-7">
               {pedido.map((linha, k) => (
                  <div key={k} className="flex items-center justify-between border-b border-tema/20 py-2.5 text-sm font-semibold sm:text-base">
                     <span className="text-zinc-400">{linha.label}</span>
                     <span>{linha.value}</span>
                  </div>
               ))}
               <div className="mt-1.5 flex items-center justify-between pt-3.5 font-black">
                  <span>Total pago</span>
                  <span className="text-tema">{total}</span>
               </div>
            </div>

            {/* Passo a passo de acesso */}
            <div className="mb-8 w-full max-w-md text-left">
               <h2 className="mb-4 text-lg font-bold">Como acessar agora:</h2>
               <div className="flex flex-col gap-4">
                  {passos.map((passo, k) => (
                     <div className="flex items-start gap-3.5" key={k}>
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-tema text-xs font-black text-black">
                           {k + 1}
                        </div>
                        <p className="pt-0.5 text-sm text-zinc-400 sm:text-base">{passo}</p>
                     </div>
                  ))}
               </div>
            </div>

            <PillButton href={linkAreaMembros} className="mb-3.5 max-w-md">
               Acessar área de membros →
            </PillButton>
            {/* TODO: wa.me/SEUNUMERO — substituir pelo número real de WhatsApp de suporte */}
            <PillButton href="https://wa.me/SEUNUMERO" variant="outline" className="max-w-md">
               <MessageCircle className="size-4" /> Falar no WhatsApp com o suporte
            </PillButton>
            <p className="mt-3 text-xs text-zinc-500">Não recebeu o e-mail? Confira a caixa de spam antes de nos chamar.</p>
         </Container>

         <footer className="border-t border-tema/20 py-10 text-center">
            <Container>
               <p className="text-xs text-zinc-500">Compra processada com segurança via Hotmart. Uma marca Empire Class.</p>
            </Container>
         </footer>
      </main>
   );
};
export default PaginaObrigado;
