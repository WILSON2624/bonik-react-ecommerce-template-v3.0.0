"use client";

import { useRouter } from "next/navigation";
import { Button } from "@component/buttons";

export default function BackToAddress() {
  const { push } = useRouter();

  return (
    <Button px="2rem" color="primary" bg="primary.light" onClick={() => push("/address")}>
      Back to Address
    </Button>
  );
}
