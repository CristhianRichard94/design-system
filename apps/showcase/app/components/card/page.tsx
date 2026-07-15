import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button
} from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function CardDemo() {
  return (
    <DemoPage title="Card" description="Content container with header/content/footer slots.">
      <DemoSection title="Default">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project alpha</CardTitle>
            <CardDescription>A short description of this card&apos;s contents.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-fg">
              Body content goes here — text, forms, or any other elements.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Continue</Button>
          </CardFooter>
        </Card>
      </DemoSection>
    </DemoPage>
  );
}
