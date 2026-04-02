"use client";
import { VolumeOff } from "lucide-react";
import Player from "next-video";
import { useRef, useState } from "react";

const videoUrl = "https://res.cloudinary.com/dtra2u08q/video/upload/v1775124216/Cakto_packviral.online_nbijpd.mp4";

const VideoPlayer = () => {
   const [clicaste, setClicaste] = useState(false);
   const videoRef = useRef<HTMLVideoElement | null>(null);

   function handleButtonClick() {
      if (videoRef?.current) {
         setClicaste(true);
         videoRef.current.muted = false;
         videoRef.current.volume = 1;
         videoRef.current.currentTime = -1;
      }
   }

   return (
      <div className="w-fit relative flex items-center justify-center">
         <Player
            autoPlay
            muted
            ref={videoRef}
            src={videoUrl}
            className="**:mx-auto aspect-auto! *:border *:border-tema *:w-[85%]! md:*:w-120! xl:*:w-130!"
         />
         {!clicaste && (
            <div
               onClick={handleButtonClick}
               className="absolute text-center flex flex-col items-center bg-violet-500 p-5 gap-2 cursor-pointer border rounded opacity-90"
            >
               <p className="font-semibold">Seu vídeo já começou</p>
               <VolumeOff className="size-12" />
               <p>Clique para ouvir</p>
            </div>
         )}
      </div>
   );
};
export default VideoPlayer;
