"use client";

import { useCallback, useState } from "react";
import Box from "@component/Box";
import Sticky from "@component/sticky";
import Navbar from "@component/navbar/SaleNavbar";

// ==============================================================
type Props = {
  saleCategoryList: { icon: string; title: string }[];
};
// ==============================================================

export default function SaleNavbar({ saleCategoryList }: Props) {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);

  return (
    <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={400}>
      {!isFixed ? <Box display="none" /> : <Navbar saleCategoryList={saleCategoryList} />}
    </Sticky>
  );
}
