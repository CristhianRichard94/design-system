import { SpotlightCard } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function SpotlightCardDemo() {
  return (
    <DemoPage
      title="Spotlight Card"
      description="Card that tracks the cursor and renders an accent-colored radial spotlight following it."
    >
      <DemoSection title="Default">
        <SpotlightCard className="w-full max-w-sm p-6">
          <h3 className="text-lg font-semibold text-fg">Move your cursor</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The spotlight follows the mouse using Framer Motion motion values —
            no per-frame React re-renders.
          </p>
        </SpotlightCard>
      </DemoSection>
    </DemoPage>
  );
}
