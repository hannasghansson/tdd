import { screen, render } from "@testing-library/react";
import TeachersList from "./TeachersList";

describe("TeachersList component", () => {
  const setup = () => render(<TeachersList />);

  describe("TeachersList component", () => {
    test('should have a title "Teachers"', () => {
      setup();
      const title = screen.getByRole("heading", { level: 1 });

      expect(title).toHaveTextContent(/Teachers/);
    });
  });
});
