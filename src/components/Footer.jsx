import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Image,
  Grid,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg={useColorModeValue('black', 'gray.900')}
      color="white"
      py={20}
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={12}
        >
          <Stack spacing={8}>
            <Link
              as={RouterLink}
              to="/"
              _hover={{ textDecoration: 'none' }}
            >
              <Image
                src="/src/assets/shared/desktop/logo.svg"
                alt="audiophile"
                height="25px"
              />
            </Link>
            <Text color="gray.400">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
            </Text>
            <Text color="gray.400">
              Copyright 2024. All Rights Reserved
            </Text>
          </Stack>

          <Stack spacing={8}>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={8}
              justify="flex-end"
            >
              <Link
                as={RouterLink}
                to="/"
                fontWeight="bold"
                textTransform="uppercase"
                _hover={{ color: 'orange.400' }}
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/category/headphones"
                fontWeight="bold"
                textTransform="uppercase"
                _hover={{ color: 'orange.400' }}
              >
                Headphones
              </Link>
              <Link
                as={RouterLink}
                to="/category/speakers"
                fontWeight="bold"
                textTransform="uppercase"
                _hover={{ color: 'orange.400' }}
              >
                Speakers
              </Link>
              <Link
                as={RouterLink}
                to="/category/earphones"
                fontWeight="bold"
                textTransform="uppercase"
                _hover={{ color: 'orange.400' }}
              >
                Earphones
              </Link>
            </Stack>

            <Stack
              direction="row"
              spacing={6}
              justify={{ base: 'center', md: 'flex-end' }}
              pt={8}
            >
              <IconButton
                as="a"
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                icon={<FaFacebookF />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'orange.400' }}
              />
              <IconButton
                as="a"
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'orange.400' }}
              />
              <IconButton
                as="a"
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'orange.400' }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 