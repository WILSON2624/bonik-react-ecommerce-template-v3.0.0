import Card from "@component/Card";
import styled from "styled-components";

export const StyledRoot = styled(Card)`
  width: 500px;
  overflow: hidden;
  .content {
    padding: 3rem 3.75rem 0px;
  }

  @media screen and (max-width: 550px) {
    width: 90%;
    .content {
      padding: 1.5rem 1rem 0px;
    }
  }
`;
