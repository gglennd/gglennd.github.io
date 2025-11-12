import { ThemeToggle } from "@/components/theme-toggle";

export default function App() {
  return (
    <>
      <div className="bg-background text-foreground">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
          <nav className="flex items-center justify-end h-16">
            <ThemeToggle />
          </nav>
        </div>
      </div>

      <main>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
          <h1 className="text-4xl">Hello, I'm Glenn</h1>
        </div>
      </main>
    </>
  );
}
