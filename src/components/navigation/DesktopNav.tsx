import { Image, Flex, List, ListItem } from "@chakra-ui/react";
import Wrapper from "../layout/Wrapper";
import logo from "./snubes-logo.svg";

interface DesktopNavProps {}

export const navItems: string[] = [
  "About us",
  "How it works",
  "Become a Partner",
  "EUR",
  "Sign in",
  "Get Access",
];

const DesktopNav: React.FunctionComponent<DesktopNavProps> = () => {
  return (
    <Flex width={"full"} bg={"white"}>
      <Wrapper>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Image src={logo} alt="snubes logo" width={150} height={45} />
          <List as={"nav"} display={"flex"} gap={8}>
            {navItems.map((item, id) => (
              <ListItem key={`${item}.${id}`}>{item}</ListItem>
            ))}
          </List>
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default DesktopNav;
