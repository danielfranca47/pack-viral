"use client";
import Script from "next/script";

declare global {
   interface Window {
      checkoutElements?: {
         init: (nome: string) => { mount: (seletor: string) => void };
      };
   }
}

/** Widget oficial do Funil de Vendas da Hotmart (botão de compra em um clique + redirecionamento do funil). */
const HotmartFunnelWidget = () => {
   return (
      <>
         <div id="hotmart-sales-funnel" />
         <Script
            src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
            strategy="afterInteractive"
            onLoad={() => {
               window.checkoutElements?.init("salesFunnel").mount("#hotmart-sales-funnel");
            }}
         />
      </>
   );
};
export default HotmartFunnelWidget;
