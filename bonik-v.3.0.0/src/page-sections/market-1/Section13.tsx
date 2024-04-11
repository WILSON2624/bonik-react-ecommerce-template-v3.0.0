"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import HoverBox from "@component/HoverBox";
import { H4 } from "@component/Typography";
import NextImage from "@component/NextImage";
import { Carousel } from "@component/carousel";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { calculateDiscount, currency } from "@utils/utils";
import useWindowSize from "@hook/useWindowSize";
import Product from "@models/product.model";

// ========================================================
type Props = { bigDiscountList: Product[] };
// ========================================================

export default function Section13({ bigDiscountList }: Props) {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);

  return (
    <CategorySectionCreator iconName="gift" title="Big Discounts" seeMoreLink="#">
      <Box my="-0.25rem">
        <Carousel totalSlides={bigDiscountList.length} visibleSlides={visibleSlides}>
          {bigDiscountList.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <Card p="1rem" borderRadius={8}>
                <Link href={`/product/${item.slug}`}>
                  <HoverBox borderRadius={8} mb="0.5rem" display="flex">
                    <NextImage width={500} height={500} alt={item.title} src={item.thumbnail} />
                  </HoverBox>

                  <H4 fontWeight="600" fontSize="14px" mb="0.25rem">
                    {item.title}
                  </H4>

                  <FlexBox>
                    <H4 fontWeight="600" fontSize="14px" color="primary.main" mr="0.5rem">
                      {calculateDiscount(item.price, item.discount)}
                    </H4>

                    <H4 fontWeight="600" fontSize="14px" color="text.muted">
                      <del>{currency(item.price)}</del>
                    </H4>
                  </FlexBox>
                </Link>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
