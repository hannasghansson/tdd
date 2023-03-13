import { render, screen } from "@testing-library/react";

import TeacherForm from "./TeacherForm";

describe("Teacher From Component", () => {
  const setup = () => render(<TeacherForm />);
  test("Has first name input", () => {
    setup();
    const firstName = screen.getByLabelText("First name");
    expect(firstName).toBeInTheDocument();
  });

  test("has Last name input", () => {
    setup();
    const lastName = screen.getByLabelText("Last name");
    expect(lastName).toBeInTheDocument();
  });
  test("has email input", () => {
    setup();
    const email = screen.getByLabelText("Email");
    expect(email).toBeInTheDocument();
  });
  test("has phone input", () => {
    setup();
    const phone = screen.getByLabelText("Phone");
    expect(phone).toBeInTheDocument();
  });

  test("Have register button", () => {
    render(<TeacherForm />);
    const submit = screen.getByRole("button", {
      name: /Add new teacher/i,
    });
    expect(submit).toBeInTheDocument();
  });
});
