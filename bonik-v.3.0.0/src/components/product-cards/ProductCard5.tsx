import HoverBox from "@component/HoverBox";
import { H4 } from "@component/Typography";
import NextImage from "@component/NextImage";

// ====================================================================
type ProductCard5Props = { imgUrl: string; title: string };
// ====================================================================

export default function ProductCard5({ imgUrl, title }: ProductCard5Props) {
  return (
    <div>
      <HoverBox borderRadius={5} mb="0.5rem" display="flex">
        <NextImage alt={title} src={imgUrl} width={260} height={175} />
      </HoverBox>

      <H4 fontSize="14px" fontWeight="600">
        {title}
      </H4>
    </div>
  );
}
