"use client";

import styled from "styled-components";

import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import NavLink from "@component/nav-link";
import { getTheme } from "@utils/utils";

export const StyledGrid = styled(Grid)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DashboardNavigationWrapper = styled(Card)`
  @media only screen and (max-width: 768px) {
    height: calc(100vh - 64px);
    box-shadow: none;
    overflow-y: auto;
  }
`;

export const StyledDashboardNav = styled(NavLink).withConfig({
  shouldForwardProp: (prop) => prop !== "isCurrentPath"
})<{ isCurrentPath?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid;
  color: ${({ isCurrentPath }) => (isCurrentPath ? getTheme("colors.primary.main") : "inherit")};
  border-left-color: ${({ isCurrentPath }) =>
    isCurrentPath ? getTheme("colors.primary.main") : "transparent"};

  .dashboard-nav-icon-holder {
    color: ${getTheme("colors.gray.600")};
  }

  &:hover {
    border-left-color: ${getTheme("colors.primary.main")};

    .dashboard-nav-icon-holder {
      color: ${getTheme("colors.primary.main")};
    }
  }
`;
