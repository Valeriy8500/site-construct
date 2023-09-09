import { SVGProps } from "react";

export const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <line x1="3" y1="12" x2="21" y2="12"></line> <polyline points="8 8 12 4 16 8"></polyline>{" "}
      <polyline points="16 16 12 20 8 16"></polyline>
    </g>
  </svg>
);
