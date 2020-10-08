import styled from "styled-components"
import { motion } from "framer-motion"
import { SPACING } from "../../constants"
export const GridContainer = styled(motion.main)`
  display: grid;
  grid-row-gap: ${SPACING.S};
  grid-column-gap: ${SPACING.M};
  margin-top: ${SPACING.L};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
