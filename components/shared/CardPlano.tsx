import { CircleChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";

interface ICardPlano {
   foto: string;
   modo: "premium" | "iniciante";
   destaques: string[];
   preco: number;
   cta: string;
}
const CardPlano = ({ foto, modo, destaques, preco, cta }: ICardPlano) => {
   return (
      <div className={`sombraBtn ${modo === "premium" ? "text-black bg-zinc-100" : "bg-black text-zinc-100 sticky top-0"} h-fit`}>
         <p className="text-2xl italic font-light">Este é um produto 100% digital, e você receberá o acesso por email.</p>
         <Image className="h-auto mt-4" width={650} height={600} src={foto} alt="Foto descrevendo o produto" />
         {modo === "premium" ? (
            <p className="my-5 text-4xl font-black text-shadow-lg">
               Plano Superpack <span className="text-amber-600">Premium</span>
            </p>
         ) : (
            <p className="my-5 text-4xl font-black text-shadow-lg">Plano Iniciante</p>
         )}
         {modo === "premium" && <p className="font-bold text-2xl">Apenas hoje, você receberá tudo isso:</p>}
         {/* Destaques */}
         <div className="flex flex-col gap-3 *:flex *:items-center *:gap-2 text-start text-xl font-medium mb-7 mt-7">
            {destaques.map((v, k) => (
               <>
                  <div key={k}>
                     <CircleChevronRight className={`bg-tema ${modo === "premium" ? "text-red-100" : "text-black"} rounded-full size-6`} />{" "}
                     <p>{v}</p>
                  </div>
                  {k + 1 < destaques.length && <div className="border"></div>}
               </>
            ))}
         </div>
         {/* Proposta */}
         <div className="pb-5">
            <p className="font-bold mb-4 text-2xl">Receba o acesso agora por:</p>
            <p className="mb-13 text-7xl font-black text-tema">R${Number(preco).toFixed(2).replace(".", ",")}</p>
            <Button>{cta}</Button>
            {modo === "premium" && (
               <p className="font-semibold mt-9">
                  Aproveite Agora: <span className="underline font-light">Você não encontrará este preço depois!</span>
               </p>
            )}
         </div>
      </div>
   );
};
export default CardPlano;
