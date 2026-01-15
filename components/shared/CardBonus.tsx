import { IBonus } from "@/types/types";
import Image from "next/image";

const CardBonus = ({ titulo, descricao, foto, precoAnterior, precoAtual, chave }: IBonus) => {
   return (
      <div className="shadow-orange-300 border-4 border-orange-400 shadow-md flex flex-col mx-auto rounded-3xl">
         <Image width={1024} height={819} className="w-auto h-auto" src={foto} alt="Ilustração demonstrando o bônus que será recebido " />
         <div className="p-4 sm:p-7 bg-zinc-950 text-xl lg:text-2xl rounded-[inherit]">
            <h6 className="italic text-tema font-bold text-[17px] sm:text-[19px] underline">Bônus #0{Number(chave) + 1}</h6>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2 mb-4 text-green-300">{titulo}</p>
            <p className="text-ini">{descricao}</p>
            <div className="mt-4">
               <p>
                  De: <span className="text-red-500 font-bold">{precoAnterior}</span>
               </p>
               <p>
                  Por: <span className="text-green-600 font-bold">{precoAtual}</span>
               </p>
            </div>
         </div>
      </div>
   );
};
export default CardBonus;
