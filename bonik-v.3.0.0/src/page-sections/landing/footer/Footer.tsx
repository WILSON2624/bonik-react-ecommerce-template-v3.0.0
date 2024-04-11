import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
// STYLED COMPONENT
import { Wrapper } from "./styles";

export default function Footer() {
  return (
    <Wrapper py="4rem">
      <FlexBox justifyContent="space-between" flexWrap="wrap">
        <FlexBox className="flex" alignItems="center">
          Developed with{" "}
          <Icon color="primary" mx="0.5rem" size="16px">
            heart_filled
          </Icon>{" "}
          & Care by Ui Lib
        </FlexBox>

        <FlexBox className="flex">
          {iconList.map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer noopenner" key={item.iconName}>
              <Icon size="1.25rem" defaultcolor="auto" mx="0.5rem">
                {item.iconName}
              </Icon>
            </a>
          ))}
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
}

const iconList = [
  { iconName: "facebook-1", url: "https://www.facebook.com/UILibOfficial" },
  { iconName: "twitter-1", url: "/" },
  { iconName: "youtube-1", url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg" },
  { iconName: "instagram-1", url: "/" }
];
