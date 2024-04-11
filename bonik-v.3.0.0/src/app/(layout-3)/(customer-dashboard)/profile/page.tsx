import { Fragment } from "react";
import { format } from "date-fns";
// API FUNCTIONS
import api from "@utils/__api__/users";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import Typography, { H3, H5, Small } from "@component/Typography";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
// PAGE SECTION COMPONENTS
import { EditProfileButton } from "@sections/customer-dashboard/profile";

export default async function Profile() {
  const user = await api.getUser();

  const infoList = [
    { title: "16", subtitle: "All Orders" },
    { title: "02", subtitle: "Awaiting Payments" },
    { title: "00", subtitle: "Awaiting Shipment" },
    { title: "01", subtitle: "Awaiting Delivery" }
  ];

  return (
    <Fragment>
      <DashboardPageHeader
        title="My Profile"
        iconName="user_filled"
        button={<EditProfileButton />}
      />

      <Box mb="30px">
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FlexBox as={Card} p="14px 32px" height="100%" borderRadius={8} alignItems="center">
              <Avatar src={user.avatar} size={64} />

              <Box ml="12px" flex="1 1 0">
                <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center">
                  <div>
                    <H5 my="0px">{`${user.name.firstName} ${user.name.lastName}`}</H5>

                    <FlexBox alignItems="center">
                      <Typography fontSize="14px" color="text.hint">
                        Balance:
                      </Typography>

                      <Typography ml="4px" fontSize="14px" color="primary.main">
                        $500
                      </Typography>
                    </FlexBox>
                  </div>

                  <Typography ontSize="14px" color="text.hint" letterSpacing="0.2em">
                    SILVER USER
                  </Typography>
                </FlexBox>
              </Box>
            </FlexBox>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              {infoList.map((item) => (
                <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
                  <FlexBox
                    as={Card}
                    height="100%"
                    p="1rem 1.25rem"
                    borderRadius={8}
                    alignItems="center"
                    flexDirection="column"
                    justifyContent="center">
                    <H3 color="primary.main" my="0px" fontWeight="600">
                      {item.title}
                    </H3>

                    <Small color="text.muted" textAlign="center">
                      {item.subtitle}
                    </Small>
                  </FlexBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <TableRow p="0.75rem 1.5rem">
        <FlexBox flexDirection="column" p="0.5rem">
          <Small color="text.muted" mb="4px">
            First Name
          </Small>

          <span>{user.name.firstName}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p="0.5rem">
          <Small color="text.muted" mb="4px">
            Last Name
          </Small>

          <span>{user.name.lastName}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p="0.5rem">
          <Small color="text.muted" mb="4px">
            Email
          </Small>

          <span>{user.email}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p="0.5rem">
          <Small color="text.muted" mb="4px" textAlign="left">
            Phone
          </Small>

          <span>{user.phone}</span>
        </FlexBox>

        <FlexBox flexDirection="column" p="0.5rem">
          <Small color="text.muted" mb="4px">
            Birth date
          </Small>

          <span className="pre">{format(new Date(user.dateOfBirth), "dd MMM, yyyy")}</span>
        </FlexBox>
      </TableRow>
    </Fragment>
  );
}
