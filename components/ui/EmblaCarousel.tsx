"use client";
import { testemunhos } from "@/data/data";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = () => {
   const [emblaRef] = useEmblaCarousel();

   return (
      <div className="embla" ref={emblaRef}>
         <div className="embla__container mask-r-from-90%">
            {testemunhos.map((testemunho, k) => (
               <div className="embla__slide" key={k}>
                  <Image width={264} height={470} src={testemunho} alt="Captura de whatsapp contendo testemunho de um cliente satisfeito" />
               </div>
            ))}
         </div>
      </div>
   );
};
export default EmblaCarousel;
