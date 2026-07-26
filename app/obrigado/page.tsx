import PaginaObrigado from "@/components/shared/PaginaObrigado";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Acesso liberado — Pack Império Shop",
};

// TODO: PIXEL DE CONVERSÃO — instalar aqui os scripts reais antes de publicar.
// Esta página fecha o caminho: só produto de entrada, OTO e downsell recusados = R$5,90 total.
// Exemplo Meta Pixel (trocar PIXEL_ID e ajustar value):
//
//   fbq('track', 'Purchase', { value: 5.90, currency: 'BRL', content_name: 'Pack Imperio Shop' });
//
// Atenção: se o pixel de compra do produto de entrada (R$5,90) já dispara na própria página de
// OTO (a primeira tela após o checkout), NÃO duplique esse evento aqui — ou o Meta vai contar a
// mesma compra duas vezes e distorcer o CPA das campanhas.
//
// Se o pixel principal já dispara automaticamente pela própria Hotmart (Postback/Pixel nativo
// configurado no painel do produto), não duplique o evento aqui — confirme com quem configurou
// o rastreamento qual dos dois métodos está ativo.

export default function ObrigadoFinal() {
   return (
      <PaginaObrigado
         titulo={
            <>
               Acesso liberado.
               <br /> Seus <span className="text-tema">300 vídeos</span> já estão prontos.
            </>
         }
         subtitulo="Seu pagamento foi confirmado e seu acesso já está disponível."
         pedido={[
            { label: "Pack Império Shop", value: "R$5,90" },
            { label: "300 vídeos TikTok Shop", value: "Incluído" },
         ]}
         total="R$5,90"
         passos={[
            <>
               Você vai receber um <strong className="text-white">e-mail de confirmação</strong> em poucos minutos com o link de acesso.
            </>,
            <>
               Use o <strong className="text-white">mesmo e-mail da compra</strong> pra fazer login — o acesso já está liberado.
            </>,
            <>Baixe os vídeos do nicho certo pro seu produto e comece a postar ainda hoje.</>,
         ]}
      />
   );
}
