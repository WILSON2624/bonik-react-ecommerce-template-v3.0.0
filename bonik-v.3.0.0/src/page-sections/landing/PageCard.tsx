import { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";

import Box from "@component/Box";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { H3 } from "@component/Typography";
import NextImage from "@component/NextImage";
import { IconButton } from "@component/buttons";
import { theme } from "@utils/theme";

// STYLED COMPONENT
const Wrapper = styled(Box)`
  .overlay {
    transition: opacity 250ms ease-in-out;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const StatusChip = styled("div")({
  position: "absolute",
  width: 44,
  height: 44,
  zIndex: 11,
  top: "10px",
  right: "8px",
  color: "#fff",
  fontSize: "13px",
  fontWeight: 700,
  borderRadius: 36,
  padding: "11px 7px",
  boxShadow: theme.shadows[2],
  background: theme.colors.dark.main
});

// ============================================
interface PageCardProps {
  title: string;
  imgUrl: string;
  badge?: boolean;
  previewUrl: string;
}
// ============================================

export default function PageCard({ imgUrl, previewUrl, title, badge }: PageCardProps) {
  return (
    <Fragment>
      <Wrapper
        mb="1.5rem"
        bg="gray.200"
        p="10% 10% 0px"
        borderRadius={8}
        border="1px solid"
        position="relative"
        borderColor="gray.300">
        <Card boxShadow="large">
          <NextImage src={imgUrl} width={470} height={400} alt="bonik" />
        </Card>

        {badge && <StatusChip>New</StatusChip>}

        <Link href={previewUrl} target="_blank">
          <FlexBox
            top="0"
            right="0"
            left="0"
            bottom="0"
            opacity="0"
            borderRadius={8}
            className="overlay"
            position="absolute"
            alignItems="center"
            bg="rgba(0,0,0, 0.54)"
            justifyContent="center">
            <IconButton>
              <Icon>eye</Icon>
            </IconButton>
          </FlexBox>
        </Link>
      </Wrapper>

      <H3 fontSize={14} textAlign="center" lineHeight="1">
        {title}
      </H3>
    </Fragment>
  );
}
