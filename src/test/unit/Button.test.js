import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

test("renders the Button component", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
