import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import ProductCard13 from "@component/product-cards/ProductCard13";
import { H1, Paragraph } from "@component/Typography";
import Product from "@models/product.model";

// =====================================================
type Props = { products: Product[] };
// =====================================================

export default function Section4({ products }: Props) {
  return (
    <Box my={5}>
      <Box mb={4}>
        <H1 mb="4px">All Products</H1>
        <Paragraph color="grey.600">Tall blind but were, been folks not the expand</Paragraph>
      </Box>

      <Grid container spacing={6}>
        {products.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <ProductCard13
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              status={item.status}
              rating={item.rating}
              imgUrl={item.thumbnail}
              productColors={item.colors}
            />
          </Grid>
        ))}
      </Grid>

      <Button color="primary" variant="contained" style={{ margin: "auto", marginTop: "3rem" }}>
        Load More...
      </Button>
    </Box>
  );
}
