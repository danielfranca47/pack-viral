import { ReactNode } from "react";

const Button = ({ children, className }: { children: ReactNode; className?: string }) => {
   return (
      <button
         className={`bg-[#FF751E] text-[27px] text-white px-6 py-3 rounded font-semibold sombraBtn cursor-pointer hover:-translate-y-1.25 transition ${className}`}
      >
         {children}
      </button>
   );
};
export default Button;
