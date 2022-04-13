import { render, screen } from "@testing-library/react";
import App from "./App";
import UserEvent from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

test("Rethink your living & renting", () => {
  render(<App />);
  const linkElement = screen.getByText("Rethink your living & renting");
  expect(linkElement).toBeInTheDocument();
});

test("Allow us to tell you a short story...", () => {
  render(<App />);
  const linkElement = screen.getByText("Allow us to tell you a short story...");
  expect(linkElement).toBeInTheDocument();
});

test("Chapter II", () => {
  render(<App />);
  const linkElement = screen.getByText("Chapter II");
  expect(linkElement).toBeInTheDocument();
});

test("Room with one king-size bed", () => {
  render(<App />);
  const linkElement = screen.getByText("Room with one king-size bed");
  expect(linkElement).toBeInTheDocument();
});

test("From one-guest rooms to penthouses with pools and gardens", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "From one-guest rooms to penthouses with pools and gardens"
  );
  expect(linkElement).toBeInTheDocument();
});

test("© 2021 Company Name All rights reserved", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "© 2021 Company Name All rights reserved"
  );
  expect(linkElement).toBeInTheDocument();
});

describe("Testing Form Component", () => {
  test("loading is true when button click", () => {
    render(<App />);

    const btn = screen.getByTestId("SearchId");
    UserEvent.click(btn);
    expect(btn.textContent).toEqual("Searching..");
  });
});

describe("Testing sidebar", () => {
  test("check for sidebar", () => {
    render(<App />);
    const btn1 = screen.getByTestId("hamId");
    UserEvent.click(btn1);
    const btn2 = screen.getByTestId("sidebarLogo");
    expect(btn2.textContent).toEqual("Your Logo");
  });
});

describe("Testing form input tag", () => {
  test("check for form input tag", () => {
    render(<App />);
    const tag = screen.getAllByTestId("formHelperCardId")[0];
    UserEvent.type(tag, "inputtext");
    expect(tag).toHaveDisplayValue("Select your cityinputtext");
  });
});

test("Chapter I", () => {
  render(<App />);
  const linkElement = screen.getByText("Chapter I");
  expect(linkElement).toBeInTheDocument();
});
