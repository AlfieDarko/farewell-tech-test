import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Header from "./index"

describe("Button Component", () => {
  it("Should find Button Component by its data attribute", () => {
    render(<Header dataTestId={"header"} />)
    expect(screen.getByTestId("header")).toBeInTheDocument()
  })

  it("Should match the snapshot", () => {
    const { asFragment } = render(
      <Header data-testid={"header"}>"Hello"</Header>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
