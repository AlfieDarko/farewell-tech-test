import React from "react"
import PropTypes from "prop-types"
import Logo from "../../logo.svg"
import * as Styled from "./styled"

const Header = ({ dataTestId }) => (
  <Styled.Header data-testid={dataTestId}>
    <Styled.HeaderWrapper>
      <Styled.HeaderContent>
        <img src={Logo} alt="Farewill" />
        <p>Simpsons Quotes</p>
      </Styled.HeaderContent>
    </Styled.HeaderWrapper>
  </Styled.Header>
)

Header.propTypes = {
  dataTestId: PropTypes.string.isRequired,
}

export default Header
