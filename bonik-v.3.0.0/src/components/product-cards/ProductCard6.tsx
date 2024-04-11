import Box from "@component/Box";
import Card from "@component/Card";
import { Chip } from "@component/Chip";
import NextImage from "@component/NextImage";

// ===========================================================================
type ProductCard6Props = {
  title: string;
  imgUrl: string;
  subtitle: string;
};
// ===========================================================================

const ProductCard6 = ({ title, subtitle, imgUrl }: ProductCard6Props) => {
  return (
    <Card position="relative" padding="1rem" borderRadius={8}>
      <Chip
        zIndex={2}
        p="4px 10px"
        color="white"
        top="1.5rem"
        left="1.5rem"
        fontSize="10px"
        fontWeight="600"
        bg="secondary.main"
        position="absolute">
        {title}
      </Chip>

      <Chip
        zIndex={2}
        p="4px 10px"
        bg="gray.300"
        top="1.5rem"
        right="1.5rem"
        fontSize="10px"
        color="gray.800"
        fontWeight="600"
        position="absolute">
        {subtitle}
      </Chip>

      <Box borderRadius={8} display="flex" overflow="hidden">
        <NextImage src={imgUrl} width={345} height={120} alt="bonik" />
      </Box>
    </Card>
  );
};

export default ProductCard6;
