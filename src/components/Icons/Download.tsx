import { SVGProps } from 'react';
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#fff"
      d="M8 12 3 7l1.4-1.45L7 8.15V0h2v8.15l2.6-2.6L13 7l-5 5Zm-6 4c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 0 14v-3h2v3h12v-3h2v3c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 14 16H2Z"
    />
  </svg>
);
export default SvgDownload;
