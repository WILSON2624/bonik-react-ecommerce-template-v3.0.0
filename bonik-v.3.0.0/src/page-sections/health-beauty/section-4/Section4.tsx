import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import ProductCard16 from "@component/product-cards/ProductCard16";
import CategorySectionCreator from "@component/CategorySectionCreator";
import Product from "@models/product.model";
// STYLED COMPONENT
import { SubTitle } from "./styles";

// =====================================================
type Props = { products: Product[] };
// =====================================================

export default function Section4({ products }: Props) {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <SubTitle>Best collection in 2021 for you!</SubTitle>

      <Grid container spacing={6}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={12}>
            <ProductCard16
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

      <FlexBox alignItems="center" justifyContent="center" mt={32}>
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </FlexBox>
    </CategorySectionCreator>
  );
}
