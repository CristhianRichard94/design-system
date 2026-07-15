import { describe, expect, it } from "vitest";
import { buttonVariants } from "./Button";

// Smoke test on the cva variant logic — asserts each variant/size combination
// produces the expected class fragments. Not exhaustive UI/DOM testing.

describe("buttonVariants", () => {
  it("applies default variant + md size classes", () => {
    const classes = buttonVariants({});
    expect(classes).toContain("bg-accent");
    expect(classes).toContain("text-accent-foreground");
    expect(classes).toContain("h-10");
  });

  it("applies outline variant classes", () => {
    const classes = buttonVariants({ variant: "outline" });
    expect(classes).toContain("border");
    expect(classes).toContain("border-border");
    expect(classes).toContain("bg-transparent");
  });

  it("applies ghost variant classes", () => {
    const classes = buttonVariants({ variant: "ghost" });
    expect(classes).toContain("bg-transparent");
    expect(classes).toContain("hover:bg-muted");
  });

  it("applies destructive variant classes", () => {
    const classes = buttonVariants({ variant: "destructive" });
    expect(classes).toContain("bg-destructive");
    expect(classes).toContain("text-destructive-foreground");
  });

  it("applies sm size classes", () => {
    const classes = buttonVariants({ size: "sm" });
    expect(classes).toContain("h-8");
    expect(classes).toContain("text-xs");
  });

  it("applies md size classes", () => {
    const classes = buttonVariants({ size: "md" });
    expect(classes).toContain("h-10");
  });

  it("applies lg size classes", () => {
    const classes = buttonVariants({ size: "lg" });
    expect(classes).toContain("h-12");
    expect(classes).toContain("text-base");
  });
});
