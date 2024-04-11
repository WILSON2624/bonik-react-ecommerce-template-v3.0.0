import Link from "next/link";

import Box from "@component/Box";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { H3, H4 } from "@component/Typography";
import Shop from "@models/shop.model";

// ============================================================
type Props = { shops: Shop[] };
// ============================================================

export default function AvailableShops({ shops }: Props) {
  return (
    <Box mb="3.75rem">
      <H3 mb="1.5rem">Also Available at</H3>

      <Grid container spacing={8}>
        {shops.map((item) => (
          <Grid item lg={2} md={4} sm={6} xs={12} key={item.name}>
            <Link href={`/shops/${item.slug}`}>
              <FlexBox
                as={Card}
                p="1.5rem"
                width="100%"
                borderRadius={8}
                alignItems="center"
                flexDirection="column"
                justifyContent="center">
                <Avatar src={item.profilePicture} />
                <H4 textAlign="center" width="inherit" mt="0.75rem" color="gray.800" ellipsis>
                  {item.name}
                </H4>
              </FlexBox>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
