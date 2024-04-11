import styled from "styled-components";

// styled component
export const Wrapper = styled("div")(({ theme }) => ({
  marginBlock: "2rem",
  "& .carousel__next-button, .carousel__back-button": {
    padding: 10,
    borderRadius: 0,
    boxShadow: theme.shadows[2],
    color: theme.colors.marron.main,
    background: theme.colors.marron[50],
    "&:hover": { background: theme.colors.marron[100] }
  }
}));
