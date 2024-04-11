import styled from "styled-components";
// GLOBAL CUSTOM COMPONENTS
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import NextImage from "@component/NextImage";
import Typography from "@component/Typography";

// STYLED COMPONENT
const StyledImage = styled(NextImage)`
  border-radius: 5px;
  object-fit: cover;
`;

// ==============================================================
type MobileCategoryImageBoxProps = {
  icon?: string;
  title: string;
  imgUrl?: string;
};
// ==============================================================

export default function MobileCategoryImageBox({
  icon,
  title,
  imgUrl
}: MobileCategoryImageBoxProps) {
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      {imgUrl ? (
        <StyledImage src={imgUrl} width={69} height={60} alt="bonik" />
      ) : (
        icon && <Icon size="48px">{icon}</Icon>
      )}

      <Typography
        className="ellipsis"
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt="0.5rem">
        {title}
      </Typography>
    </FlexBox>
  );
}
