import React, { useState } from "react";
import { Image, Flex, Button, List, ListItem, Box } from "@chakra-ui/react";
import { useOutsideClick } from "@chakra-ui/react";
import logo from "./snubes-logo.svg";
import { navItems } from "./DesktopNav";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
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
