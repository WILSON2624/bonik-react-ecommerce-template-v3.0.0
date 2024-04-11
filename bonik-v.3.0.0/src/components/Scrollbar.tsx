import { ReactNode } from "react";
import SimpleBar, { Props } from "simplebar-react";
import styled, { CSSProperties } from "styled-components";

import "simplebar-react/dist/simplebar.min.css";

// STYLED COMPONENT
const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&.simplebar-visible:before": { opacity: 1 },
    "&:before": { backgroundColor: theme.colors.gray[400] }
  },
  "& .simplebar-track.simplebar-vertical": { width: 9 },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": { height: 6 },
  "& .simplebar-mask": { zIndex: "inherit" }
}));

// ===========================================
interface ScrollbarProps extends Props {
  sx?: CSSProperties;
  children: ReactNode;
}
// ===========================================

export default function Scrollbar({ children, sx, ...props }: ScrollbarProps) {
  return (
    <StyledScrollBar style={sx} {...props}>
      {children}
    </StyledScrollBar>
  );
}
