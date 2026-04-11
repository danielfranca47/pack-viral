"use client";
import { Pause, Play, Repeat, VolumeOff } from "lucide-react";
import Player from "next-video";
import { useEffect, useRef, useState } from "react";

const videoUrl = "https://res.cloudinary.com/dtra2u08q/video/upload/v1775124216/Cakto_packviral.online_nbijpd.mp4";

// Caso queira escalar ler: https://next-video.dev/docs#main

const VideoPlayer = () => {
   // Define se o usuário clicou ou não no botão para ativar o som
   const [clicaste, setClicaste] = useState(false);
   // Define se o usuário assistiu ou não
   const [assistiu, setAssistiu] = useState(false);
   // Define se a análise do tempo assistido foi concluida
   const [analiseConcluida, setAnaliseConcluida] = useState(false);
   // Define o percentual do progresso do tempo
   const [progresso, setProgresso] = useState(10);
   // Define se o video está sendo reproduzido
   const [playing, setPlaying] = useState(true);
   // Define se a animação de play ou pause deve ser mostrada
   const [mostrarAnimacaoDePlayOuPause, setMostrarAnimacaoDePlayOuPause] = useState(false);

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
                  // Ao clicar no vídeo, ele pausa ou resume dependendo do estado
                  if (videoRef?.current) {
                     if (playing) {
                        videoRef.current.pause();
                        setPlaying(false);
                     } else {
                        videoRef.current.play();
                        setPlaying(true);
                     }
                  }
                  // Ao clicar no vídeo, ele mostra o botão de play se ele estiver pausado e vice-versa por 2 segundos
                  setMostrarAnimacaoDePlayOuPause(true);
                  setTimeout(() => {
                     setMostrarAnimacaoDePlayOuPause(false);
                  }, 2000);
               }}
               className="**:mx-auto aspect-auto! *:border *:border-tema *:w-full! md:*:w-120! xl:*:w-130!"
               onTimeUpdate={(e) => {
                  // Calcular a percentagem do progresso de acordo com a duração total e o tempo actual do vídeo
                  const progresso = (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
                  setProgresso(progresso);
               }}
            />

            {assistiu ? (
               // Caso o usuário ja assistiu, mostra essa mensagem
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
               // Logo no início caso o usuário não assistiu, mostra essa mensagem
               <div
                  onClick={handleButtonClick}
                  className="absolute text-center flex flex-col items-center bg-violet-500 p-5 gap-2 cursor-pointer border rounded opacity-90"
               >
                  <p className="font-semibold">Seu vídeo já começou</p>
                  <VolumeOff className="size-12" />
                  <p>Clique para ouvir</p>
               </div>
            ) : (
               <>
                  {/* Botão animado de play ou pause */}
                  {mostrarAnimacaoDePlayOuPause && (
                     <div className="absolute flex items-center justify-center bg-violet-500 rounded-full p-3 sm:p-4">
                        {playing ? <Pause className="size-9 sm:size-12" /> : <Play className="size-9 sm:size-12" />}
                     </div>
                  )}
                  {/* Barra de progresso */}
                  <div className="absolute inset-x-0.5 bottom-0.5  bg-black  bordert  self-end">
                     <div className=" bg-violet-500 transition h-12 flex items-center justify-end pe-2" style={{ width: `${progresso}%` }}>
                        {progresso > 8 && `${progresso.toFixed(0)}%`}
                     </div>
                  </div>
               </>
            )}
         </div>
      )
   );
};
export default VideoPlayer;
