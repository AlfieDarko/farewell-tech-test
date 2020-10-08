import React from "react"
import PropTypes from "prop-types"
import * as Styled from "./styled"

const QuotesCard = ({
  quote,
  character,
  image,
  characterDirection,
  variants,
}) => {
  const firstNameofCharacter = character.split(" ")[0]
  const isLeft = characterDirection === "Left"

  return (
    <Styled.CardWrapper
      isLeft={isLeft}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      tabIndex="0"
      data-testid={`quotes-card-${firstNameofCharacter}`}
    >
      <Styled.CardText data-testid={`quotes-card-text-${firstNameofCharacter}`}>
        {quote}
      </Styled.CardText>
      <Styled.CardImage
        src={image}
        data-testid={`quotes-card-image-${firstNameofCharacter}`}
        alt={`an illustration of The Simpsons character ${character}`}
      />
    </Styled.CardWrapper>
  )
}

QuotesCard.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  characterDirection: PropTypes.string.isRequired,
  variants: PropTypes.object,
}

export default QuotesCard
