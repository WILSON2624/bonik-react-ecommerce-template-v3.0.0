import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import { H3, Paragraph } from "@component/Typography";

export default function Section9() {
  return (
    <Box mb="3.75rem" py="1rem">
      <FlexBox justifyContent="center">
        <Icon size="40px" mb="1.5rem">
          telegram
        </Icon>
      </FlexBox>

      <H3 textAlign="center" fontSize="25px" mb="1rem" lineHeight="1.2">
        Subscribe To Our Newsletter
      </H3>

      <Paragraph maxWidth="220px" textAlign="center" color="text.muted" mx="auto" mb="1.25rem">
        and receive $20 coupon for the first Shopping
      </Paragraph>

      <Box mx="auto" maxWidth="600px">
        <TextField
          fullwidth
          type="email"
          placeholder="Enter Your Mail Here"
          endAdornment={
            <Button
              color="primary"
              borderRadius="0px"
              variant="contained"
              style={{ right: 0 }}
              borderTopRightRadius="8px"
              borderBottomRightRadius="8px">
              SUBSCRIBE
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
