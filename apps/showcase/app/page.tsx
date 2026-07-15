import Link from "next/link";

const components = [
  { slug: "button", name: "Button", description: "Variants, sizes, states" },
  { slug: "badge", name: "Badge", description: "Status and label chips" },
  { slug: "input", name: "Input", description: "Text field with focus ring" },
  { slug: "card", name: "Card", description: "Content container" },
  { slug: "tooltip", name: "Tooltip", description: "Hover hints" },
  { slug: "tabs", name: "Tabs", description: "Segmented navigation" },
  { slug: "dialog", name: "Dialog", description: "Modal overlay" },
  { slug: "dropdown-menu", name: "Dropdown Menu", description: "Contextual menu" }
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-2 text-sm font-medium text-accent-400">@ds/ui</p>
        <h1 className="text-4xl font-bold tracking-tight text-fg">
          Design System Showcase
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Shared, dark-first component library built on Radix UI, Tailwind CSS,
          and Framer Motion. Browse each primitive below.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {components.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            className="group rounded-lg border border-border bg-card p-5 shadow-sm transition-all duration-base ease-out hover:border-accent-500 hover:shadow-glow"
          >
            <h2 className="font-semibold text-fg group-hover:text-accent-400">
              {c.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
