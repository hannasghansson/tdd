import { render, screen } from "@testing-library/react";
import AddTeacher from "./AddTeacher";

describe("Add Teacher Page", () => {
  const setup = () => render(<AddTeacher />);

  describe("Add Teacher Page", () => {
    test('has a title text saying "Add New Teacher"', () => {
      setup();
      const titleText = screen.getByRole("heading", {
        name: "Add New Teacher",
      });

      expect(titleText).toBeInTheDocument();
    });
  });
});
