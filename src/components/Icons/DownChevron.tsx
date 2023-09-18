import { SVGProps } from 'react';
const SvgDownChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={8} fill="none" {...props}>
    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m1 1 6 6 6-6" />
  </svg>
);
export default SvgDownChevron;
