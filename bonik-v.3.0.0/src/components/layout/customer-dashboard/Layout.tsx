import { PropsWithChildren } from "react";

import Grid from "@component/grid/Grid";
import DashboardNavigation from "../DashboardNavigation";
// STYLED COMPONENT
import { StyledGrid } from "../styles";

export default function CustomerDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Grid container spacing={6}>
      <StyledGrid item lg={3} xs={12}>
        <DashboardNavigation />
      </StyledGrid>

      <Grid item lg={9} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}
