import { useEffect, useState } from "react";
import { colors } from "@utils/themeColors";
import { colorOptions } from "interfaces";

// ==============================================================
export interface StarProps {
  value?: number;
  outof?: number;
  color?: colorOptions;
  onClick?: () => void;
}
// ==============================================================

export default function Star({ value = 0, outof = 5, color = "secondary", ...props }: StarProps) {
  const [id, setId] = useState<number | null>(null);

  useEffect(() => setId(Math.random()), []);

  return (
    <svg
      width="24"
      height="24"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`url(#star-${id})`}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color ? colors[color].main : "currentColor"}
      className="feather feather-star"
      {...props}>
      <defs>
        <linearGradient id={`star-${id}`}>
          <stop offset={value / outof} stopColor={colors[color].main} />
          <stop offset={value / outof} stopColor={colors.body.paper} stopOpacity="1" />
        </linearGradient>
      </defs>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
