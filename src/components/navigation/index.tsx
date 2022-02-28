import { useMediaQuery } from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export const Navigation = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopNav /> : <MobileNav />;
};
