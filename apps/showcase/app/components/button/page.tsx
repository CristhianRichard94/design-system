import { Button } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function ButtonDemo() {
  return (
    <DemoPage
      title="Button"
      description="Interactive control with variant/size combinations, disabled state, and a subtle press micro-scale."
    >
      <DemoSection title="Variants">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </DemoSection>

      <DemoSection title="Sizes">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </DemoSection>

      <DemoSection title="Disabled">
        <Button disabled>Default</Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
        <Button variant="destructive" disabled>
          Destructive
        </Button>
      </DemoSection>
    </DemoPage>
  );
}
