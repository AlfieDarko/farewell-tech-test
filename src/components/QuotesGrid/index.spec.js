import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import QuotesGrid from "./index"
import { testData } from "./testData"

describe("QuotesGrid Component", () => {
  it("Should find QuotesCard by its data attribute", () => {
    render(<QuotesGrid />)
    expect(screen.getByTestId("quotes-grid")).toBeInTheDocument()
  })

  it("Should find its button", () => {
    render(<QuotesGrid />)
    expect(screen.getByTestId("load-quotes-btn")).toHaveTextContent(
      "Load quotes"
    )
  })

  it("should find no cards before the button is loaded ", () => {
    render(<QuotesGrid />)

    expect(screen.getByTestId("quotes-grid")).toBeEmptyDOMElement()
    expect(screen.queryByTestId("quote-card-wrapper")).toBeNull()
  })

  it.skip("should find cards after the load quotes button has been fired ", async () => {
    render(<QuotesGrid />)

    expect(screen.getByTestId("load-quotes-btn")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button"))

    await waitFor(() => {
      screen.queryAllByTestId("quote-card-wrapper")
      console.log(screen.queryAllByTestId("quote-card-wrapper"))
    })

    expect(screen.getByTestId("quote-card-wrapper")).toBeInTheDocument()
  })
})
