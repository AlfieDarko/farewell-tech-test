import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button from "./index"

describe("Button Component", () => {
  it("Should find Button Component by its data attribute", () => {
    render(<Button data-testid={"button"}>"Hello"</Button>)
    expect(screen.getByTestId("button")).toBeInTheDocument()
  })

  it("Should find spinner when in loading state ", async () => {
    render(
      <Button data-testid="button" isLoading={true}>
        "Hello"
      </Button>
    )
    expect(screen.getByRole("progressbar"))
  })

  it("Should match the snapshot", () => {
    const { asFragment } = render(
      <Button data-testid={"button"}>"Hello"</Button>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
