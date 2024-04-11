"use client";

import { Fragment, ReactNode, useState, useEffect, cloneElement, ReactElement } from "react";
import { createPortal } from "react-dom";
import { StyledSidenav } from "./styles";

// ==============================================================
export interface SidenavProps {
  open?: boolean;
  width?: number;
  scroll?: boolean;
  children: ReactNode;
  handle: ReactElement;
  position?: "left" | "right";
  toggleSidenav?: () => void;
}
// ==============================================================

export default function Sidenav({
  handle,
  children,
  open = false,
  width = 280,
  scroll = false,
  position = "right",
  toggleSidenav
}: SidenavProps) {
  const [sidenavOpen, setSidenavOpen] = useState(open);

  const handleModalContentClick = (e: any) => {
    e.stopPropagation();
  };

  const handleToggleSidenav = () => setSidenavOpen(!sidenavOpen);

  useEffect(() => setSidenavOpen(open), [open]);

  if (globalThis.document && sidenavOpen) {
    let sidenav = document.querySelector("#sidenav-root");

    if (!sidenav) {
      sidenav = document.createElement("div");
      sidenav.setAttribute("id", "sidenav-root");
      document.body.appendChild(sidenav);
    }

    return (
      <Fragment>
        {createPortal(
          <StyledSidenav
            width={width}
            scroll={scroll}
            open={sidenavOpen}
            position={position}
            onClick={toggleSidenav || handleToggleSidenav}>
            <div className="sidenav-content" onClick={handleModalContentClick}>
              {children}
            </div>
          </StyledSidenav>,
          sidenav
        )}

        {handle &&
          cloneElement(handle, {
            className: handle.props?.className + " cursor-pointer",
            onClick: toggleSidenav || handleToggleSidenav
          })}
      </Fragment>
    );
  } else
    return (
      handle &&
      cloneElement(handle, {
        className: handle.props?.className + " cursor-pointer",
        onClick: toggleSidenav || handleToggleSidenav
      })
    );
}
