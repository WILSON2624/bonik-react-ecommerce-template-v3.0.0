"use client";

import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

export default function useWindowSize() {
  const [width, setWidth] = useState<number>(null);

  const windowListener = debounce(() => {
    if (window) setWidth(window.innerWidth);
  }, 250);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener("resize", windowListener);
    }

    return () => window.removeEventListener("resize", windowListener);
  }, []);

  return width;
}
