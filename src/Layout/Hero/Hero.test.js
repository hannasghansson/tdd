import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

describe("Header Component", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
  describe("Hero layout", () => {
    test("Have a heading and h2", () => {
      setup();
      const title = screen.getByRole("heading", { level: 1 });
      expect(title).toBeInTheDocument();
    });
  });
});
