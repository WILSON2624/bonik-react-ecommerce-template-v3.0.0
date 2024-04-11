"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
// STYLED COMPONENTS
import { StyledGrid } from "../styles";
import { DashboardNavigationWrapper, StyledDashboardNav } from "../styles";

const linkList = [
  { href: "/vendor/dashboard", title: "Dashboard", iconName: "board" },
  { href: "/vendor/products", title: "Products", iconName: "box", count: 300 },
  { href: "/vendor/products/create", title: "Add New Product", iconName: "upload" },
  { href: "/vendor/orders", title: "Orders", iconName: "shopping-cart", count: 40 },
  { href: "/vendor/account-settings", title: "Account Settings", iconName: "gear-2" }
];

export default function VendorDashboardLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Grid container spacing={6}>
      <StyledGrid item lg={3} xs={12}>
        <DashboardNavigationWrapper px="0px" py="1.5rem" color="gray.900" borderRadius={8}>
          {linkList.map((item) => (
            <StyledDashboardNav
              px="1.5rem"
              mb="1.25rem"
              href={item.href}
              key={item.title}
              isCurrentPath={pathname.includes(item.href)}>
              <FlexBox alignItems="center">
                <div className="dashboard-nav-icon-holder">
                  <Icon variant="small" defaultcolor="currentColor" mr="10px">
                    {item.iconName}
                  </Icon>
                </div>

                <span>{item.title}</span>
              </FlexBox>

              <span>{item.count}</span>
            </StyledDashboardNav>
          ))}
        </DashboardNavigationWrapper>
      </StyledGrid>

      <Grid item lg={9} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}
