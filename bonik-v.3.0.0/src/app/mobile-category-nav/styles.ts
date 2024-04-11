import styled from "styled-components";
import { getTheme } from "@utils/utils";
import { layoutConstant } from "@utils/constants";

export const MobileCategoryNavStyle = styled.div`
  position: relative;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }

  .main-category-holder {
    left: 0;
    position: fixed;
    top: ${layoutConstant.mobileHeaderHeight};
    bottom: ${layoutConstant.mobileNavHeight};
    background: ${getTheme("colors.gray.300")};

    .main-category-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      height: 80px;
      width: 90px;
      border-bottom: 1px solid;
      border-bottom-color: ${getTheme("colors.text.disabled")};
      cursor: pointer;
      border-left: 3px solid transparent;
      transition: border-left 300ms ease-out;
    }
    .active {
      border-left: 3px solid;
      border-left-color: ${getTheme("colors.text.hint")};
    }
  }

  .container {
    position: fixed;
    top: ${layoutConstant.mobileHeaderHeight};
    bottom: ${layoutConstant.mobileNavHeight};
    left: 95px;
    flex: 1 1 0;
    overflow-y: auto;
    padding: 0.5rem 1rem;
  }

  .ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
