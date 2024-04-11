import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H3 } from "@component/Typography";
import { ProductCard1 } from "@component/product-cards";
import Product from "@models/product.model";

// ============================================================
type Props = { products: Product[] };
// ============================================================

export default function RelatedProducts({ products }: Props) {
  return (
    <Box mb="3.75rem">
      <H3 mb="1.5rem">Related Products</H3>

      <Grid container spacing={8}>
        {products.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
            <ProductCard1
              hoverEffect
              id={item.id}
              slug={item.slug}
              price={item.price}
              title={item.title}
              off={item.discount}
              images={item.images}
              imgUrl={item.thumbnail}
              rating={item.rating || 4}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
