import { CONTENT_WIDTH, SPACING } from "../constants"
import styled from "styled-components"

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.XS};

  @media only screen and (min-width: 636px) {
    margin: 0 auto;
    padding: ${SPACING.M};
  }
`
