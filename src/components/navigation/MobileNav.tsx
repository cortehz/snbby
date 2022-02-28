import React, { useState } from "react";
import { Image, Flex, Button, List, ListItem, Box } from "@chakra-ui/react";
import { useOutsideClick } from "@chakra-ui/react";
import logo from "./snubes-logo.svg";
import { navItems } from "./DesktopNav";
import { HamburgerIcon } from "@chakra-ui/icons";
import { CloseIcon } from "../../icons";

interface DesktopNavProps {}

const MobileNav: React.FunctionComponent<DesktopNavProps> = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: navRef,
    handler: () => setShowNav(false),
  });

  return (
    <Flex
      justifyContent={"space-between"}
      w={"full"}
      position={"relative"}
      bg={"white"}
      px={8}
      py={4}
    >
      <Image src={logo} alt="snubes logo" />

      <Box ref={navRef}>
        <Button
          onClick={() => {
            setShowNav(!showNav);
          }}
          bg={"transparent"}
        >
          {!showNav ? <HamburgerIcon /> : <CloseIcon />}
        </Button>
        {showNav ? (
          <List
            as={"nav"}
            bg={"white"}
            position={"absolute"}
            top={"20"}
            width={"full"}
            p={8}
            display={"flex"}
            flexDir={"column"}
            gap={4}
            left={"0"}
            zIndex={1}
          >
            {navItems.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        ) : null}
      </Box>
    </Flex>
  );
};

export default MobileNav;
