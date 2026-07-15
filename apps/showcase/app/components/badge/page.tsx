import { Badge } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function BadgeDemo() {
  return (
    <DemoPage title="Badge" description="Compact status and label chips.">
      <DemoSection title="Variants">
        <Badge variant="default">Default</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="muted">Muted</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </DemoSection>
    </DemoPage>
  );
}
