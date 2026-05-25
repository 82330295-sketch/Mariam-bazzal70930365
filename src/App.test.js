import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Community Help Hub title", () => {
  render(<App />);
  const titleElement = screen.getByText(/community help hub/i);
  expect(titleElement).toBeInTheDocument();
});