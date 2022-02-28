import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import heroImage from "../../assets/img/hero-image.jpg";

interface LayoutProps {
  children: ReactElement;
}

export const BgWrapper: React.FunctionComponent<LayoutProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex
      width={"full"}
      backgroundImage={`url(${heroImage})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"right"}
      py={8}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default BgWrapper;
