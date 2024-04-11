"use client";

import { Children, useRef, useState, useEffect, cloneElement, ReactElement } from "react";
// STYLED COMPONENT
import { AccordionWrapper } from "./styles";

// ==========================================
type AccordionProps = {
  expanded?: boolean;
  children: ReactElement[] | any;
};
// ==========================================

export default function Accordion({ expanded = false, children }: AccordionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(expanded);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  const toggle = () => setOpen(!open);

  useEffect(() => {
    let parent = ref.current;

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight);
      setParentHeight(parent.scrollHeight);
    }
  }, [ref.current]);

  const modifiedChildren = Children.map(children, (child, ind) => {
    if (ind === 0) return cloneElement(child, { open, onClick: toggle });
    else return child;
  });

  return (
    <AccordionWrapper ref={ref} height={open ? parentHeight : headerHeight}>
      {modifiedChildren}
    </AccordionWrapper>
  );
}
