import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import ProductCard15 from "@component/product-cards/ProductCard15";
import CategorySectionCreator from "@component/CategorySectionCreator";

import { theme } from "@utils/theme";
import Product from "@models/product.model";

// ===============================================
type Props = { products: Product[] };
// ===============================================

export default function Section6({ products }: Props) {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <Grid container mb={-0.5} spacing={5}>
        {products.map((item) => (
          <Grid key={item.id} item lg={3} md={4} sm={6} xs={12}>
            <ProductCard15
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              images={item.images}
              imgUrl={item.thumbnail}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={5} display="flex" justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          style={{ backgroundColor: theme.colors.marron.main }}>
          Load More...
        </Button>
      </Box>
    </CategorySectionCreator>
  );
}
