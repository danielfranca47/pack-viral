"use client";
import { Play, Repeat, VolumeOff } from "lucide-react";
import Player from "next-video";
import { useEffect, useRef, useState } from "react";

const videoUrl = "https://res.cloudinary.com/dtra2u08q/video/upload/v1775124216/Cakto_packviral.online_nbijpd.mp4";

// Caso queira escalar ler: https://next-video.dev/docs#main

const VideoPlayer = () => {
   const [clicaste, setClicaste] = useState(false);
   const [assistiu, setAssistiu] = useState(false);
   const [analiseConcluida, setAnaliseConcluida] = useState(false);
   const [progresso, setProgresso] = useState(10);
   const [playing, setPlaying] = useState(true);

   const videoRef = useRef<HTMLVideoElement | null>(null);

   function handleButtonClick() {
      if (videoRef?.current) {
         setClicaste(true);
         videoRef.current.muted = false;
         videoRef.current.volume = 1;
         videoRef.current.currentTime = 0;
      }
   }

   function continuarAssistindo() {
      if (videoRef?.current) {
         videoRef.current.muted = false;
         videoRef.current.volume = 1;
         videoRef.current.currentTime = Number(localStorage.getItem("tempoAssistido"));
         setAssistiu(false);
         setClicaste(true);
      }
   }

   function assistirDoInicio() {
      if (videoRef?.current) {
         videoRef.current.muted = false;
         videoRef.current.volume = 1;
         videoRef.current.currentTime = 0;
         setAssistiu(false);
         setClicaste(true);
      }
   }

   useEffect(() => {
      // Verifica se o usuário já assistiu ou não
      const tempoAssistido = localStorage.getItem("tempoAssistido");
      function verificarSeAssistiu() {
         if (Number(tempoAssistido) > 10) setAssistiu(true);
         setAnaliseConcluida(true);
      }
      verificarSeAssistiu();

      // Atualiza o progresso no localStora a cada 10 segundos
      const atualizar = setInterval(() => {
         console.log(String(videoRef?.current?.currentTime));
         localStorage.setItem("tempoAssistido", String(videoRef?.current?.currentTime));
      }, 8000);

      // Clean-up do timer
      return () => {
         clearInterval(atualizar);
      };
   }, []);

   /* Renderiza o player após verificar se o usuário assistiu */
   return (
      analiseConcluida && (
         <div className="w-fit relative flex items-center justify-center cursor-pointer mx-4 sm:mx-0">
            <Player
               autoPlay
               muted
               style={{ opacity: "0 !important" }}
               ref={videoRef}
               src={videoUrl}
               onPlay={() => setPlaying}
               onClick={() => {
                  if (videoRef?.current) {
                     if (playing) {
                        videoRef.current.pause();
                        setPlaying(false);
                     } else {
                        videoRef.current.play();
                        setPlaying(true);
                     }
                  }
               }}
               className="**:mx-auto aspect-auto! *:border *:border-tema *:w-full! md:*:w-120! xl:*:w-130!"
               onTimeUpdate={(e) => {
                  // Calcular a percentagem do progresso de acordo com a duração total e o tempo actual do vídeo
                  const progresso = (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
                  setProgresso(progresso);
               }}
            />

            {assistiu ? (
               <div className="absolute inset-0 bg-violet-500 flex flex-col items-center justify-center gap-4 [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div]:cursor-pointer [&>div]:hover:scale-110 [&>div]:transition">
                  <p className="font-semibold mb-2">Você já começou a assistir esse vídeo</p>
                  <div onClick={continuarAssistindo}>
                     <Play />
                     <span>Continuar assistindo?</span>
                  </div>
                  <hr className="border-white w-50 border-dashed" />
                  <div onClick={assistirDoInicio}>
                     <Repeat />
                     <span>Assistir do início?</span>
                  </div>
               </div>
            ) : !clicaste ? (
               <div
                  onClick={handleButtonClick}
                  className="absolute text-center flex flex-col items-center bg-violet-500 p-5 gap-2 cursor-pointer border rounded opacity-90"
               >
                  <p className="font-semibold">Seu vídeo já começou</p>
                  <VolumeOff className="size-12" />
                  <p>Clique para ouvir</p>
               </div>
            ) : (
               <div className="absolute inset-x-0.5 bottom-0.5  bg-black  bordert  self-end">
                  <div className=" bg-violet-500 transition h-12 flex items-center justify-end pe-2" style={{ width: `${progresso}%` }}>
                     {progresso > 8 && `${progresso.toFixed(0)}%`}
                  </div>
               </div>
            )}
         </div>
      )
   );
};
export default VideoPlayer;
