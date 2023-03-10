import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  describe("Header layout", () => {
    test("Have Heading", () => {
      setup();
      const title = screen.getByRole("heading", { level: 1 });
      expect(title).toBeInTheDocument();
    });
    test("Teachers button", () => {
      setup();
      const button = screen.getByRole("button", { name: /Teachers/i });
      expect(button).toBeInTheDocument();
    });
    test("Courses button", () => {
      setup();
      const button = screen.getByRole("button", { name: /Courses/i });
      expect(button).toBeInTheDocument();
    });
  });
});
