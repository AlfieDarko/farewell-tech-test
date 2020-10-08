import styled from "styled-components"
import { motion } from "framer-motion"
import { BORDER, FONT, COLOR, SPACING } from "../../constants"

export const CardWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid lightgrey;
  border-radius: ${BORDER.RADIUS.S};
  box-shadow: ${BORDER.SHADOW.M};
  width: 100%;

  @media only screen and (min-width: 668px) {
    display: flex;
    flex-direction: ${({ isLeft }) => (isLeft ? "row-reverse" : "row")};
    align-self: center;
  }
`

export const CardImage = styled.img`
  height: 200px;
  align-self: center;
  padding: ${SPACING.M} ${SPACING.M};
  @media only screen and (min-width: 668px) {
    align-self: inherit;
  }
`

export const CardText = styled.p`
  align-self: center;
  padding: ${SPACING.S};
  font-size: ${FONT.SIZE.M};
  color: ${COLOR.BLACK};
  text-align: center;
  @media only screen and (min-width: 644px) {
    align-self: inherit;
    text-align: left;
    padding: ${SPACING.M};
  }
`
