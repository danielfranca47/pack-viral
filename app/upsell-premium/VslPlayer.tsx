"use client";
import { VIDEO_URL_PRINCIPAL } from "@/data/data";

const VslPlayer = () => {
   return (
      <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-3xl border-[3px] border-tema bg-gradient-to-br from-[#0d130d] to-black shadow-[0_0_60px_rgba(65,245,87,0.2)]">
         <video
            src={VIDEO_URL_PRINCIPAL}
            controls
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 size-full object-cover"
         />
      </div>
   );
};
export default VslPlayer;
