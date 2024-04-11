import { cloneElement, FC, useEffect, useRef, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { variant } from "styled-system";
import systemCss from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import { isValidProp } from "@utils/utils";

// ============================================
interface MenuProps {
  handler: any;
  children: any;
  className?: string;
  style?: CSSProperties;
  direction?: "left" | "right";
}
// ============================================

const StyledMenu = styled.div.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<{ direction: string }>(
  systemCss({
    position: "relative",
    ".menu-item-holder": {
      zIndex: 100,
      minWidth: "200px",
      borderRadius: "6px",
      paddingTop: "0.5rem",
      position: "absolute",
      paddingBottom: "0.5rem",
      top: "calc(100% + 0.5rem)",
      backgroundColor: themeGet("body.paper", "#ffffff"),
      boxShadow: themeGet("shadows.3", "0 6px 12px rgba(0, 0, 0, 0.16)")
    }
  }),
  variant({
    prop: "direction",
    variants: {
      left: { ".menu-item-holder": { left: 0, right: "auto" } },
      right: { ".menu-item-holder": { left: "auto", right: 0 } }
    }
  })
);

export default function Menu({ handler, children, direction = "left", ...props }: MenuProps) {
  const [show, setShow] = useState(false);
  const popoverRef = useRef(show);
  popoverRef.current = show;

  const handleDocumentClick = () => {
    if (popoverRef.current) setShow(false);
  };

  const togglePopover = (e: any) => {
    e.stopPropagation();
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <StyledMenu direction={direction as "left" | "right"} {...props}>
      {cloneElement(handler, { onClick: togglePopover })}
      {show && <div className="menu-item-holder">{children}</div>}
    </StyledMenu>
  );
}
