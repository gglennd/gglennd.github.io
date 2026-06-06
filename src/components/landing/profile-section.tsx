import type { PROFILE } from "@/lib/constants";
import type { SocialLink, TechStack } from "@/lib/types";

import { ProfileHeader } from "./profile-header";
import { SocialLinks } from "./social-links";
import { StackList } from "./stack-list";

interface ProfileSectionProps {
  profile: typeof PROFILE;
  techStack: TechStack[];
  socialLinks: SocialLink[];
}

export function ProfileSection({ profile, techStack, socialLinks }: ProfileSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      <ProfileHeader data={profile} />
      <div className="space-y-4">
        <StackList data={techStack} />
        <SocialLinks data={socialLinks} />
      </div>
    </div>
  );
}
