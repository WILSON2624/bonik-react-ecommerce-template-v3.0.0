import { ReactElement } from "react";

export interface GridProps {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  item?: boolean;
  spacing?: number;
  className?: string;
  container?: boolean;
  containerHeight?: string;
  vertical_spacing?: number;
  horizontal_spacing?: number;
  children: ReactElement<GridProps>[] | any;
  [key: string]: unknown;
}
