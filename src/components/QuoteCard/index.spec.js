import React from "react"
import { render, screen } from "@testing-library/react"
import QuotesCard from "./index"
import "@testing-library/jest-dom/extend-expect"

describe("QuotesCard Component", () => {
  const props = {
    quote: "Hi, Super Nintendo Chalmers!",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection: "Left",
  }

  it("Should find QuotesCard by its data attribute", () => {
    render(<QuotesCard {...props} />)
    expect(screen.getByTestId("quotes-card-Ralph")).toBeInTheDocument()
  })

  it("Should find the correct elements", () => {
    render(<QuotesCard {...props} />)
    expect(screen.getByTestId("quotes-card-text-Ralph")).toHaveTextContent(
      "Hi, Super Nintendo Chalmers!"
    )
    expect(screen.getByTestId("quotes-card-image-Ralph")).toBeInTheDocument()
  })

  it("Should match the snapshot", () => {
    const { asFragment } = render(<QuotesCard {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
