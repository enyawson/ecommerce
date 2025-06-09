import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.200', 'gray.200')}
    >
      <Container maxW="container.xl" py={10}>
        <SimpleGrid
          templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Text fontSize="2xl" fontWeight="bold">
              Audiophile
            </Text>
            <Text fontSize="sm" color="gray.400">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team
              of music lovers and sound specialists who are devoted to helping you get the
              most out of personal audio.
            </Text>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" mb={2}>
              Shop
            </Text>
            <Link as={RouterLink} to="/category/headphones">Headphones</Link>
            <Link as={RouterLink} to="/category/speakers">Speakers</Link>
            <Link as={RouterLink} to="/category/earphones">Earphones</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" mb={2}>
              Support
            </Text>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Returns</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="bold" mb={2}>
              Company
            </Text>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Privacy Policy</Link>
          </Stack>
        </SimpleGrid>

        <Box
          borderTopWidth={1}
          borderStyle="solid"
          borderColor="gray.700"
          pt={8}
          mt={8}
          textAlign="center"
        >
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Audiophile. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 