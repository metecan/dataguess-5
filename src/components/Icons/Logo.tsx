import { SVGProps } from 'react';
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" {...props}>
    <circle cx={5} cy={5} r={5} fill="#C5F145" />
    <circle cx={20} cy={5} r={5} fill="#63F032" />
    <circle cx={20} cy={20} r={5} fill="#FF3D00" />
    <circle cx={5} cy={20} r={5} fill="#01FCED" />
  </svg>
);
export default SvgLogo;
