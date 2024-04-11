import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import Typography, { Span } from "@component/Typography";

export default function CheckoutSummary2() {
  return (
    <div>
      <Typography color="secondary.900" fontWeight="700" mb="1.5rem">
        Your order
      </Typography>

      {cartList.map((item) => (
        <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem" key={item.name}>
          <Typography>
            <Span fontWeight="700" fontSize="14px">
              {item.quantity}
            </Span>{" "}
            x {item.name}
          </Typography>
          <Typography>${item.price.toFixed(2)}</Typography>
        </FlexBox>
      ))}

      <Divider bg="gray.300" mb="1.5rem" />

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Subtotal:</Typography>
        <Typography fontWeight="700">${(2610).toFixed(2)}</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Shipping:</Typography>
        <Typography fontWeight="700">-</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Tax:</Typography>
        <Typography fontWeight="700">${(40).toFixed(2)}</Typography>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem">
        <Typography color="text.hint">Discount:</Typography>
        <Typography fontWeight="700">-</Typography>
      </FlexBox>

      <Divider bg="gray.300" mb="0.5rem" />

      <FlexBox fontWeight="700" justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography>Total:</Typography>
        <Typography fontWeight="700">${(2610).toFixed(2)}</Typography>
      </FlexBox>
    </div>
  );
}

const cartList = [
  { name: "iPhone 12", quantity: 1, price: 999 },
  { name: "iPhone 12 pro", quantity: 1, price: 1199 },
  { name: "iPhone 12 pro max", quantity: 1, price: 1299 }
];
