import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CourseForm from "./CourseForm";

describe("Course From Component", () => {
  const setup = () => render(<CourseForm />);
  test("Has Title input", () => {
    setup();
    const title = screen.getByLabelText("Title");
    expect(title).toBeInTheDocument();
  });

  test("has a Start Date input", () => {
    setup();
    const startDate = screen.getByLabelText("Course Start Date");
    expect(startDate).toBeInTheDocument();
  });
  test("has a endDate input", () => {
    setup();
    const endDate = screen.getByLabelText("Course End Date");
    expect(endDate).toBeInTheDocument();
  });

  test("should have a register button", () => {
    // Arrange...
    render(<CourseForm />);
    const submit = screen.getByRole("button", {
      name: /Add new course/i,
    });
    expect(submit).toBeInTheDocument();
  });
});
