import { Flex, Image, Link, List, ListItem, Text } from "@chakra-ui/react";
import Wrapper from "./layout/Wrapper";
import bestTag from "../assets/img/best-footer.jpeg";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "../icons";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  const contactItems: Array<{ title: string; link?: string }> = [
    {
      title: "support@snubes.com",
      link: "mailto:support@snubes.com",
    },
    {
      title: "+49 (0) 305 5645327",
      link: "#",
    },
  ];

  const socialItems: Array<{ title: string; link: string; icon: any }> = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/SnubesGlobal/",
      icon: <FacebookIcon width={6} height={6} />,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/SnubesGlobal",
      icon: <TwitterIcon width={6} height={6} />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/snubes/",
      icon: <LinkedInIcon width={6} height={6} />,
    },
  ];
  return (
    <Flex as={"footer"} bg={"snubesGray"} pt={16} flexDir={"column"}>
      <Wrapper>
        <Flex
          justifyContent={"space-around"}
          alignItems={"center"}
          color={"white"}
          flexWrap={"wrap"}
          flexDir={["column", "row", "row"]}
          pb={16}
        >
          <Image src={bestTag} alt="best tag" width={100} height={100} my={4} />
          <List display={"flex"} flexDir="column" gap={4} my={4}>
            {["About us", "Become a Partner", "FAQ"].map((item, id) => (
              <ListItem key={`${item}.${id}`} textAlign={["center", "start"]}>
                <Link href="#"> {item}</Link>
              </ListItem>
            ))}
          </List>

          <List display={"flex"} flexDir="column" gap={4} my={4}>
            {["Imprint", "Terms & Conditions", "Privacy Policy"].map(
              (item, id) => (
                <ListItem key={`${item}.${id}`} textAlign={["center", "start"]}>
                  <Link href="#">{item}</Link>
                </ListItem>
              )
            )}
          </List>
          <Flex flexDir={"column"} gap={4} my={4}>
            <List display={"flex"} flexDir="column" gap={4}>
              {contactItems.map((item, id) => (
                <ListItem key={`${item}.${id}`} textAlign={["center", "start"]}>
                  <Link href={item.link}>{item.title}</Link>
                </ListItem>
              ))}
            </List>
            <Flex
              alignItems={"center"}
              gap={4}
              justifyContent={["center", "flex-start"]}
            >
              {socialItems.map((item, id) => (
                <Link href={item.link} key={`${item.title}.${id}`}>
                  {item.icon}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>
      <Flex bg={"grayBg"} px={4} py={4} justifyContent={"center"}>
        <Text fontSize={"md"} textAlign={"center"}>
          © {new Date().getFullYear()} Snubes GmbH All Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
