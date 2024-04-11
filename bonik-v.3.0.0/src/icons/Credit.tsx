import * as React from "react";
import { SVGProps } from "react";

export default function Credit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} fill="none" {...props}>
      <path
        fill="currentColor"
        d="M62 40a2 2 0 0 0-2 2v14H4V32h22a2 2 0 0 0 0-4H4v-8h22a2 2 0 0 0 0-4H4c-2.208 0-4 1.792-4 4v36c0 2.208 1.792 4 4 4h56c2.208 0 4-1.792 4-4V42a2 2 0 0 0-2-2Z"
      />
      <path
        fill="currentColor"
        d="M18 40h-8a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4ZM62.788 10.16l-14-6a2.042 2.042 0 0 0-1.58 0l-14 6A2.005 2.005 0 0 0 32 12v8c0 11.003 4.068 17.435 15.004 23.736a2.007 2.007 0 0 0 1.992 0C59.932 37.452 64 31.02 64 20v-8c0-.8-.476-1.524-1.212-1.84ZM60 20c0 9.235-3.056 14.32-12 19.68C39.056 34.306 36 29.223 36 20v-6.68l12-5.145 12 5.144V20Z"
      />
      <path
        fill="currentColor"
        d="M55.252 16.435a2.013 2.013 0 0 0-2.812.312l-6.288 7.864-2.488-3.72a2.005 2.005 0 0 0-2.772-.556 2.002 2.002 0 0 0-.556 2.772l4 6c.356.532.94.86 1.58.892H46a2 2 0 0 0 1.564-.752l8-10a2.002 2.002 0 0 0-.312-2.812Z"
      />
    </svg>
  );
}
