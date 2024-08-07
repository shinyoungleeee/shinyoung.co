import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      <ArrowUpRight className="h-5 w-5" />
      <p className="ml-2">{children}</p>
    </a>
  );
}
