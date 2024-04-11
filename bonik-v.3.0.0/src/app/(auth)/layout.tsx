import { PropsWithChildren } from "react";
import FlexBox from "@component/FlexBox";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <FlexBox minHeight="100vh" alignItems="center" flexDirection="column" justifyContent="center">
      {children}
    </FlexBox>
  );
}
