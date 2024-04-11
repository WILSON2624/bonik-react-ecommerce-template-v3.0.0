"use client";

import styled, { CSSProperties } from "styled-components";
import Rating from "../rating";
import Icon from "../icon/Icon";
import FlexBox from "../FlexBox";
import { Button } from "../buttons";
import { getTheme } from "@utils/utils";

// STYLED COMPONENT
const Wrapper = styled.div`
  border-radius: 8px;
  display: inline-block;
  transition: all 250ms ease-in-out;
  background-color: ${getTheme("colors.body.default")};

  &:hover {
    box-shadow: ${getTheme("shadows.6")};
    .details {
      .add-cart {
        display: flex;
      }
    }
  }

  .image-holder {
    position: relative;
    text-align: center;
    display: inlin-block;

    .sale-chip {
      top: 0.625rem;
      left: 0.625rem;
      color: white;
      font-size: 13px;
      position: absolute;
      border-radius: 500px;
      display: inline-block;
      padding: 0.4rem 0.78rem;
      background: ${getTheme("colors.primary.main")};
    }
  }

  .details {
    padding: 1rem;

    h4 {
      margin: 0 0 0.5rem;
      color: ${getTheme("colors.text.secondary")};
    }

    .price {
      display: flex;
      margin-top: 0.5rem;
      font-weight: 600;

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
      margin-top: auto;
      align-items: center;

      span {
        font-size: 15px;
        font-weight: 600;
        padding: 0px 0.5rem;
      }
    }
  }
`;

// ========================================================
type ProductCard3Props = {
  className?: string;
  style?: CSSProperties;
};
// ========================================================

export default function ProductCard3({ ...props }: ProductCard3Props) {
  return (
    <Wrapper {...props}>
      <div className="image-holder">
        <div className="sale-chip">50% off</div>
        <img src="/assets/images/products/macbook.png" alt="golden-watch" />
      </div>

      <div className="details">
        <FlexBox justifyContent="space-between">
          <div>
            <h4>ASUS ROG Strix G15</h4>
          </div>

          <div className="icon-holder">
            <Icon className="favorite-icon" color="primary" variant="small">
              heart-filled
            </Icon>
          </div>
        </FlexBox>

        <FlexBox justifyContent="space-between">
          <div>
            <Rating
              outof={5}
              value={3.5}
              color="warn"
              onChange={(value) => console.log(value, "from rating")}
            />
            <div className="price">
              <h4>$445.00</h4>
              <del>$250</del>
            </div>
          </div>

          <div className="add-cart">
            <Button variant="outlined" color="primary" padding="5px">
              <Icon variant="small">minus</Icon>
            </Button>
            <span>45</span>
            <Button variant="outlined" color="primary" padding="5px">
              <Icon variant="small">plus</Icon>
            </Button>
          </div>
        </FlexBox>
      </div>
    </Wrapper>
  );
}
