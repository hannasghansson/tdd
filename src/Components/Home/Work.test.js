import { screen, render } from "@testing-library/react";
import Work from "./Work";

describe("work component", () => {
  const setup = () => render(<Work />);

  describe("work component", () => {
    test('should have a title "How it works"', () => {
      setup();
      const title = screen.getByRole("heading", { level: 2 });

      expect(title).toHaveTextContent(/How it works/);
    });
  });
});
