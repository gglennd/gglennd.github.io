import type { TechStack } from "@/lib/types";

import { AnimatedGroup } from "@/components/motions/animated-group";

interface StackListProps {
  data: TechStack[];
}

export function StackList({ data }: StackListProps) {
  return (
    <div className="space-y-6">
      {data.map(stack => (
        <div key={stack.category} className="flex flex-row gap-4 items-baseline">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest shrink-0 w-20">
            {stack.category}
          </h3>
          <AnimatedGroup
            className="flex flex-wrap gap-x-4 gap-y-2"
            preset="blur-slide"
          >
            {stack.items.map(item => (
              <div key={item.name} className="flex items-center gap-2 group">
                <span className="text-sm text-foreground font-medium lowercase">
                  {item.name}
                </span>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      ))}
    </div>
  );
}
