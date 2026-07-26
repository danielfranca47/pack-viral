import PaginaObrigado from "@/components/shared/PaginaObrigado";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Acesso liberado — Pack Império Viral Premium",
};

// TODO: PIXEL DE CONVERSÃO — instalar aqui os scripts reais antes de publicar.
// Esta página fecha o caminho: Entrada (R$5,90) + OTO aceito (R$47) = R$52,90 total.
// Exemplo Meta Pixel (trocar PIXEL_ID e ajustar value):
//
//   fbq('track', 'Purchase', { value: 47.00, currency: 'BRL', content_name: 'Pack Imperio Viral Premium' });
//
// Se o pixel principal já dispara automaticamente pela própria Hotmart (Postback/Pixel nativo
// configurado no painel do produto), não duplique o evento aqui — confirme com quem configurou
// o rastreamento qual dos dois métodos está ativo.

export default function ObrigadoPremium() {
   return (
      <PaginaObrigado
         titulo={
            <>
               Acesso liberado.
               <br /> Bem-vindo ao <span className="text-tema">Premium.</span>
            </>
         }
         subtitulo="Seu pagamento foi confirmado e seu acesso completo já está disponível."
         pedido={[
            { label: "Pack Império Shop (entrada)", value: "R$5,90" },
            { label: "Pack Império Viral 2.0 Premium", value: "R$47,00" },
            { label: "+70.000 vídeos + 3 bônus", value: "Incluído" },
         ]}
         total="R$52,90"
         passos={[
            <>
               Você vai receber um <strong className="text-white">e-mail de confirmação</strong> em poucos minutos com o link da área de
               membros.
            </>,
            <>
               Use o <strong className="text-white">mesmo e-mail da compra</strong> pra fazer login — o acesso já está liberado.
            </>,
            <>
               Comece pelo <strong className="text-white">Treinamento TikTok Cash</strong> antes de explorar o banco de vídeos.
            </>,
         ]}
      />
   );
}
