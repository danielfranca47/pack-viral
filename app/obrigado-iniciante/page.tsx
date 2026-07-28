import PaginaObrigado from "@/components/shared/PaginaObrigado";
import { LINK_AREA_MEMBROS } from "@/data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Acesso liberado — Pack Império Viral Iniciante",
};

// TODO: PIXEL DE CONVERSÃO — instalar aqui os scripts reais antes de publicar.
// Esta página fecha o caminho: Entrada (R$5,90) + OTO recusado + Downsell aceito (R$27) = R$32,90 total.
// Exemplo Meta Pixel (trocar PIXEL_ID e ajustar value):
//
//   fbq('track', 'Purchase', { value: 27.00, currency: 'BRL', content_name: 'Pack Imperio Viral Iniciante' });
//
// Se o pixel principal já dispara automaticamente pela própria Hotmart (Postback/Pixel nativo
// configurado no painel do produto), não duplique o evento aqui — confirme com quem configurou
// o rastreamento qual dos dois métodos está ativo.

export default function ObrigadoIniciante() {
   return (
      <PaginaObrigado
         titulo={
            <>
               Acesso liberado.
               <br /> Bem-vindo ao <span className="text-tema">Iniciante.</span>
            </>
         }
         subtitulo="Seu pagamento foi confirmado e seu acesso já está disponível."
         pedido={[
            { label: "Pack Império Shop (entrada)", value: "R$5,90" },
            { label: "Pack Império Viral 2.0 Iniciante", value: "R$27,00" },
            { label: "+10.000 vídeos virais", value: "Incluído" },
         ]}
         total="R$32,90"
         linkAreaMembros={LINK_AREA_MEMBROS.iniciante}
         nomeProduto="Pack Império Viral 2.0 Iniciante"
         passos={[
            <>
               Você vai receber um <strong className="text-white">e-mail de confirmação</strong> em poucos minutos com o link da área de
               membros.
            </>,
            <>
               Use o <strong className="text-white">mesmo e-mail da compra</strong> pra fazer login — o acesso já está liberado.
            </>,
            <>
               Explore o banco de <strong className="text-white">10.000 vídeos</strong> organizados por nicho e comece a postar.
            </>,
         ]}
      />
   );
}
