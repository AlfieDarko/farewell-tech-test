import styled from "styled-components"
import { COLOR, SPACING, CONTENT_WIDTH } from "../../constants"

export const Header = styled.header`
  background-color: ${COLOR.ACCENT.PRIMARY};
  padding: ${SPACING.XS} ${SPACING.M};
`

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
