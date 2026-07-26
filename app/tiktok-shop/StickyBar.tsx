"use client";
import { useEffect, useState } from "react";

const StickyBar = () => {
   const [visivel, setVisivel] = useState(false);

   useEffect(() => {
      function handleScroll() {
         setVisivel(window.scrollY > 520);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div
         className={`fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-tema/30 bg-zinc-950 px-4 py-3 transition-transform duration-300 sm:px-6 ${
            visivel ? "translate-y-0" : "translate-y-full"
         }`}
      >
         <span className="text-sm font-extrabold sm:text-base">
            R$5,90 <span className="ml-1.5 text-xs font-medium text-zinc-500 line-through">R$37</span>
         </span>
         <a href="#oferta" className="sombraBtn shrink-0 rounded-full bg-tema px-5 py-3 text-xs font-extrabold uppercase text-black sm:px-7 sm:text-sm">
            Quero acesso →
         </a>
      </div>
   );
};
export default StickyBar;
