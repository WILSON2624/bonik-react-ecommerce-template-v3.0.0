"use client";
import { useEffect, useState } from "react";
import useWindowSize from "@hook/useWindowSize";

const INITIAL_VALUE = {
  xs: 1,
  sm: 2,
  md: 3,
  initialSlide: 4,
};

const useVisibleSilde = (props = INITIAL_VALUE) => {
  const { initialSlide, xs, sm, md } = props;

  const width: any = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(initialSlide);

  useEffect(() => {
    if (width < 500) setVisibleSlides(xs);
    else if (width < 650) setVisibleSlides(sm);
    else if (width < 950) setVisibleSlides(md);
    else setVisibleSlides(initialSlide);
  }, [width]);

  return { visibleSlides };
};

export default useVisibleSilde;
