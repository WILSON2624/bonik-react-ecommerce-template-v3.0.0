"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { ColorProps, SpaceProps } from "styled-system";
import StyledNavLink from "./styles";

// ==============================================================
interface NavLinkProps extends SpaceProps, ColorProps {
  as?: string;
  href: string;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}
// ==============================================================

export default function NavLink({
  as,
  href,
  style,
  children,
  className,
  ...props
}: NavLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  let pathname = usePathname();

  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname?.includes(href);
  };

  return (
    <Link href={href}>
      <StyledNavLink
        style={style}
        className={className}
        isCurrentRoute={checkRouteMatch()}
        {...props}>
        {children}
      </StyledNavLink>
    </Link>
  );
}
