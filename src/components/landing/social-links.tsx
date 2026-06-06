import type { SocialLink } from "@/lib/types";

import { AnimatedGroup } from "@/components/motions/animated-group";

interface SocialLinksProps {
  data: SocialLink[];
}

export function SocialLinks({ data }: SocialLinksProps) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest shrink-0 w-20">
        socials
      </h3>
      <AnimatedGroup
        className="flex items-center gap-4"
        preset="blur-slide"
      >
        {data.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={link.name}
          >
            <link.icon className="size-5" />
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </AnimatedGroup>
    </div>
  );
}
