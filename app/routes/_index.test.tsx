import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { describe, expect, it } from "vitest";
import Index from "./_index";

describe("app/routes/index", () => {
    it("should render without throwing an error", async () => {
        const { getByText } = render(<Index />);
        expect(getByText("What's next?")).toBeInTheDocument();
    });
});