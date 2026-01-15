"use client";
import { testemunhos } from "@/data/data";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = () => {
   const [emblaRef] = useEmblaCarousel();

   return (
      <div className="embla mask-r-from-90% overflow-hidden" ref={emblaRef}>
         <div className="embla__container flex gap-5 ">
            {testemunhos.map((testemunho, k) => (
               <div className="embla__slide shrink-0 basis-[fit-content]" key={k}>
                  <Image width={264} height={470} src={testemunho} alt="Captura de whatsapp contendo testemunho de um cliente satisfeito" />
               </div>
            ))}
         </div>
      </div>
   );
};
export default EmblaCarousel;
