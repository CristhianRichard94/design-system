import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function TabsDemo() {
  return (
    <DemoPage title="Tabs" description="Segmented navigation between related views.">
      <DemoSection title="Default">
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p className="text-sm text-muted-foreground">Account tab content.</p>
          </TabsContent>
          <TabsContent value="settings">
            <p className="text-sm text-muted-foreground">Settings tab content.</p>
          </TabsContent>
        </Tabs>
      </DemoSection>
    </DemoPage>
  );
}
