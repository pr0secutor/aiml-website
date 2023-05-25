import { Flex, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      w="100%"
      position="absolute"
      top={0}
      justifyContent="space-evenly"
    >
      <Image height='80px' w='auto' src='https://stickerhuman.hackclub.com/flag.png'/>
      <HStack w='50%' justifyContent={'space-evenly'}>
        <NavItem text="Events" link="/events" />
        <NavItem text="Members" link="/members" />
        <NavItem text="Projects" link="/projects" />
        <NavItem text="What we do" link="#" />
        <NavItem text="Join Us" link="#" />
      </HStack>
      <HStack spacing={6}>
        <SocialIcon icon={<AiFillTwitterCircle />} link="https://twitter.com" />
        <SocialIcon icon={<AiFillGithub />} link="https://github.com" />
        <SocialIcon icon={<AiFillLinkedin />} link="https://linkedin.com" />
        <SocialIcon icon={<AiFillInstagram />} link="https://instagram.com" />
      </HStack>
    </Flex>
  );
};

function NavItem({ text, link }) {
  return (
    <Link to={link}>
      <Text fontSize={"lg"} color="white">
        {text}
      </Text>
    </Link>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <IconButton
      colorScheme="whiteAlpha"
      fontSize="4xl"
      aria-label=""
      isRound="true"
      icon={icon}
      as="a"
      href={link}
      background="none"
      _hover={{background:'none'}}
    />
  );
}

export default Navbar;
