import Link from "next/link";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import NextImage from "@component/NextImage";
import { H3, H6, SemiSpan } from "@component/Typography";

// =========================================================
type CardProps = {
  bg?: string;
  title: string;
  imgUrl: string;
  color?: string;
  subtitle: string;
  productUrl: string;
  subtitleColor?: string;
};
// =========================================================

export default function Card5({
  bg,
  color,
  title,
  imgUrl,
  subtitle,
  productUrl,
  subtitleColor
}: CardProps) {
  return (
    <Card height="100%" bg={bg || "body.paper"} color={color}>
      <Grid container spacing={1} flexWrap="wrap-reverse" alignItems="center">
        <Grid item sm={7} xs={12}>
          <Box p="2rem">
            <H3 mb="0.5rem">{title}</H3>
            <SemiSpan color={subtitleColor || "text.muted"} display="block">
              {subtitle}
            </SemiSpan>

            <Link href={productUrl}>
              <H6
                pb="2px"
                mt="1.5rem"
                fontSize="12px"
                textAlign="center"
                display="inline-block"
                borderBottom="2px solid"
                borderColor="primary.main"
                color={color || "inherit"}>
                SHOP NOW
              </H6>
            </Link>
          </Box>
        </Grid>

        <Grid item sm={5} xs={12}>
          <NextImage width={256} alt="model" height={214} src={imgUrl} />
        </Grid>
      </Grid>
    </Card>
  );
}
