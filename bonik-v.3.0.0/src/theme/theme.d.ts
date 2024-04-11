import "styled-components";
import theme from "./index";

type ThemeInterface = ReturnType<typeof theme>;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
