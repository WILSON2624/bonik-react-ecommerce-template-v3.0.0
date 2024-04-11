import { usePathname } from "next/navigation";
import getThemeOptions from "./themeOptions";

export default function theme() {
  const pathname = usePathname();
  const theme = getThemeOptions({ theme: "DEFAULT" }, pathname);
  return theme;
}
