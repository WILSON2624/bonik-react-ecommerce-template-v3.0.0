import { useCallback, useState } from "react";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { H5 } from "@component/Typography";

// ===========================================================
type SaleNavbarProps = {
  onChange?: (value: any) => void;
  saleCategoryList: { icon: string; title: string }[];
};
// ===========================================================

export default function SaleNavbar({ saleCategoryList, onChange }: SaleNavbarProps) {
  const [selected, setSelected] = useState(1);

  const handleCategoryClick = useCallback(
    (categoryIndex: any) => () => {
      setSelected(categoryIndex);
      if (onChange) onChange(saleCategoryList[categoryIndex]);
    },
    []
  );

  return (
    <FlexBox bg="white" overflowX="auto" height="5rem">
      {saleCategoryList.map((item, ind) => (
        <FlexBox
          key={ind}
          cursor="pointer"
          minWidth="100px"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          ml={ind === 0 ? "auto" : "unset"}
          onClick={handleCategoryClick(ind)}
          bg={ind === selected ? "primary.light" : "transparent"}
          mr={ind === saleCategoryList.length - 1 ? "auto" : "unset"}>
          <Icon size="1.75rem" color={ind === selected ? "primary" : "secondary"}>
            {item.icon}
          </Icon>

          <H5
            fontSize="12px"
            textAlign="center"
            fontWeight={ind === selected ? "600" : "400"}
            color={ind === selected ? "primary.main" : "inherit"}>
            {item.title}
          </H5>
        </FlexBox>
      ))}
    </FlexBox>
  );
}
