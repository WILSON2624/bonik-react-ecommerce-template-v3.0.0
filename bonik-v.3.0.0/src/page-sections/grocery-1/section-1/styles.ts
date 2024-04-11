"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  padding: 20px;
  padding-top: 160px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  background-image: url(/assets/images/headers/left.png), url(/assets/images/headers/right.png);
  background-size: 30%, 30%;
  background-position: left bottom, right bottom;
  background-repeat: no-repeat, no-repeat;
  transition: all 300ms;

  & h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 40px;
    line-height: 1.3;
  }

  & .searchBox {
    margin: auto;
    max-width: 600px;
    border-radius: 8px;

    & input {
      height: 48px;
    }

    & button {
      right: 0;
      color: white;
      height: 100%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
