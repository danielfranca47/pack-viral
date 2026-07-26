interface ICardTestemunhoTexto {
   texto: string;
   nome: string;
   cargo: string;
   iniciais: string;
}

const CardTestemunhoTexto = ({ texto, nome, cargo, iniciais }: ICardTestemunhoTexto) => {
   return (
      <div className="rounded-3xl border-2 border-tema/30 bg-zinc-950 p-6">
         <div className="mb-3 tracking-widest text-tema">★★★★★</div>
         <p className="mb-5 text-sm sm:text-base">{texto}</p>
         <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-tema text-xs font-black text-black">{iniciais}</div>
            <div>
               <p className="text-sm font-bold">{nome}</p>
               <p className="text-xs text-zinc-400">{cargo}</p>
            </div>
         </div>
      </div>
   );
};
export default CardTestemunhoTexto;
