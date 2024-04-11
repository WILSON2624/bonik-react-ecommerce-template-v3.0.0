"use client";

import Link from "next/link";
import styled from "styled-components";

import Box from "@component/Box";
import Image from "@component/Image";
import Rating from "@component/rating";
import NavLink from "@component/nav-link";
import { Paragraph } from "@component/Typography";
import { currency } from "@utils/utils";

// STYLED COMPONENT
const StyledFlexBox = styled("div")({
  gap: "1rem",
  display: "flex",
  marginBottom: "1rem",
  alignItems: "center",
  "& a": { flexShrink: 0 },
  "& img": { transition: "0.3s" },
  "&:last-of-type": { marginBottom: 0 },
  "&:hover": { img: { transform: "scale(1.1)" } }
});

// ===========================================
type ProductCard18Props = {
  slug: string;
  image: string;
  title: string;
  price: number;
  rating: number;
};
// ===========================================

export default function ProductCard18({ image, title, price, slug, rating }: ProductCard18Props) {
  return (
    <StyledFlexBox>
      <Link href={`/product/${slug}`}>
        <Box maxWidth={100} bg="gray.300">
          <Image width="100%" alt="product" src={image} />
        </Box>
      </Link>

      <div>
        <NavLink href="#">
          <Paragraph fontSize={16}>{title}</Paragraph>
        </NavLink>

        <Paragraph fontWeight={700} my={1}>
          {currency(price)}
        </Paragraph>

        <Rating value={rating} size="small" color="warn" />
      </div>
    </StyledFlexBox>
  );
}
