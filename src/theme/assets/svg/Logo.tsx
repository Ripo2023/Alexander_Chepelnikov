import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={167}
    height={65}
    fill="none"
    {...props}
  >
    <Path
      fill="#2A2A2B"
      d="M.245 44.996c0-3.654.816-6.917 2.448-9.79 1.667-2.91 3.92-5.162 6.757-6.758C12.324 26.816 15.534 26 19.081 26c4.15 0 7.787 1.064 10.909 3.192 3.121 2.129 5.303 5.073 6.545 8.834h-8.567c-.852-1.774-2.058-3.105-3.619-3.991-1.525-.887-3.299-1.33-5.32-1.33-2.165 0-4.098.514-5.8 1.543-1.668.993-2.98 2.412-3.938 4.256-.923 1.845-1.384 4.009-1.384 6.492 0 2.448.461 4.612 1.384 6.492.957 1.844 2.27 3.281 3.937 4.31 1.703.993 3.636 1.49 5.8 1.49 2.022 0 3.796-.444 5.321-1.33 1.561-.923 2.767-2.27 3.619-4.044h8.567c-1.242 3.795-3.424 6.757-6.545 8.886-3.087 2.093-6.723 3.14-10.909 3.14-3.547 0-6.757-.8-9.63-2.395-2.839-1.632-5.091-3.885-6.758-6.758C1.06 51.914.245 48.65.245 44.997ZM53.992 64.099c-2.838 0-5.392-.621-7.663-1.863-2.27-1.277-4.061-3.068-5.374-5.374-1.277-2.306-1.915-4.966-1.915-7.982 0-3.015.656-5.675 1.968-7.981 1.348-2.306 3.175-4.08 5.481-5.321 2.306-1.277 4.878-1.916 7.716-1.916 2.837 0 5.41.639 7.715 1.916 2.306 1.241 4.115 3.015 5.428 5.32 1.348 2.307 2.022 4.967 2.022 7.982 0 3.016-.692 5.676-2.076 7.982a14.139 14.139 0 0 1-5.533 5.374c-2.306 1.242-4.896 1.863-7.77 1.863Zm0-6.492c1.348 0 2.607-.32 3.778-.958 1.206-.674 2.164-1.667 2.873-2.98.71-1.312 1.064-2.908 1.064-4.788 0-2.803-.745-4.95-2.235-6.439-1.454-1.525-3.245-2.288-5.374-2.288-2.128 0-3.92.763-5.374 2.288-1.419 1.49-2.128 3.636-2.128 6.438 0 2.803.691 4.967 2.075 6.492 1.419 1.49 3.192 2.235 5.32 2.235ZM85.69 40.26h-5.162v23.36h-7.556V40.26H69.62v-6.119h3.352v-1.49c0-3.618 1.029-6.279 3.086-7.981 2.057-1.703 5.161-2.501 9.312-2.395v6.279c-1.81-.035-3.069.266-3.778.905-.71.638-1.064 1.791-1.064 3.458v1.224h5.161v6.12ZM104.032 40.26h-5.161v23.36h-7.556V40.26h-3.352v-6.119h3.352v-1.49c0-3.618 1.029-6.279 3.086-7.981 2.058-1.703 5.162-2.501 9.312-2.395v6.279c-1.809-.035-3.069.266-3.778.905-.71.638-1.064 1.791-1.064 3.458v1.224h5.161v6.12ZM134.268 48.242c0 1.064-.071 2.022-.213 2.873h-21.55c.177 2.129.922 3.796 2.235 5.002 1.312 1.206 2.926 1.81 4.842 1.81 2.767 0 4.736-1.19 5.906-3.566h8.035c-.851 2.838-2.483 5.18-4.895 7.024-2.413 1.81-5.375 2.714-8.887 2.714-2.838 0-5.392-.621-7.662-1.863-2.235-1.277-3.991-3.068-5.268-5.374-1.241-2.306-1.862-4.966-1.862-7.982 0-3.05.621-5.729 1.862-8.034 1.242-2.306 2.98-4.08 5.215-5.321 2.235-1.242 4.807-1.863 7.715-1.863 2.803 0 5.304.603 7.503 1.81a12.486 12.486 0 0 1 5.162 5.16c1.241 2.2 1.862 4.736 1.862 7.61Zm-7.716-2.128c-.035-1.916-.727-3.441-2.075-4.577-1.348-1.17-2.997-1.756-4.948-1.756-1.845 0-3.406.568-4.683 1.703-1.242 1.1-2.004 2.643-2.288 4.63h13.994ZM166.444 48.242c0 1.064-.071 2.022-.213 2.873h-21.55c.177 2.129.922 3.796 2.234 5.002 1.313 1.206 2.927 1.81 4.843 1.81 2.767 0 4.735-1.19 5.906-3.566h8.035c-.852 2.838-2.483 5.18-4.896 7.024-2.412 1.81-5.374 2.714-8.886 2.714-2.838 0-5.392-.621-7.662-1.863-2.235-1.277-3.991-3.068-5.268-5.374-1.242-2.306-1.862-4.966-1.862-7.982 0-3.05.62-5.729 1.862-8.034 1.242-2.306 2.98-4.08 5.215-5.321 2.235-1.242 4.806-1.863 7.715-1.863 2.803 0 5.304.603 7.503 1.81a12.478 12.478 0 0 1 5.161 5.16c1.242 2.2 1.863 4.736 1.863 7.61Zm-7.716-2.128c-.035-1.916-.727-3.441-2.075-4.577-1.348-1.17-2.998-1.756-4.949-1.756-1.844 0-3.405.568-4.682 1.703-1.242 1.1-2.004 2.643-2.288 4.63h13.994Z"
    />
    <Path
      fill="#FF5712"
      fillRule="evenodd"
      d="M124.003 0c-1.233 0-2.232 1-2.232 2.232v17.86c0 1.232.999 2.232 2.232 2.232h40.184c1.233 0 2.232-1 2.232-2.233V2.232A2.232 2.232 0 0 0 164.187 0h-40.184Zm7.474 8.744.359-2.053h-2.511l-.358 2.053h-1.023l-.305 1.785h1.023l-.672 4.098c-.071.768.087 1.376.473 1.823.387.448.969.677 1.747.687.479.01.929-.053 1.351-.19l.183-1.863a5.96 5.96 0 0 1-.656.039c-.275-.01-.448-.082-.519-.214-.066-.132-.081-.328-.046-.588l.641-3.792h1.32l.313-1.785h-1.32Zm7.796.404c-.539-.361-1.177-.547-1.915-.557-1.19-.02-2.187.371-2.991 1.175-.799.804-1.261 1.882-1.389 3.235-.071.779.021 1.486.275 2.122.26.635.656 1.131 1.19 1.487.535.352 1.168.532 1.9.542 1.175.02 2.162-.358 2.961-1.137.799-.778 1.269-1.8 1.412-3.067l.015-.168c.071-.783-.021-1.495-.275-2.136-.249-.641-.643-1.14-1.183-1.496Zm-3.807 4.303.023-.45c.081-.85.269-1.47.564-1.861.301-.397.682-.588 1.145-.573.351.01.615.153.794.428.183.27.269.633.259 1.09l-.031.695c-.157 1.633-.73 2.434-1.716 2.404-.763-.02-1.109-.598-1.038-1.732ZM149 16.771c.799-.27 1.407-.649 1.824-1.137l.717-4.57h-4.418l-.32 1.838h1.808l-.343 1.732c-.468.31-1.013.46-1.633.45-1.028-.015-1.58-.635-1.656-1.861-.041-.51.01-1.221.153-2.137.168-1.073.48-1.897.938-2.472.458-.58 1.038-.857 1.74-.832.473.015.837.16 1.091.435.259.275.407.71.443 1.305l2.502.008c-.076-1.221-.447-2.155-1.114-2.8-.666-.647-1.62-.98-2.861-1-1.419-.026-2.62.465-3.602 1.472-.976 1.007-1.582 2.373-1.816 4.098l-.061.458c-.127 1.027-.053 1.95.222 2.77.274.818.732 1.457 1.373 1.915.641.457 1.427.691 2.358.702.971.015 1.857-.11 2.655-.374Zm10.002-7.623c-.539-.361-1.178-.547-1.915-.557-1.191-.02-2.188.371-2.992 1.175-.798.804-1.261 1.882-1.388 3.235-.072.779.02 1.486.274 2.122.26.635.657 1.131 1.191 1.487.534.352 1.167.532 1.9.542 1.175.02 2.162-.358 2.96-1.137.799-.778 1.269-1.8 1.412-3.067l.015-.168c.071-.783-.02-1.495-.275-2.136-.249-.641-.643-1.14-1.182-1.496Zm-3.808 4.303.023-.45c.081-.85.27-1.47.565-1.861.3-.397.681-.588 1.144-.573.351.01.616.153.794.428.183.27.269.633.259 1.09l-.03.695c-.158 1.633-.73 2.434-1.717 2.404-.763-.02-1.109-.598-1.038-1.732Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
