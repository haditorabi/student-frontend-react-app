import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

jest.mock("./components/Students/Students", () => () => (
  <div data-testid="students" />
));

describe("<App/>", () => {
  it("Should render the parent div of the App component", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("parent-div")).toBeTruthy();
  });

  it("Should render the Students component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("students")).toBeInTheDocument();
  });
});
