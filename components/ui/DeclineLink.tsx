import { AnchorHTMLAttributes, ReactNode } from "react";

interface DeclineLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   children: ReactNode;
   href: string;
}

const DeclineLink = ({ children, href, className = "", ...props }: DeclineLinkProps) => {
   return (
      <a
         href={href}
         className={`inline-flex items-center justify-center rounded-full border-2 border-video-theme px-6 py-3 text-center text-sm font-bold text-video-theme transition hover:bg-video-theme hover:text-white ${className}`}
         {...props}
      >
         {children}
      </a>
   );
};
export default DeclineLink;
