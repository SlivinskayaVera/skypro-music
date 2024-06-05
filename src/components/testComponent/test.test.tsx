import { fireEvent, render, screen } from "@testing-library/react";
import { PostPage } from "./TestComponent";
import "@testing-library/jest-dom";

describe("testing Post page", () => {
  // проверка есть ли на странице какой-то текст
//   test("has title Posts", () => {
//     const { queryByText } = render(<PostPage />);
//     expect(queryByText("posts")).toBeTruthy();
//   });

  // проверка ввода в input определенного значения
  test("check input value", () => {
    const { getByLabelText } = render(<PostPage />);
    const input = getByLabelText("name");

    fireEvent.change(input, { target: { value: "Test" } });
    expect(screen.getByDisplayValue("Test")).toBeInTheDocument();
  });

  test("test button", () => {
    render(<PostPage />);
    const button = screen.getByRole("button");
    fireEvent.click(button)

    expect(screen.getByDisplayValue("Borya")).toBeInTheDocument()
  });
});

// 29/24
