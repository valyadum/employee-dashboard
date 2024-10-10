import * as React from 'react';
const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path fill="" d="m9 13.25-7.5-7.5h15L9 13.25Z" />
  </svg>
);
export default SvgComponent;
