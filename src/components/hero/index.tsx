import { useMediaQuery } from "@chakra-ui/react";
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export const Hero = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopHero /> : <MobileHero />;
};
