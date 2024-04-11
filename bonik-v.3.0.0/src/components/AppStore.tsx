import Box from "./Box";
import Icon from "./icon/Icon";
import FlexBox from "./FlexBox";
import Typography from "./Typography";

export default function AppStore() {
  return (
    <FlexBox flexWrap="wrap" m="-0.5rem">
      {appList.map((item) => (
        <a href="/" key={item.title} target="_blank" rel="noreferrer noopener">
          <Box
            m="0.5rem"
            color="white"
            p="10px 16px"
            display="flex"
            bg="#0C2A4D"
            cursor="pointer"
            borderRadius="5px"
            alignItems="center">
            <Icon defaultcolor="auto" size="24px">
              {item.iconName}
            </Icon>

            <Box ml="8px">
              <Typography fontSize="8px" fontWeight="600" lineHeight="1">
                {item.subtitle}
              </Typography>

              <Typography fontSize="14px" fontWeight="900">
                {item.title}
              </Typography>
            </Box>
          </Box>
        </a>
      ))}
    </FlexBox>
  );
}

const appList = [
  { iconName: "play-store", title: "Google Play", subtitle: "Get it on", url: "/" },
  { iconName: "app-store", title: "App Store", subtitle: "Download on the", url: "/" }
];
