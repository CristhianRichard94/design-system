import Link from "next/link";

export function DemoPage({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-accent-400"
      >
        &larr; Back to all components
      </Link>
      <h1 className="text-3xl font-bold tracking-tight text-fg">{title}</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
      <div className="mt-10 flex flex-col gap-10">{children}</div>
    </main>
  );
}

export function DemoSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6">
        {children}
      </div>
    </section>
  );
}
