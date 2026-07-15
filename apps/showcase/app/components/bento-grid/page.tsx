import { BentoGrid, BentoGridItem } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function BentoGridDemo() {
  return (
    <DemoPage
      title="Bento Grid"
      description="CSS grid bento layout. Items can span 1 or 2 columns/rows, with hover lift + glow border."
    >
      <DemoSection title="Default">
        <BentoGrid className="w-full">
          <BentoGridItem colSpan={2}>
            <h3 className="font-semibold text-fg">Wide item</h3>
            <p className="text-sm text-muted-foreground">Spans 2 columns.</p>
          </BentoGridItem>
          <BentoGridItem>
            <h3 className="font-semibold text-fg">Standard item</h3>
            <p className="text-sm text-muted-foreground">Spans 1 column.</p>
          </BentoGridItem>
          <BentoGridItem rowSpan={2}>
            <h3 className="font-semibold text-fg">Tall item</h3>
            <p className="text-sm text-muted-foreground">Spans 2 rows.</p>
          </BentoGridItem>
          <BentoGridItem>
            <h3 className="font-semibold text-fg">Standard item</h3>
            <p className="text-sm text-muted-foreground">Spans 1 column.</p>
          </BentoGridItem>
          <BentoGridItem>
            <h3 className="font-semibold text-fg">Standard item</h3>
            <p className="text-sm text-muted-foreground">Spans 1 column.</p>
          </BentoGridItem>
        </BentoGrid>
      </DemoSection>
    </DemoPage>
  );
}
