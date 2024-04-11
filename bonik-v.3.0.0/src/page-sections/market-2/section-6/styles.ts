import styled from "styled-components";

// STYLED COMPONENTS
export const ListItem = styled("li")(({ theme }) => ({
  fontSize: 13,
  fontWeight: 500,
  listStyle: "none",
  cursor: "pointer",
  padding: "10px 0 0 0",
  transition: "all 0.3s",
  "&:hover": { color: theme.colors.primary.main }
}));

export const List = styled("ul")({
  padding: 0,
  marginBottom: "1.5rem"
});
