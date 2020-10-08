import styled from "styled-components"
import { motion } from "framer-motion"
import { COLOR, BORDER, FONT, SPACING } from "../../constants"

export const Button = styled(motion.button)`
  padding: ${SPACING.XS} ${SPACING.M};
  cursor: pointer;
  outline: 0;
  border: 0;
  background-color: ${COLOR.ACCENT.PRIMARY};
  border-radius: ${BORDER.RADIUS.S};
  color: ${COLOR.BLACK};
  font-family: ${FONT.FAMILY.BODY};
  font-size: ${FONT.SIZE.M};
  text-decoration: none;
  min-width: 8em;
  max-height: 2em;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: 1px dashed ${COLOR.ACCENT.SECONDARY};
  }

  &:active {
    outline: 1px dashed ${COLOR.ACCENT.PRIMARY};
  }

  &:disabled {
    pointer-events: none;
    user-select: none;
  }
`

export const HomerSpinner = styled(motion.img)`
  height: 4em;
  position: relative;
  top: -${SPACING.M};
`
