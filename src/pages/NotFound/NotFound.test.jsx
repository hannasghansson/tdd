import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("Header Component", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  describe("Not found layout", () => {
    test("Have Heading", () => {
      setup();
      const title = screen.getByRole("heading", { level: 1 });
      expect(title).toBeInTheDocument();
    });

    test("Have a button", () => {
      setup();
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
    });

    test("Not found go back home button", () => {
      setup();
      const button = screen.getByRole("button", { name: /Return Home/i });
      expect(button).toBeInTheDocument();
    });
  });
});
