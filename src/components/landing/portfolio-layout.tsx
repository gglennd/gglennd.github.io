import type { PROFILE } from "@/lib/constants";
import type { SocialLink, TechStack } from "@/lib/types";

import { ProfileSection } from "@/components/landing/profile-section";
import { ProjectSection } from "@/components/landing/project-section";

interface PortfolioLayoutProps {
  profile: typeof PROFILE;
  techStack: TechStack[];
  socialLinks: SocialLink[];
}

export function PortfolioLayout({ profile, techStack, socialLinks }: PortfolioLayoutProps) {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 md:px-12 lg:px-24">
      <div className="relative grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-24 lg:gap-16">
        <header className="order-last lg:order-first lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col pt-8 pb-24 lg:py-16">
          <ProfileSection
            profile={profile}
            techStack={techStack}
            socialLinks={socialLinks}
          />
        </header>
        <main id="content" className="order-first lg:order-last pb-12 lg:pb-16">
          <ProjectSection />
        </main>
      </div>
    </div>
  );
}
