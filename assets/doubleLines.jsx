import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={400}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M5 320V0H0v320zm15 98V115h-8v303z" />
  </Svg>
)
export default SvgComponent
