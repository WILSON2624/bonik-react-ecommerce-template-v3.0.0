import styled from "styled-components";
import { CarouselProvider, CarouselProviderProps } from "pure-react-carousel";

import Box from "@component/Box";
import { getTheme } from "@utils/utils";
import { deviceSize } from "@utils/constants";
import { colorOptions } from "interfaces";

// ==============================================================
type StyledCarouselProps = {
  spacing?: string;
  dotColor?: string;
  showDots?: boolean;
  showArrowOnHover?: boolean;
  dotGroupMarginTop?: string;
};
// ==============================================================

export const StyledCarousel = styled(
  ({
    spacing,
    showDots,
    dotColor,
    showArrowOnHover,
    dotGroupMarginTop,
    ...props
  }: CarouselProviderProps & StyledCarouselProps) => <CarouselProvider {...props} />
)`
  position: relative;
  min-width: 0px;

  .custom-slider {
    margin-left: calc(-1 * ${({ spacing }) => spacing || "0px"} / 2);
    margin-right: calc(-1 * ${({ spacing }) => spacing || "0px"} / 2);
  }

  .carousel__inner-slide {
    margin: auto;
    width: calc(100% - ${({ spacing }) => spacing || "0px"});
  }

  .arrow-button {
    position: absolute;
    top: calc(50% - ${(props) => (props.showDots ? props.dotGroupMarginTop : "0px")});
    transform: translateY(-50%);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  }

  .right-arrow-class {
    right: -22px;
  }

  .left-arrow-class {
    left: -22px;
  }

  ${(props) =>
    props.showArrowOnHover
      ? `
  [class*="arrow-class"] {
    display: none;
  }

  &:hover {
    [class*="arrow-class"] {
      display: unset;
    }
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    [class*="arrow-class"] {
      display: block;
    }
  }
  `
      : ""}

  @media only screen and (max-width: 1330px) {
    .right-arrow-class {
      right: 0px;
    }
    .left-arrow-class {
      left: 0px;
    }
  }

  .custom-dot {
    display: flex;
    justify-content: center;
    margin-top: ${(props) => props.dotGroupMarginTop || "0px"};
  }

  .dot {
    position: relative;
    height: 16px;
    width: 16px;
    border-radius: 300px;
    margin: 0.25rem;
    cursor: pointer;
    border: 1px solid ${({ dotColor }) => dotColor || getTheme("colors.secondary.main")};
  }
  .dot:after {
    position: absolute;
    content: " ";
    height: 9px;
    width: 9px;
    top: 50%;
    left: 50%;
    border-radius: 300px;
    transform: translate(-50%, -50%) scaleX(0);
    background: ${({ dotColor }) => dotColor || getTheme("colors.secondary.main")};
  }
  .dot-active:after {
    transform: translate(-50%, -50%) scaleX(1);
  }
`;

export const CarouselWrapper = styled(Box)<{ color?: colorOptions }>(
  ({ theme, color = "primary" }) => ({
    overflow: "hidden",
    "& .carousel__back-button, & .carousel__next-button": {
      color: "white",
      borderRadius: 0,
      transition: "0.3s",
      backgroundColor: theme.colors[color].main,
      "&:hover:not(:disabled)": {
        color: "white",
        backgroundColor: theme.colors[color].main
      }
    },
    "& .carousel__back-button": {
      left: 0,
      boxShadow: "-4px 0 7px -5px rgb(0 0 0 / 20%)"
    },
    "& .carousel__next-button": {
      right: 0,
      boxShadow: "4px 0 7px -5px rgb(0 0 0 / 20%)"
    },
    "& .carousel__back-button:disabled, & .carousel__next-button:disabled": {
      backgroundColor: theme.colors[color][200] ?? theme.colors.gray[300]
    }
  })
);
