"use client";

import { useRouter } from "next/navigation";
import { Button } from "@component/buttons";

export default function BackToMethods() {
  const { push } = useRouter();

  return (
    <Button color="primary" bg="primary.light" px="2rem" onClick={() => push("/payment-methods")}>
      Back to Payment Methods
    </Button>
  );
}
