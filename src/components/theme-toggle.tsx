import { RiMoonLine, RiSunLine } from "@remixicon/react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
    >
      {theme === "dark"
        ? (
            <RiMoonLine size={16} />
          )
        : (
            <RiSunLine size={16} />
          )}
    </Toggle>
  );
}
