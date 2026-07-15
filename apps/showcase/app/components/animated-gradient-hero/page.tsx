import { AnimatedGradientHero, Button } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function AnimatedGradientHeroDemo() {
  return (
    <DemoPage
      title="Animated Gradient Hero"
      description="Hero section wrapper with a slow-looping animated accent gradient behind slotted content."
    >
      <DemoSection title="Default">
        <AnimatedGradientHero className="w-full">
          <p className="mb-2 text-sm font-medium text-accent-400">@ds/ui</p>
          <h2 className="text-3xl font-bold tracking-tight text-fg">
            Build bold interfaces, fast.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A slotted title/subtitle/CTA hero with an animated accent gradient background.
          </p>
          <Button className="mt-6">Get started</Button>
        </AnimatedGradientHero>
      </DemoSection>
    </DemoPage>
  );
}
