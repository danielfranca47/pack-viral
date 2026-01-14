import { IPerguntaResposta } from "@/data/data";

const Accordion = ({ perguntasRespostas }: { perguntasRespostas: IPerguntaResposta[] }) => {
   return (
      <div className="border text-2xl">
         {perguntasRespostas.map(({ pergunta, resposta }, k) => (
            <div key={k}>
               <details className="open:[&_summary]:text-green-600 *:transition open:[&_p]:opacity-100" name="PerguntasRespostas">
                  <summary className="p-4 font-semibold hover:bg-zinc-900 cursor-pointer">{pergunta}</summary>
                  <p className="px-6 pb-6 opacity-0 transition-opacity">{resposta}</p>
               </details>
               {/* Separador */}
               {k + 1 < perguntasRespostas.length && <hr />}
            </div>
         ))}
      </div>
   );
};
export default Accordion;
