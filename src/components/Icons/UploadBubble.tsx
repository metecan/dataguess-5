import { SVGProps } from 'react';
const SvgUploadBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <circle cx={20} cy={20} r={20} fill="#ECECEC" />
    <g clipPath="url(#a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M19.5 12c-2.649 0-4.76 2.38-4.473 5a1.01 1.01 0 0 1-.758 1.09A3.002 3.002 0 0 0 15 24h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-2-9.584 6.5 6.5 0 0 1 12.586-2.204A6.002 6.002 0 0 1 24 26a1 1 0 0 1 0-2 4 4 0 0 0 .655-7.947 1.01 1.01 0 0 1-.81-.732A4.502 4.502 0 0 0 19.5 12Zm1.5 8.416 1.293 1.292a1 1 0 0 0 1.414-1.416l-2.824-2.819a1.25 1.25 0 0 0-1.766 0l-2.824 2.82a1 1 0 0 0 1.414 1.415L19 20.416V29a1 1 0 0 0 2 0v-8.584Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M8 8h24v24H8z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUploadBubble;
