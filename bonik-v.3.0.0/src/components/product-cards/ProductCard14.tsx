"use client";

import styled from "styled-components";

import LazyImage from "components/LazyImage";
import { H6, Paragraph } from "components/Typography";

// STYLED COMPONENTS
const StyledCard = styled("div")(({ theme }) => ({
  textAlign: "center",
  transition: "all 0.3s",
  "&:hover": { "& h6": { color: theme.colors.marron.main } }
}));

const ImgBox = styled("div")(({ theme }) => ({
  padding: "0 40px 20px 40px",
  background: theme.colors.marron[100]
}));

// ===================================================
type Props = {
  title: string;
  imgUrl: string;
  available: string;
};
// ===================================================

export default function ProductCard14({ imgUrl, title, available }: Props) {
  return (
    <StyledCard>
      <ImgBox>
        <LazyImage
          src={imgUrl}
          width={256}
          height={166}
          style={{ width: "100%", objectFit: "contain" }}
          alt="bonik"
        />
      </ImgBox>

      <H6 fontSize={15} mt="8px" mb="2px">
        {title}
      </H6>

      <Paragraph color="gray.600">{available}</Paragraph>
    </StyledCard>
  );
}
