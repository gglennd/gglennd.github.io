import { RiGithubFill, RiLinkedinFill, RiMailLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    icon: RiGithubFill,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: RiLinkedinFill,
  },
  {
    href: "mailto:hello@example.com",
    label: "Email",
    icon: RiMailLine,
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-subtle opacity-[0.02] dark:opacity-[0.01] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="font-semibold text-lg">Glenn dela Cruz</span>
            <span className="text-sm text-muted-foreground">
              Frontend Developer & UI/UX Enthusiast
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-2">
            {socialLinks.map(social => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon-sm"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy;
            {currentYear}
            {" "}
            Glenn dela Cruz. All rights reserved.
          </p>
          <p className="text-xs">
            Built with
            {" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              React
            </a>
            {" "}
            &
            {" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              TailwindCSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
