import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
   children: ReactNode;
   className?: string;
} & (({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>));

const Button = ({ children, className, href, ...props }: ButtonProps) => {
   const classes = `inline-block bg-[#00B419] text-[21px] sm:text-[27px] text-white px-6 py-3 rounded font-semibold sombraBtn cursor-pointer hover:-translate-y-1.25 transition ${className}`;

   // Se receber `href`, renderiza como link (ex.: redirecionar para o checkout da Hotmart)
   if (href) {
      return (
         <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
            {children}
         </a>
      );
   }

   return (
      <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
         {children}
      </button>
   );
};
export default Button;
