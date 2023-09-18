import { SVGProps } from 'react';
const SvgLeftChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" {...props}>
    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 13 1 7l6-6" />
  </svg>
);
export default SvgLeftChevron;
