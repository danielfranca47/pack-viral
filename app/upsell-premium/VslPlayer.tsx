"use client";
import { Play } from "lucide-react";
import { useState } from "react";

// TODO: SEU_LINK_DE_VIDEO_AQUI — substituir pelo link real de embed do vídeo (Youtube/Vimeo/Panda) antes de publicar
const VIDEO_SRC = "SEU_LINK_DE_VIDEO_AQUI";

const VslPlayer = () => {
   const [tocando, setTocando] = useState(false);

   return (
      <div
         onClick={() => setTocando(true)}
         className="relative mx-auto aspect-video max-w-2xl cursor-pointer overflow-hidden rounded-3xl border-[3px] border-tema bg-gradient-to-br from-[#0d130d] to-black shadow-[0_0_60px_rgba(65,245,87,0.2)]"
      >
         {tocando ? (
            <iframe src={VIDEO_SRC} className="absolute inset-0 size-full border-0" allow="autoplay; fullscreen" allowFullScreen />
         ) : (
            <Play className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tema p-4 text-black shadow-[0_0_50px_rgba(65,245,87,0.55)]" />
         )}
      </div>
   );
};
export default VslPlayer;
