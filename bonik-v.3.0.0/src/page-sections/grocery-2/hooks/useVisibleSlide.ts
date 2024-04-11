import { useEffect, useState } from "react";
import useWindowSize from "@hook/useWindowSize";

const INITIAL_VALUE = {
  xs: 1,
  sm: 2,
  initialSlide: 3
};

export default function useVisibleSlide(props = INITIAL_VALUE) {
  const { initialSlide, xs, sm } = props;

  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(initialSlide);

  useEffect(() => {
    if (width < 500) setVisibleSlides(xs);
    else if (width < 950) setVisibleSlides(sm);
    else setVisibleSlides(initialSlide);
  }, [width]);

  return { visibleSlides };
}
