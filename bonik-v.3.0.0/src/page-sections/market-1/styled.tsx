import styled from "styled-components";
import Box from "@component/Box";
import { getTheme } from "@utils/utils";

const StyledProductCategory = styled(Box)`
  display: flex;
  cursor: pointer;
  min-width: 240px;
  border-radius: 5px;
  align-items: center;
  padding: 0.5rem 1rem;

  &:hover {
    box-shadow: ${getTheme("shadows.4")};
  }

  .product-category-title {
    font-size: 17px;
    font-weight: 600;
    margin-left: 1rem;
    text-transform: capitalize;
  }

  .show-all {
    width: 100%;
    font-size: 16px;
    text-align: center;
  }
`;

export default StyledProductCategory;
