import * as React from "react"
import Svg, {
  Ellipse,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={93}
    height={441}
    fill="none"
    {...props}
  >
    <Ellipse
      cx={35.695}
      cy={30.482}
      fill="url(#a)"
      rx={35.695}
      ry={30.482}
      transform="matrix(.99702 .02347 .012 1.00282 10.234 6.545)"
    />
    <Path
      fill="#5C007D"
      d="m46.057 6.127-.413 1.302.09 38.16.418.4 19.032-9.85L46.057 6.128Z"
    />
    <Path
      fill="#BD00FF"
      d="M46.057 6.127 27.07 34.897 46.152 45.99l-.044-18.522-.051-21.34Z"
    />
    <Path
      fill="#5C007D"
      d="m46.16 49.343-.234.258.033 13.594.236.644L65.204 39.5 46.16 49.343Z"
    />
    <Path
      fill="#BD00FF"
      d="m46.195 63.84-.035-14.497-19.082-11.086 19.117 25.582Z"
    />
    <Path
      fill="#8A6697"
      d="m46.152 45.99 19.032-9.85-19.076-8.673.044 18.522Z"
    />
    <Path
      fill="#fff"
      d="M27.07 34.897 46.152 45.99l-.044-18.522-19.038 7.43Z"
    />
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="M5.85 51H5L0 458h93L90.5 51h-1.35C85.212 66.976 68.06 79 47.5 79S9.788 66.976 5.85 51Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={35.695}
        x2={35.695}
        y1={0}
        y2={60.964}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FFB153" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={46.5}
        x2={46.5}
        y1={53}
        y2={458}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FF9B3F" />
        <Stop offset={1} stopColor="#FF7A00" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
