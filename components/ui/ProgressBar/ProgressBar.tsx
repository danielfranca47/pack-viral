"use client";
import { useEffect, useRef } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
   const parentContainer = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const element = parentContainer.current as Element;
      function handleIntersection(entries: IntersectionObserverEntry[]) {
         const [entry] = entries;
         if (entry.isIntersecting) {
            element?.classList.toggle(styles.progressoVisto);
         }
      }
      const observer = new IntersectionObserver(handleIntersection, { root: null, rootMargin: "0px", threshold: 0.5 });
      if (parentContainer) observer.observe(element);

      // Clean Up
      return () => {
         if (parentContainer) observer.unobserve(element);
      };
   }, [parentContainer]);

   return (
      <div className="bg-zinc-100 w-full my-9 rounded" ref={parentContainer}>
         <div className={`py-2 bg-tema text-end pe-4 rounded-s font-medium  ${styles.progresso}`}>97%</div>
      </div>
   );
};
export default ProgressBar;
