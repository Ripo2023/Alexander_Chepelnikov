import * as React from 'react';
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#B7B7B7"
      fillRule="evenodd"
      d="M16 0a2.667 2.667 0 0 0-2.667 2.667v10.666H2.667a2.667 2.667 0 1 0 0 5.334h10.666v10.666a2.667 2.667 0 1 0 5.334 0V18.667h10.666a2.667 2.667 0 1 0 0-5.334H18.667V2.667A2.667 2.667 0 0 0 16 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
