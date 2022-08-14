import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("render main web", () => {
  render(<App />);
  const linkElement = screen.getByText("IMAGE FEEDS");
  expect(linkElement).toBeInTheDocument();
});

test("should get 20 images after hit search", async () => {
  render(<App />);

  const buttonSearch = screen.getByText("Search !");
  fireEvent.click(screen.getByText("Search !"));

  expect(buttonSearch).toBeInTheDocument();
  const images = await screen.findAllByAltText("not found");
  expect(images).toHaveLength(20)
});
