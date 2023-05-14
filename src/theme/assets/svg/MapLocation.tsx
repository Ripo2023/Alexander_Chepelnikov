import * as React from 'react';
import Svg, { ClipPath, Path, Defs, G } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G
      stroke="#2A2A2B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <Path d="M13 6.5c0 4.5-5 8-5 8s-5-3.5-5-8a5 5 0 1 1 10 0v0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
