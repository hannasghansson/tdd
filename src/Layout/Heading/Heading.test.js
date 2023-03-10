import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Heading from "./Heading";

describe("Header Component", () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    );
  describe("Heading layout", () => {
    test("Have Heading white text Lorem", () => {
      setup();
      const title = screen.getByRole("heading", { level: 2 });
      expect(title).toBeInTheDocument();
    });
  });
});
