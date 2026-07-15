import { Badge, Marquee } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

const items = ["React", "Next.js", "Tailwind", "Framer Motion", "Radix UI", "TypeScript"];

export default function MarqueeDemo() {
  return (
    <DemoPage
      title="Marquee"
      description="Horizontal infinite-scroll marquee, pauses on hover. Pure CSS animation, no JS rAF loop."
    >
      <DemoSection title="Default (left, 30s loop)">
        <Marquee className="w-full">
          {items.map((item) => (
            <Badge key={item} className="shrink-0">
              {item}
            </Badge>
          ))}
        </Marquee>
      </DemoSection>

      <DemoSection title="Reverse direction, faster">
        <Marquee direction="right" speed={12} className="w-full">
          {items.map((item) => (
            <Badge key={item} variant="outline" className="shrink-0">
              {item}
            </Badge>
          ))}
        </Marquee>
      </DemoSection>
    </DemoPage>
  );
}
