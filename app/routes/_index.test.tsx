import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import Index, { meta } from "./_index";

describe("app/routes/index", () => {
  it("should render without throwing an error", async () => {
    const { getByText } = render(<Index />);
    expect(getByText("What's next?")).toBeInTheDocument();
  });

  describe("meta function", () => {
    it("should return the correct meta tags", () => {
      const metaTags = meta();
      expect(metaTags).toEqual([
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
      ]);
    });
  });
});
