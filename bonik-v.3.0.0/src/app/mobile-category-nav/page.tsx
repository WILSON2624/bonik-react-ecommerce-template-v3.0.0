"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import Divider from "@component/Divider";
import { Header } from "@component/header";
import Scrollbar from "@component/Scrollbar";
import Typography from "@component/Typography";
import MobileNavigationBar from "@component/mobile-navigation";
import { Accordion, AccordionHeader } from "@component/accordion";
// CUSTOM HOOK
import useWindowSize from "@hook/useWindowSize";

import { MobileCategoryNavStyle } from "./styles";
import MobileCategoryImageBox from "./MobileCategoryImageBox";

import navigations from "@data/navigations";

// ==============================================================
interface Suggestion {
  href: string;
  title: string;
  imgUrl: string;
}
// ==============================================================

export default function MobileCategoryNav() {
  const width = useWindowSize();
  const [category, setCategory] = useState<any>(navigations[0]);
  const [suggestedList, setSuggestedList] = useState<Suggestion[]>([]);
  const [subCategoryList, setSubCategoryList] = useState<any[]>([]);

  const handleCategoryClick = (cat: any) => () => {
    let menuData = cat.menuData;
    if (menuData) setSubCategoryList(menuData.categories || menuData);
    else setSubCategoryList([]);
    setCategory(cat);
  };

  useEffect(() => setSuggestedList(suggestion), []);

  // HIDDEN IN LARGE DEVICE
  if (width > 900) return null;

  return (
    <MobileCategoryNavStyle>
      <Header className="header" />

      <div className="main-category-holder">
        <Scrollbar>
          {navigations.map((item) => (
            <div
              key={item.title}
              className={clsx({ "main-category-box": true, active: category?.href === item.href })}
              onClick={handleCategoryClick(item)}
              // borderLeft={`${category?.href === item.href ? "3" : "0"}px solid`}
            >
              <Icon size="28px" mb="0.5rem">
                {item.icon}
              </Icon>

              <Typography className="ellipsis" textAlign="center" fontSize="11px" lineHeight="1">
                {item.title}
              </Typography>
            </div>
          ))}
        </Scrollbar>
      </div>

      <div className="container">
        <Typography fontWeight="600" fontSize="15px" mb="1rem">
          Recommended Categories
        </Typography>

        <Box mb="2rem">
          <Grid container spacing={3}>
            {suggestedList.map((item, ind) => (
              <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                <Link href="/product/search/423423">
                  <MobileCategoryImageBox {...item} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        {category?.menuComponent === "MegaMenu1" ? (
          subCategoryList.map((item, ind) => (
            <Fragment key={ind}>
              <Divider />
              <Accordion>
                <AccordionHeader px="0px" py="10px">
                  <Typography fontWeight="600" fontSize="15px">
                    {item.title}
                  </Typography>
                </AccordionHeader>

                <Box mb="2rem" mt="0.5rem">
                  <Grid container spacing={3}>
                    {item.subCategories?.map((item: any, ind: number) => (
                      <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                        <Link href="/product/search/423423">
                          <MobileCategoryImageBox {...item} />
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Accordion>
            </Fragment>
          ))
        ) : (
          <Box mb="2rem">
            <Grid container spacing={3}>
              {subCategoryList.map((item, ind) => (
                <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                  <Link href="/product/search/423423">
                    <MobileCategoryImageBox {...item} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </div>

      <MobileNavigationBar />
    </MobileCategoryNavStyle>
  );
}

const suggestion = [
  {
    title: "Belt",
    href: "/belt",
    imgUrl: "/assets/images/products/categories/belt.png"
  },
  {
    title: "Hat",
    href: "/Hat",
    imgUrl: "/assets/images/products/categories/hat.png"
  },
  {
    title: "Watches",
    href: "/Watches",
    imgUrl: "/assets/images/products/categories/watch.png"
  },
  {
    title: "Sunglasses",
    href: "/Sunglasses",
    imgUrl: "/assets/images/products/categories/sunglass.png"
  },
  {
    title: "Sneakers",
    href: "/Sneakers",
    imgUrl: "/assets/images/products/categories/sneaker.png"
  },
  {
    title: "Sandals",
    href: "/Sandals",
    imgUrl: "/assets/images/products/categories/sandal.png"
  },
  {
    title: "Formal",
    href: "/Formal",
    imgUrl: "/assets/images/products/categories/shirt.png"
  },
  {
    title: "Casual",
    href: "/Casual",
    imgUrl: "/assets/images/products/categories/t-shirt.png"
  }
];
