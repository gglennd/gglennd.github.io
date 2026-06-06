import type { PROFILE } from "@/lib/constants";

interface ProfileHeaderProps {
  data: typeof PROFILE;
}

export function ProfileHeader({ data }: ProfileHeaderProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl lowercase">
        {data.name}
      </h1>
      <p className="text-lg text-muted-foreground lowercase leading-relaxed font-medium">
        {data.description}
      </p>
    </div>
  );
}
