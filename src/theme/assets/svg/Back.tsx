import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#2A2A2B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19.5 7.5 12 15 4.5"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
