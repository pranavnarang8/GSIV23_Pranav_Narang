import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import fetchData from "./List";
import List from "./List";

const server = setupServer(
  rest.get("https://api.themoviedb.org/3/movie/upcoming", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          { id: 1, title: "Movie 1" },
          { id: 2, title: "Movie 2" },
          { id: 3, title: "Movie 3" },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("fetchData function", () => {
  it("loads movies correctly", async () => {
    render(<List />);

    await screen.findByText("Movie 1");
    await screen.findByText("Movie 2");
    await screen.findByText("Movie 3");
  });
});
