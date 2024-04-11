"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import { Chip } from "@component/Chip";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import NextImage from "@component/NextImage";
import { H3, SemiSpan } from "@component/Typography";
import { deviceSize } from "@utils/constants";
import ProductQuickView from "@component/products/ProductQuickView";
import { useAppContext } from "@context/app-context";
import { calculateDiscount, currency, getTheme } from "@utils/utils";

// STYLED COMPONENT
const Wrapper = styled(Card)`
  margin: auto;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  transition: all 250ms ease-in-out;

  &:hover {
    .details {
      .add-cart {
        display: flex;
      }
    }
    .image-holder {
      .extra-icons {
        display: block;
      }
    }
  }

  .image-holder {
    text-align: center;
    position: relative;
    display: inlin-block;

    .extra-icons {
      z-index: 2;
      top: 0.75rem;
      display: none;
      right: 0.75rem;
      cursor: pointer;
      position: absolute;
    }

    @media only screen and (max-width: ${deviceSize.sm}px) {
      display: block;
    }
  }

  .details {
    padding: 1rem;

    .title,
    .categories {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .icon-holder {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${getTheme("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      margin-top: auto;
      align-items: center;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
    }
  }
`;

// ======================================================================
type ProductCard10Props = {
  off: number;
  slug: string;
  unit: string;
  title: string;
  price: number;
  imgUrl: string;
  rating: number;
  images: string[];
  id: string | number;
};
// ======================================================================

export default function ProductCard10(props: ProductCard10Props) {
  const { id, off, unit, slug, title, price, imgUrl, images } = props;

  const [open, setOpen] = useState(false);
  const [discountPrice, setDiscountPrice] = useState<string>("");
  const [discountAmount, setDiscountAmount] = useState<string>("");

  useEffect(() => {
    setDiscountPrice(() => calculateDiscount(price, off));
    setDiscountAmount(() => currency(off));
  }, []);

  const { state, dispatch } = useAppContext();
  const cartItem = state.cart.find((item) => item.id === id);

  const toggleDialog = useCallback(() => setOpen((open) => !open), []);

  const handleCartAmountChange = (qty: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { price, imgUrl, id, qty, slug, name: title }
    });
  };

  return (
    <Wrapper borderRadius={8}>
      <div className="image-holder">
        {off && (
          <Chip
            top="10px"
            left="10px"
            p="5px 10px"
            fontSize="10px"
            fontWeight="600"
            bg="primary.main"
            position="absolute"
            color="primary.text">
            {off}% off
          </Chip>
        )}

        <FlexBox className="extra-icons">
          <Icon color="secondary" variant="small" mb="0.5rem" onClick={toggleDialog}>
            eye-alt
          </Icon>

          <Icon className="favorite-icon outlined-icon" variant="small">
            heart
          </Icon>
        </FlexBox>

        <Link href={`/product/${slug}`}>
          <NextImage src={imgUrl} width={100} height={100} alt={title} />
        </Link>
      </div>

      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/product/${slug}`}>
              <H3
                mb="6px"
                title={title}
                fontSize="14px"
                textAlign="left"
                fontWeight="600"
                className="title"
                color="text.secondary">
                {title}
              </H3>
            </Link>

            <SemiSpan>{unit || "300ml"}</SemiSpan>

            <FlexBox alignItems="center" mt="6px">
              <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                {discountPrice}
              </SemiSpan>

              {off && (
                <SemiSpan color="text.muted" fontWeight="600">
                  <del>{discountAmount}</del>
                </SemiSpan>
              )}
            </FlexBox>
          </Box>

          <FlexBox
            width="30px"
            alignItems="center"
            flexDirection="column-reverse"
            justifyContent={!!cartItem ? "space-between" : "flex-start"}>
            <Button
              size="none"
              padding="5px"
              color="primary"
              variant="outlined"
              borderColor="primary.light"
              onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}>
              <Icon variant="small">plus</Icon>
            </Button>

            {cartItem?.qty && (
              <Fragment>
                <SemiSpan color="text.primary" fontWeight="600">
                  {cartItem.qty}
                </SemiSpan>

                <Button
                  size="none"
                  padding="5px"
                  color="primary"
                  variant="outlined"
                  borderColor="primary.light"
                  onClick={handleCartAmountChange(cartItem.qty - 1)}>
                  <Icon variant="small">minus</Icon>
                </Button>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </div>

      <ProductQuickView
        open={open}
        onClose={toggleDialog}
        product={{ id, images, slug, price, title }}
      />
    </Wrapper>
  );
}
