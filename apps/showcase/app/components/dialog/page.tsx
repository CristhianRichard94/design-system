import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Button
} from "@ds/ui";
import { DemoPage, DemoSection } from "../../../components/DemoSection";

export default function DialogDemo() {
  return (
    <DemoPage title="Dialog" description="Modal overlay with fade+scale enter/exit.">
      <DemoSection title="Default">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm action</DialogTitle>
              <DialogDescription>
                This is a description of what happens if you continue.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Confirm</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </DemoSection>
    </DemoPage>
  );
}
