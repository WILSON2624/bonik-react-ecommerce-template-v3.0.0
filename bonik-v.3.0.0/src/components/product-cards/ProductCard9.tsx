"use client";
import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import styled from "styled-components";

import Box from "../Box";
import Card from "../Card";
import Image from "../Image";
import { Chip } from "../Chip";
import Hidden from "../hidden";
import Rating from "../rating";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import FlexBox from "../FlexBox";
import NavLink from "../nav-link";
import { Button } from "../buttons";
import { H5, SemiSpan } from "../Typography";
import ProductQuickView from "@component/products/ProductQuickView";
import { useAppContext } from "@context/app-context";
import { calculateDiscount, currency, getTheme } from "@utils/utils";

// STYLED COMPONENT
const Wrapper = styled(Card)`
  .quick-view {
    top: 0.75rem;
    display: none;
    right: 0.75rem;
    cursor: pointer;
    position: absolute;
  }
  .categories {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .categories {
    display: flex;
    .link {
      font-size: 14px;
      margin-right: 0.5rem;
      text-decoration: underline;
      color: ${getTheme("colors.text.hint")};
    }
  }

  h4 {
    text-align: left;
    margin: 0.5rem 0px;
    color: ${getTheme("colors.text.secondary")};
  }

  .price {
    display: flex;
    font-weight: 600;
    margin-top: 0.5rem;

    h4 {
      margin: 0px;
      padding-right: 0.5rem;
      color: ${getTheme("colors.primary.main")};
    }
    del {
      color: ${getTheme("colors.text.hint")};
    }
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
  }

  &:hover {
    .add-cart {
      display: flex;
    }
    .quick-view {
      display: block;
    }
  }
`;

// ============================================================================
type ProductCard9Props = {
  off?: number;
  slug: string;
  title: string;
  price: number;
  imgUrl: string;
  rating: number;
  images: string[];
  id: string | number;
  categories: string[];
  [key: string]: unknown;
};
// ============================================================================

export default function ProductCard9({
  id,
  off,
  slug,
  title,
  price,
  imgUrl,
  rating,
  images,
  categories,
  ...props
}: ProductCard9Props) {
  const [open, setOpen] = useState(false);
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
    <Wrapper overflow="hidden" width="100%" {...props}>
      <Grid container spacing={1}>
        <Grid item md={3} sm={4} xs={12}>
          <Box position="relative">
            {!!off && (
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

            <Icon color="secondary" variant="small" className="quick-view" onClick={toggleDialog}>
              eye-alt
            </Icon>

            <Image src={imgUrl} alt={title} width="100%" borderRadius="0.5rem" />
          </Box>
        </Grid>

        <Grid item md={8} sm={8} xs={12}>
          <FlexBox flexDirection="column" justifyContent="center" height="100%" p="1rem">
            {!!categories && (
              <div className="categories">
                {categories.map((item) => (
                  <NavLink className="link" href={`/product/search/${item}`} key={item}>
                    {item}
                  </NavLink>
                ))}
              </div>
            )}

            <Link href={`/product/${slug}`}>
              <H5 fontWeight="600" my="0.5rem">
                {title}
              </H5>
            </Link>

            <Rating value={rating || 0} outof={5} color="warn" />

            <FlexBox mt="0.5rem" mb="1rem" alignItems="center">
              <H5 fontWeight={600} color="primary.main" mr="0.5rem">
                {calculateDiscount(price, off as number)}
              </H5>

              {off && (
                <SemiSpan fontWeight="600">
                  <del>{currency(price)}</del>
                </SemiSpan>
              )}
            </FlexBox>

            <Hidden up="sm">
              <FlexBox
                height="30px"
                alignItems="center"
                flexDirection="row-reverse"
                justifyContent="space-between">
                <Icon className="favorite-icon outlined-icon" variant="small">
                  heart
                </Icon>

                <FlexBox alignItems="center" flexDirection="row-reverse">
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
                      <H5 fontWeight="600" fontSize="15px" mx="0.75rem">
                        {cartItem.qty}
                      </H5>

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
            </Hidden>
          </FlexBox>
        </Grid>

        <Hidden as={Grid} down="sm" item md={1} xs={12}>
          <FlexBox
            ml="auto"
            p="1rem 0rem"
            height="100%"
            minWidth="30px"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between">
            <Icon className="favorite-icon outlined-icon" variant="small">
              heart
            </Icon>

            <FlexBox
              alignItems="center"
              className="add-cart"
              flexDirection={cartItem?.qty ? "column" : "column-reverse"}>
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
                  <H5 fontWeight="600" fontSize="15px" m="0.5rem">
                    {cartItem.qty}
                  </H5>

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
        </Hidden>
      </Grid>

      <ProductQuickView
        open={open}
        onClose={toggleDialog}
        product={{ id, images, price, title, slug }}
      />
    </Wrapper>
  );
}
