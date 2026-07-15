import { Input } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function InputDemo() {
  return (
    <DemoPage
      title="Input"
      description="Text field with accent focus ring. Click/tab into the 'Focused example' field below to see the focus-visible ring treatment."
    >
      <DemoSection title="Default">
        <Input placeholder="Enter text..." className="max-w-xs" />
      </DemoSection>

      <DemoSection title="Focused example (tab or click to focus)">
        <Input placeholder="Focus me to see the ring" className="max-w-xs" autoFocus />
      </DemoSection>

      <DemoSection title="Disabled">
        <Input placeholder="Disabled" disabled className="max-w-xs" />
      </DemoSection>
    </DemoPage>
  );
}
