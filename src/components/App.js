import React from "react"
import Header from "./Header/index"
import QuotesGrid from "./QuotesGrid"
import * as Styled from "./App.styled"

const App = () => {
  return (
    <>
      <Header dataTestId="header" />
      <Styled.ContentWrapper data-testid="content-wrapper">
        <QuotesGrid />
      </Styled.ContentWrapper>
    </>
  )
}

export default App
