import React from 'react';
import Svg, {

  G,
  Path,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={264}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path fill="#FF7A00" d="M60 94h74v127H60z" />
      <G filter="url(#b)">
        <Ellipse cx={96} cy={76.5} fill="url(#c)" rx={92} ry={76.5} />
      </G>
      <Path fill="url(#d)" d="m40 171 25.98 54.75H14.02L40 171Z" />
      <Path fill="url(#e)" d="m96.5 171 26.414 54.75H70.086L96.5 171Z" />
      <Path fill="url(#f)" d="m70.5 191 26.414 54.75H44.086L70.5 191Z" />
      <Path fill="url(#g)" d="m153 171 25.981 54.75h-51.962L153 171Z" />
      <Path fill="url(#h)" d="m123 191 25.981 54.75H97.019L123 191Z" />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={96}
        x2={96}
        y1={0}
        y2={153}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C4FFBF" />
        <Stop offset={1} stopColor="#14FF00" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={40}
        x2={40}
        y1={171}
        y2={244}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FF003D" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={96.5}
        x2={96.5}
        y1={171}
        y2={244}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FF003D" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={70.5}
        x2={70.5}
        y1={191}
        y2={264}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FF003D" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={153}
        x2={153}
        y1={171}
        y2={244}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FF003D" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={123}
        x2={123}
        y1={191}
        y2={264}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FF003D" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Logo;
