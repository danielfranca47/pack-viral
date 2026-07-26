import { AnchorHTMLAttributes, ReactNode } from "react";

interface PillButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   children: ReactNode;
   href: string;
   /** solid = CTA principal (verde). outline = CTA secundário (ex: WhatsApp) */
   variant?: "solid" | "outline";
}

const PillButton = ({ children, href, variant = "solid", className = "", ...props }: PillButtonProps) => {
   const base =
      "inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-extrabold uppercase tracking-wide transition hover:-translate-y-0.5 cursor-pointer";
   const solid = "bg-tema text-black sombraBtn";
   const outline = "border-2 border-zinc-800 bg-zinc-950 text-white normal-case";

   return (
      <a href={href} className={`${base} ${variant === "solid" ? solid : outline} ${className}`} {...props}>
         {children}
      </a>
   );
};
export default PillButton;
