"use client";

import Link from "next/link";

import Box from "@component/Box";
import Avatar from "@component/avatar";
import Rating from "@component/rating";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { IconButton } from "@component/buttons";
import { H3, SemiSpan } from "@component/Typography";
import { ShopCard1Wrapper } from "./styles";

// =====================================================
type ShopCard1Props = {
  name: string;
  phone: string;
  rating: number;
  imgUrl: string;
  address: string;
  shopUrl: string;
  coverImgUrl: string;
};
// =====================================================

export default function ShopCard1({
  name,
  phone,
  rating,
  imgUrl,
  address,
  shopUrl,
  coverImgUrl
}: ShopCard1Props) {
  return (
    <ShopCard1Wrapper overflow="hidden" coverImgUrl={coverImgUrl}>
      <div className="black-box">
        <H3 fontWeight="600" mb="8px">
          {name}
        </H3>

        <Box mb="13px">
          <Rating size="small" value={rating || 0} outof={5} color="warn" />
        </Box>

        <FlexBox mb="8px">
          <Icon defaultcolor="currentColor" size="15px" mt="5px">
            map-pin-2
          </Icon>

          <SemiSpan color="white" ml="12px">
            {address}
          </SemiSpan>
        </FlexBox>

        <FlexBox>
          <Icon defaultcolor="currentColor" size="15px" mt="4px">
            phone_filled
          </Icon>

          <SemiSpan color="white" ml="12px">
            {phone}
          </SemiSpan>
        </FlexBox>
      </div>

      <FlexBox pl="30px" pr="18px" justifyContent="space-between">
        <Avatar src={imgUrl} size={64} mt="-32px" border="4px solid" borderColor="gray.100" />
        <Link href={shopUrl}>
          <IconButton my="0.25rem">
            <Icon defaultcolor="auto">arrow-long-right</Icon>
          </IconButton>
        </Link>
      </FlexBox>
    </ShopCard1Wrapper>
  );
}
