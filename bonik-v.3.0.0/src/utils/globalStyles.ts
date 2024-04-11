"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.5;
    transition: all 0.50s linear;
    color: ${({ theme }) => theme.colors.body.text};
    background: ${({ theme }) => theme.colors.body.default};
    font-family: Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    
  }

  html {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.body.text};
  }

  .cursor-pointer {
    cursor: pointer;
  }

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 1031;
  position: fixed;
  overflow: hidden;
  border-radius: 0px 4px 4px 0px;
  background: ${({ theme }) => theme.colors.primary.main};
}

/* Fancy blur effect */
#nprogress .peg {
  right: 0px;
  width: 100px;
  height: 100%;
  display: block;
  position: absolute;
  box-shadow: 0 0 10px ${({ theme }: any) => theme.colors.primary.main}, 0 0 5px ${({
  theme
}: any) => theme.colors.primary.main};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  top: 15px;
  right: 15px;
  z-index: 1031;
  display: block;
  position: fixed;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border-radius: 50%;
  border: solid 2px transparent;
  border-top-color: ${({ theme }) => theme.colors.primary.main};
  border-left-color: ${({ theme }) => theme.colors.primary.main};

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
