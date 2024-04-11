"use client";

import Box from "@component/Box";
import Card from "@component/Card";
import Modal from "@component/Modal";
import Icon from "@component/icon/Icon";
import ProductIntro from "./ProductIntro";

// ===================================================
type Props = {
  open: boolean;
  onClose: () => void;
  product: {
    slug: string;
    title: string;
    price: number;
    images: string[];
    id: string | number;
  };
};
// ===================================================

export default function ProductQuickView({ open, onClose, product }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Card p="1rem" width="100%" maxWidth="800px" borderRadius={8} position="relative">
        <ProductIntro
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
        />

        <Box position="absolute" top="0.75rem" right="0.75rem" cursor="pointer">
          <Icon className="close" color="primary" variant="small" onClick={onClose}>
            close
          </Icon>
        </Box>
      </Card>
    </Modal>
  );
}
