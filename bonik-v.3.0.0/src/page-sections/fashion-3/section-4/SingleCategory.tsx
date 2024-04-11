import NextImage from "@component/NextImage";
import { Category2Wrapper, StyledButton } from "./styles";

// ==============================================================
interface Props {
  img: string;
  url: string;
  buttonText: string;
}
// ==============================================================

export default function SingleCategory({ img, buttonText }: Props) {
  return (
    <Category2Wrapper>
      <NextImage src={img} width={580} height={280} alt="category" />

      <StyledButton variant="contained" color="primary">
        {buttonText}
      </StyledButton>
    </Category2Wrapper>
  );
}
