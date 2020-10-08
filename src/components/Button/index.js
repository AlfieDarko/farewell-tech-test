import React from "react"
import HomerSVG from "./assets/homer-svg.svg"
import * as Styled from "./styled"

const Button = (props) => {
  const { isLoading, children } = props

  return (
    <Styled.Button
      whileTap={{ scale: 0.9 }}
      transition={{ ease: "easeOut" }}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <Styled.HomerSpinner
          role="progressbar"
          aria-valuetext="Loading"
          transition={{ ease: "easeOut", repeat: "Infinity", duration: 2 }}
          src={HomerSVG}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 0.5, 0.8],
          }}
        />
      )}
      {!isLoading && children}
    </Styled.Button>
  )
}

export default Button
