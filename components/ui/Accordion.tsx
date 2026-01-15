import { IPerguntaResposta } from "@/types/types";

const Accordion = ({ perguntasRespostas }: { perguntasRespostas: IPerguntaResposta[] }) => {
   return (
      <div className="border">
         {perguntasRespostas.map(({ pergunta, resposta }, k) => (
            <div key={k}>
               <details className="open:[&_summary]:text-green-600 *:transition open:[&_p]:opacity-100" name="PerguntasRespostas">
                  <summary className="text-lg sm:text-xl lg:text-2xl p-3 sm:p-4 font-semibold hover:bg-zinc-900 cursor-pointer">
                     {pergunta}
                  </summary>
                  <p className="lg:text-2xl px-6 pb-6 opacity-0 transition-opacity">{resposta}</p>
               </details>
               {/* Separador */}
               {k + 1 < perguntasRespostas.length && <hr />}
            </div>
         ))}
      </div>
   );
};
export default Accordion;
