import * as React from "react"
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={108}
    height={436}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="m10.416 435.996.017-389.382-8.083 2.874-1.463 386.47 9.53.038Z"
    />
    <Path
      fill="url(#b)"
      d="M99.891 32.978c-.275 17.947-17.735 32.622-39 32.776-21.256.153-38.27-14.274-37.993-32.22C23.17 15.586 40.631.91 61.89.756 83.152.602 100.167 15.03 99.891 32.978Z"
    />
    <Path
      fill="#fff"
      d="M76.147 25.371c-.43-4.35-4.86-5.777-10.474-6.152l.092-6.04-4.355.032-.09 5.88c-1.145.009-2.315.036-3.478.064l.092-5.919-4.353.032-.094 6.037c-.943.023-1.87.045-2.772.052v-.019l-6.007.042-.059 3.926s3.217-.075 3.163-.025c1.763-.012 2.324.848 2.48 1.593l-.105 6.88c.122 0 .28.002.46.022l-.46.004-.15 9.639c-.084.469-.421 1.218-1.654 1.229.055.041-3.166.022-3.166.022l-.932 4.397 5.667-.041c1.055-.007 2.092 0 3.111-.001l-.092 6.108 4.35-.032.093-6.043c1.194.012 2.35.012 3.479.003l-.095 6.016 4.356-.033.094-6.097c7.328-.407 12.476-2.001 13.201-7.81.585-4.677-1.987-6.743-6.13-7.555 2.542-1.104 4.15-3.028 3.83-6.21h-.002Zm-6.294 13.105c-.067 4.564-9.318 4.112-12.27 4.136l.125-8.093c2.953-.02 12.219-.804 12.145 3.957Zm-1.85-11.404c-.065 4.153-7.78 3.725-10.238 3.742l.113-7.34c2.459-.017 10.19-.733 10.125 3.598Z"
    />
    <Path
      fill="url(#c)"
      fillRule="evenodd"
      d="M19.417 46H15v390h93V46h-3.662c-4.637 11.052-15.172 20.334-29.36 24.3-23.61 6.598-48.399-4.024-55.365-23.727a32.301 32.301 0 0 1-.196-.573Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={9.702}
        x2={1.629}
        y1={239.849}
        y2={239.818}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FFC700" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={61.395}
        x2={61.395}
        y1={0.755}
        y2={65.755}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF5F86" />
        <Stop offset={1} stopColor="#FFB153" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={61.5}
        x2={61.5}
        y1={46}
        y2={436}
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
