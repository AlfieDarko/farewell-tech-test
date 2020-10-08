import React, { useState } from "react"
import fetchQuotes from "../../fetchQuotes"
import QuoteCard from "../QuoteCard"
import Button from "../Button"
import { MOTION } from "../../constants"
import * as Styled from "./styled"

const QuotesGrid = () => {
  const [cardProps, setCardProps] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const isLoadedWithCardProps = !isLoading && cardProps
  const { CONTAINER, ITEM } = MOTION

  const onClickHandler = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await fetchQuotes()
      setCardProps(result.data)
      setIsLoading(false)
    }
    fetchData()
  }

  const renderCards = () => {
    if (isLoadedWithCardProps) {
      return cardProps.map((props) => (
        <div data-testid="quote-card-wrapper" key={props.character}>
          <QuoteCard {...props} variants={ITEM} />
        </div>
      ))
    }
  }

  return (
    <>
      <Button
        isLoading={isLoading}
        onClick={onClickHandler}
        data-testid={"load-quotes-btn"}
      >
        Load quotes
      </Button>
      <Styled.GridContainer
        variants={CONTAINER}
        initial="hidden"
        animate={isLoadedWithCardProps ? "show" : "hidden"}
        data-testid="quotes-grid"
      >
        {renderCards()}
      </Styled.GridContainer>
    </>
  )
}

export default QuotesGrid
