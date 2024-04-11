"use client";

import { useRouter } from "next/navigation";
import { Button } from "@component/buttons";

export default function OrderListButton() {
  const { push } = useRouter();

  return (
    <Button px="2rem" color="primary" bg="primary.light" onClick={() => push("/orders")}>
      Order List
    </Button>
  );
}
