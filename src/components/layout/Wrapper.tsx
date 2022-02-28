import React, { ReactElement } from "react";
import { Container } from "@chakra-ui/layout";

interface LayoutProps {
  children: ReactElement;
}

export const Wrapper: React.FunctionComponent<LayoutProps> = ({
  children,
  ...rest
}) => {
  return (
    <Container maxW="6xl" p={"4"} margin={"auto"} {...rest}>
      {children}
    </Container>
  );
};

export default Wrapper;
