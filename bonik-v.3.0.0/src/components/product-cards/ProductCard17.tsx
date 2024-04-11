"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";

import Box from "@component/Box";
import Rating from "@component/rating";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import NextImage from "@component/NextImage";
import { IconButton } from "@component/buttons";
import { H4, Paragraph, Small } from "@component/Typography";
import ProductQuickView from "@component/products/ProductQuickView";
import { useAppContext } from "@context/app-context";
import { currency } from "@utils/utils";
import { theme } from "@utils/theme";

// styled components
const Wrapper = styled(Box)({
  "&:hover": {
    "& .product-actions": { right: 10 },
    "& img": { transform: "scale(1.1)" },
    "& .product-view-action": { opacity: 1 }
  }
});

const CardMedia = styled(Box)({
  maxHeight: 300,
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.colors.gray[300],
  "& img": { transition: "0.3s" }
});

const AddToCartButton = styled(IconButton)({
  top: 10,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .1s",
  backgroundColor: "transparent"
});

const FavoriteButton = styled(IconButton)({
  top: 45,
  right: -40,
  position: "absolute",
  transition: "right 0.3s .2s",
  backgroundColor: "transparent"
});

const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 0,
  opacity: 0,
  width: "100%",
  color: "white",
  borderRadius: 0,
  position: "absolute",
  transition: "all 0.3s",
  backgroundColor: theme.colors.secondary.main
});

// ==============================================================
type ProductCard17Props = {
  slug: string;
  title: string;
  price: number;
  imgUrl: string;
  rating?: number;
  reviews: number;
  category: string;
  images: string[];
  id: string | number;
};

// ==============================================================

export default function ProductCard17(props: ProductCard17Props) {
  const { id, title, price, imgUrl, category, reviews, slug, images } = props;

  const { state, dispatch } = useAppContext();
  const [openDialog, setOpenDialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const cartItem = state.cart.find((item) => item.slug === slug);

  const handleFavorite = () => setIsFavorite((fav) => !fav);
  const toggleDialog = useCallback(() => setOpenDialog((open) => !open), []);

  // handle add to cart
  const handleAddToCart = () => {
    const payload = {
      id,
      slug,
      price,
      imgUrl,
      name: title,
      qty: (cartItem?.qty || 0) + 1
    };

    dispatch({ type: "CHANGE_CART_AMOUNT", payload });
  };

  return (
    <Wrapper>
      <CardMedia>
        <Link href={`/product/${slug}`}>
          <NextImage width={300} height={300} src={imgUrl} alt="category" className="product-img" />
        </Link>

        <AddToCartButton className="product-actions" onClick={handleAddToCart}>
          <Icon size="18px">shopping-cart</Icon>
        </AddToCartButton>

        <FavoriteButton className="product-actions" onClick={handleFavorite}>
          <Icon size="18px">{isFavorite ? "heart-filled" : "heart"}</Icon>
        </FavoriteButton>

        <QuickViewButton
          size="large"
          variant="contained"
          className="product-view-action"
          onClick={() => setOpenDialog(true)}>
          Quick View
        </QuickViewButton>
      </CardMedia>

      <ProductQuickView
        open={openDialog}
        onClose={toggleDialog}
        product={{ id, images, slug, price, title }}
      />

      <Box p={1} textAlign="center">
        <Small color="gray.500">{category}</Small>
        <Paragraph fontWeight="bold">{title}</Paragraph>
        <H4 fontWeight={700} py={0.5}>
          {currency(price)}
        </H4>

        <FlexBox alignItems="center" justifyContent="center">
          <Rating value={4} color="warn" />
          <Small fontWeight={600} color="gray.500" ml=".5rem">
            ({reviews} Reviews)
          </Small>
        </FlexBox>
      </Box>
    </Wrapper>
  );
}
