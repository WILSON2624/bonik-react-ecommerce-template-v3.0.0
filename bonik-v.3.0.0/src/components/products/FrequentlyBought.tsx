import { Fragment } from "react";
import styled from "styled-components";

import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { ProductCard8 } from "@component/product-cards";
import { H2, H3, SemiSpan } from "@component/Typography";
import Product from "@models/product.model";

// STYLED COMPONENT
const FrequentlyBoughtWrapper = styled("div")`
  margin-bottom: 3.75rem;
  @media only screen and (max-width: 425px) {
    .card-holder {
      margin: 0px;
      position: relative;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    .gray-box {
      width: 100%;
      min-width: 0px;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

// ============================================================
type Props = { products: Product[] };
// ============================================================

export default function FrequentlyBought({ products }: Props) {
  return (
    <FrequentlyBoughtWrapper>
      <H3 mb="24px">Frequently Bought Together</H3>

      <FlexBox className="card-holder" flexWrap="wrap" m="-0.5rem">
        {products.map((item, ind) => (
          <Fragment key={item.id}>
            <ProductCard8
              m="0.5rem"
              flex="1 1 0"
              width="100%"
              maxWidth="220px"
              minWidth="160px"
              id={item.id}
              slug={item.slug}
              price={item.price}
              title={item.title}
              off={item.discount}
              imgUrl={item.thumbnail}
            />

            {ind < products.length - 1 && (
              <FlexBox justifyContent="center" alignItems="center">
                <H2 color="text.muted" mx="0.5rem">
                  +
                </H2>
              </FlexBox>
            )}
          </Fragment>
        ))}

        <FlexBox justifyContent="center" alignItems="center">
          <H2 color="text.muted" mx="1.5rem">
            =
          </H2>
        </FlexBox>

        <FlexBox
          m="0.5rem"
          minWidth={300}
          minHeight={200}
          borderRadius={8}
          border="1px solid"
          alignItems="center"
          className="gray-box"
          flexDirection="column"
          borderColor="gray.400"
          justifyContent="center">
          <H3 color="primary.main">$2500</H3>
          <SemiSpan mb="1rem">Save $500</SemiSpan>

          <FlexBox>
            <Button variant="contained" color="primary" size="small" mr="1rem">
              Add to Cart
            </Button>

            <Button variant="outlined" color="primary" size="small">
              Add to List
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FrequentlyBoughtWrapper>
  );
}
