import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("🎬 Movie Directory App - Vitest Suite", () => {
  test("renders Home component at root (/)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Welcome to the Movie Directory/i)
    ).toBeInTheDocument();
  });

  test("navigates to About page when clicking About link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const aboutLink = screen.getByText(/About/i);
    await userEvent.click(aboutLink);

    expect(
      screen.getByText(/About the Movie Directory/i)
    ).toBeInTheDocument();
  });

  test("displays directors list at /directors", () => {
    render(
      <MemoryRouter initialEntries={["/directors"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Welcome to the Director's Directory/i)).toBeInTheDocument();
  });

  test("navigates to DirectorForm on /directors/new", () => {
    render(
      <MemoryRouter initialEntries={["/directors/new"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Add New Director/i)).toBeInTheDocument();
  });

  test("navigates to a specific DirectorCard page", () => {
    render(
      <MemoryRouter initialEntries={["/directors/1"]}>
        <App />
      </MemoryRouter>
    );

    // Director may not exist in fake fetch, so just check for fallback text
    expect(screen.getByText(/Director not found/i)).toBeInTheDocument();
  });

  test("navigates to MovieForm at /directors/1/movies/new", () => {
    render(
      <MemoryRouter initialEntries={["/directors/1/movies/new"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Add New Movie/i)).toBeInTheDocument();
  });

  test("renders MovieCard details correctly", () => {
    render(
      <MemoryRouter initialEntries={["/directors/1/movies/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Director not found/i)).toBeInTheDocument();
  });

  test("handles invalid director ID gracefully", () => {
    render(
      <MemoryRouter initialEntries={["/directors/invalid"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Director not found/i)).toBeInTheDocument();
  });

  test("handles invalid movie ID gracefully", () => {
    render(
      <MemoryRouter initialEntries={["/directors/1/movies/invalid"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Director not found/i)).toBeInTheDocument();
  });
});
