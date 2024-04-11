"use client";

import { useCallback, useEffect, useState } from "react";

export default function useScroll(height = 60) {
  const [isFixed, setFixed] = useState(false);

  const scrollListener = useCallback(() => setFixed(window.scrollY > height), []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return { isFixed };
}
