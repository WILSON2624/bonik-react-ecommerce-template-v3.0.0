import Box from "@component/Box";
import Avatar from "@component/avatar";
import Rating from "@component/rating";
import FlexBox from "@component/FlexBox";
import { H5, H6, Paragraph, SemiSpan } from "@component/Typography";
import { getDateDifference } from "@utils/utils";

// =========================================
type ProductCommentProps = {
  name: string;
  date: string;
  imgUrl: string;
  rating: number;
  comment: string;
};
// =========================================

export default function ProductComment({
  name,
  date,
  imgUrl,
  rating,
  comment
}: ProductCommentProps) {
  return (
    <Box mb="32px" maxWidth="600px">
      <FlexBox alignItems="center" mb="1rem">
        <Avatar src={imgUrl} />

        <Box ml="1rem">
          <H5 mb="4px">{name}</H5>

          <FlexBox alignItems="center">
            <Rating value={rating} color="warn" readOnly />
            <H6 mx="10px">{rating}</H6>
            <SemiSpan>{getDateDifference(date)}</SemiSpan>
          </FlexBox>
        </Box>
      </FlexBox>

      <Paragraph color="gray.700">{comment}</Paragraph>
    </Box>
  );
}
