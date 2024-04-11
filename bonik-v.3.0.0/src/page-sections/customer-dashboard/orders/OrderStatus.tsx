"use client";

import { Fragment } from "react";
import Box from "@component/Box";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Typography from "@component/Typography";
import useWindowSize from "@hook/useWindowSize";

type Status = "packaging" | "shipping" | "delivering" | "complete";

export default function OrderStatus() {
  const width = useWindowSize();
  const orderStatus: Status = "shipping";
  const stepIconList = ["package-box", "truck-1", "delivery"];
  const orderStatusList = ["packaging", "shipping", "delivering", "complete"];

  const breakpoint = 350;
  const statusIndex = orderStatusList.indexOf(orderStatus);

  return (
    <Card p="2rem 1.5rem" mb="30px" borderRadius={8}>
      <FlexBox
        my="2rem"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={width < breakpoint ? "column" : "row"}>
        {stepIconList.map((item, ind) => (
          <Fragment key={item}>
            <Box position="relative">
              <Avatar
                size={64}
                bg={ind <= statusIndex ? "primary.main" : "gray.300"}
                color={ind <= statusIndex ? "gray.white" : "primary.main"}>
                <Icon size="32px" defaultcolor="currentColor">
                  {item}
                </Icon>
              </Avatar>

              {ind < statusIndex && (
                <Box position="absolute" right="0" top="0">
                  <Avatar size={22} bg="gray.200" color="success.main">
                    <Icon size="12px" defaultcolor="currentColor">
                      done
                    </Icon>
                  </Avatar>
                </Box>
              )}
            </Box>

            {ind < stepIconList.length - 1 && (
              <Box
                height={width < breakpoint ? 50 : 4}
                minWidth={width < breakpoint ? 4 : 50}
                flex={width < breakpoint ? "unset" : "1 1 0"}
                bg={ind < statusIndex ? "primary.main" : "gray.300"}
              />
            )}
          </Fragment>
        ))}
      </FlexBox>

      <FlexBox justifyContent={width < breakpoint ? "center" : "flex-end"}>
        <Typography
          p="0.5rem 1rem"
          bg="primary.light"
          textAlign="center"
          borderRadius="300px"
          color="primary.main">
          Estimated Delivery Date <b>4th October</b>
        </Typography>
      </FlexBox>
    </Card>
  );
}
