import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as='footer'
      width='full'
      align='center'
      alignSelf='flex-end'
      justifyContent='center'>
      <Text color="gray.700" fontSize='xs'>
        {new Date().getFullYear()} -{" "}
        <Link
          href='https://github.com/anig1scur'
          isExternal>
          powered by laziness
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
