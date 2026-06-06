import { PortfolioLayout } from "@/components/landing/portfolio-layout";
import { PROFILE, SOCIAL_LINKS, TECH_STACK } from "@/lib/constants";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <PortfolioLayout
        profile={PROFILE}
        socialLinks={SOCIAL_LINKS}
        techStack={TECH_STACK}
      />
    </div>
  );
}
