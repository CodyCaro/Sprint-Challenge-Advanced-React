import React from "react";
import ReactDOM from "react-dom";
import PlayerCard from "./PlayerCard";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Player Card is rendering", () => {
  rtl.render(<PlayerCard />);
});

it("Player Card has a name", () => {
  const wrapper = rtl.render(<PlayerCard />);
  // the querying functionality is accessed through the wrapper:
  expect(wrapper.queryByTestId("name")).toBeInTheDocument();
});

it("Player Card has a search amount", () => {
  const wrapper = rtl.render(<PlayerCard />);
  // the querying functionality is accessed through the wrapper:
  expect(wrapper.queryByTestId("search-amount")).toBeInTheDocument();
});

it("Player Card has a country", () => {
  const wrapper = rtl.render(<PlayerCard />);
  // the querying functionality is accessed through the wrapper:
  expect(wrapper.queryByTestId("country")).toBeInTheDocument();
});
