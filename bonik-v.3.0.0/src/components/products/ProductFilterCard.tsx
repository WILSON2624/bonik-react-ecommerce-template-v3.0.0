"use client";

import Card from "@component/Card";
import Avatar from "@component/avatar";
import Rating from "@component/rating";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import CheckBox from "@component/CheckBox";
import TextField from "@component/text-field";
import { Accordion, AccordionHeader } from "@component/accordion";
import { H5, H6, Paragraph, SemiSpan } from "@component/Typography";

export default function ProductFilterCard() {
  const render = (items: string[]) =>
    items.map((name) => (
      <Paragraph
        py="6px"
        pl="22px"
        key={name}
        fontSize="14px"
        color="text.muted"
        className="cursor-pointer">
        {name}
      </Paragraph>
    ));

  return (
    <Card p="18px 27px" elevation={5} borderRadius={8}>
      <H6 mb="10px">Categories</H6>

      {categoryList.map((item) =>
        item.child ? (
          <Accordion key={item.title} expanded>
            <AccordionHeader px="0px" py="6px" color="text.muted">
              <SemiSpan className="cursor-pointer" mr="9px">
                {item.title}
              </SemiSpan>
            </AccordionHeader>

            {render(item.child)}
          </Accordion>
        ) : (
          <Paragraph
            py="6px"
            fontSize="14px"
            key={item.title}
            color="text.muted"
            className="cursor-pointer">
            {item.title}
          </Paragraph>
        )
      )}

      <Divider mt="18px" mb="24px" />

      {/* PRICE RANGE FILTER */}
      <H6 mb="16px">Price Range</H6>
      <FlexBox justifyContent="space-between" alignItems="center">
        <TextField placeholder="0" type="number" fullwidth />

        <H5 color="text.muted" px="0.5rem">
          -
        </H5>

        <TextField placeholder="250" type="number" fullwidth />
      </FlexBox>

      <Divider my="24px" />

      {/* BRANDS FILTER */}
      <H6 mb="16px">Brands</H6>
      {brandList.map((item) => (
        <CheckBox
          my="10px"
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        />
      ))}

      <Divider my="24px" />

      {/* STOCK AND SALES FILTERS */}
      {otherOptions.map((item) => (
        <CheckBox
          my="10px"
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        />
      ))}

      <Divider my="24px" />

      {/* RATING FILTER */}
      <H6 mb="16px">Ratings</H6>
      {[5, 4, 3, 2, 1].map((item) => (
        <CheckBox
          my="10px"
          key={item}
          value={item}
          color="secondary"
          label={<Rating value={item} outof={5} color="warn" />}
          onChange={(e) => console.log(e.target.value, e.target.checked)}
        />
      ))}

      <Divider my="24px" />

      {/* COLORS FILTER */}
      <H6 mb="16px">Colors</H6>
      <FlexBox mb="1rem">
        {colorList.map((item, ind) => (
          <Avatar key={ind} bg={item} size={25} mr="10px" style={{ cursor: "pointer" }} />
        ))}
      </FlexBox>
    </Card>
  );
}

const categoryList = [
  { title: "Bath Preparations", child: ["Bubble Bath", "Bath Capsules", "Others"] },
  { title: "Eye Makeup Preparations" },
  { title: "Fragrance" },
  { title: "Hair Preparations" }
];

const otherOptions = ["On Sale", "In Stock", "Featured"];
const brandList = ["Maccs", "Karts", "Baars", "Bukks", "Luasis"];
const colorList = ["#1C1C1C", "#FF7A7A", "#FFC672", "#84FFB5", "#70F6FF", "#6B7AFF"];
