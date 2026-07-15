import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function TooltipDemo() {
  return (
    <DemoPage title="Tooltip" description="Fade-in hint on hover/focus.">
      <TooltipProvider>
        <DemoSection title="Default">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>This is a tooltip</TooltipContent>
          </Tooltip>
        </DemoSection>
      </TooltipProvider>
    </DemoPage>
  );
}
