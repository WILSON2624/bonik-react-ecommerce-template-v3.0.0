"use client";

import { usePathname, useRouter } from "next/navigation";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";

import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Stepper from "@component/Stepper";

const stepperList = [
  { title: "Cart", disabled: false },
  { title: "Details", disabled: false },
  { title: "Payment", disabled: false },
  { title: "Review", disabled: true }
];

export default function Layout({ children }: PropsWithChildren) {
  const [selectedStep, setSelectedStep] = useState(0);

  const router = useRouter();
  const pathname = usePathname();

  const handleStepChange = (_step: any, ind: number) => {
    switch (ind) {
      case 0:
        router.push("/cart");
        break;
      case 1:
        router.push("/checkout");
        break;
      case 2:
        router.push("/payment");
        break;
      case 3:
        router.push("/orders");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setSelectedStep(1);
        break;
      case "/checkout":
        setSelectedStep(2);
        break;
      case "/payment":
        setSelectedStep(3);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <Fragment>
      <Box mb="14px">
        <Grid container spacing={6}>
          <Grid item lg={8} md={8} xs={12}>
            <Stepper
              stepperList={stepperList}
              selectedStep={selectedStep}
              onChange={handleStepChange}
            />
          </Grid>
        </Grid>
      </Box>

      {children}
    </Fragment>
  );
}
