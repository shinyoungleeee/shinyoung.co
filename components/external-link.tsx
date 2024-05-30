import { ReactNode } from "react";

import UpRightArrow from "./icons/up-right-arrow";

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
      <UpRightArrow />
      <p className="ml-2 h-7">{children}</p>
    </a>
  );
}
