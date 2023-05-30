import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
    const [isSmallScreen] = useMediaQuery('(max-width:768px)')

  return (
    <Flex
      as="footer"
      p={{base:9,lg:14,xl:20}}
      backgroundColor="#000249"
      flexDir={isSmallScreen ? "column" : "row"}
      justifyContent="space-between"
      alignItems='center'
    >
      <VStack alignItems={isSmallScreen?'center':'flex-start'} mb={isSmallScreen? 16:0}>
        <Heading size={{base:'sm',lg:"md"}} color="#EC3750">
          AIML Club
        </Heading>
        <VStack alignItems={isSmallScreen?'center':'flex-start'}>
          <FooterText text="Events" link='/events'/>
          <FooterText text="Our Team" link='/members'/>
          <FooterText text="Join Us" link='' />
          <FooterText text="Scrapbook"/>
          <FooterText text="Gallery" />
        </VStack>
      </VStack>
      <VStack w={"350px"} alignItems={isSmallScreen?'center':'flex-start'} mb={isSmallScreen? 16:0}>
        <Heading size={{base:'sm',lg:"md"}} color="#EC3750">
          Address
        </Heading>
        <Text fontSize={{base:'md',lg:"lg"}} color="white" textAlign={isSmallScreen?'center':'none'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text fontSize={{base:'md',lg:"lg"}} color="white" textAlign={isSmallScreen?'center':'none'}>
          All rights reserved, AIML CLub DTU <br /> Designed with ♥ Fahim Iqbal
        </Text>
      </VStack>
      <VStack justifyContent='space-evenly'>
        <Heading size={{base:'sm',lg:"md"}} color="#EC3750" mb={6}>
          Socials
        </Heading>
        <Image height='110px' w='auto' src='https://stickerhuman.hackclub.com/flag.png'/>
        <HStack spacing={6}>
          <SocialIcon icon={<AiFillTwitterCircle/>} link='https://twitter.com' />
          <SocialIcon icon={<AiFillGithub/>} link='https://github.com' />
          <SocialIcon icon={<AiFillLinkedin/>} link='https://linkedin.com' />
          <SocialIcon icon={<AiFillInstagram/>} link='https://instagram.com' />
        </HStack>
      </VStack>
    </Flex>
  );
};

function FooterText({ text, link }) {
  return (
    <Link href={link} _hover={{textDecoration:'none'}}>
      <Text fontSize={{base:'md',lg:'lg'}} color="white">
        {text}
      </Text>
    </Link>
  );
}

function SocialIcon({icon,link}) {
  return (
    <IconButton
      colorScheme="whiteAlpha"
      fontSize='4xl'
      aria-label=""
      isRound="true"
      icon={icon}
      as="a"
      href={link}
      background='none'
    />
  );
}

export default Footer;
