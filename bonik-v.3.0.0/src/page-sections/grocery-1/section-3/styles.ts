import styled from "styled-components";
import { Paragraph } from "@component/Typography";

export const SubTitle = styled(Paragraph)(({ theme }) => ({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.colors.gray[600]
}));
