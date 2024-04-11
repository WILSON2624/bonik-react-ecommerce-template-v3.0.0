import styled from "styled-components";
import { space } from "styled-system";
import { getTheme } from "@utils/utils";

export const StyledPagination = styled.div`
  .pagination {
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
    padding: 0px;

    li {
      cursor: pointer;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        margin: 0px 5px;
        border-radius: 5px;
        outline: none;
        border: 1px solid transparent;
        border-radius: 50%;
        @media only screen and (max-width: 450px) {
          margin: 4px;
        }
      }

      &:not(.active):hover {
        a {
          color: ${getTheme("colors.primary.main")};
          border: 1px solid ${getTheme("colors.primary.main")};
        }
      }
    }

    .active {
      cursor: none;
      a {
        border: 1px solid ${getTheme("colors.primary.main")};
        color: ${getTheme("colors.primary.main")};
      }
    }

    .disabled {
      .control-button {
        cursor: none;
        border: 1px solid ${getTheme("colors.primary.light")};
        color: ${getTheme("colors.primary.light")};
      }
    }
  }

  .control-button {
    height: 32px;
    width: 32px;
    min-width: 32px;
    border: 1px solid ${getTheme("colors.primary.main")};
  }

  ${space}
`;
