import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Link,
  IconButton,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useCartStore } from '../store/cartStore';

const Header = () => {
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box
      as="header"
      bg={useColorModeValue('black', 'gray.900')}
      color="white"
      borderBottom="1px"
      borderColor={useColorModeValue('gray.800', 'gray.700')}
    >
      <Container maxW="container.xl">
        <Flex
          align="center"
          justify="space-between"
          py={6}
        >
          {/* Logo */}
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

          {/* Navigation */}
          <Stack
            direction="row"
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
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

          {/* Cart */}
          <Box position="relative">
            <IconButton
              as={RouterLink}
              to="/cart"
              aria-label="Shopping cart"
              icon={<HiOutlineShoppingCart size={24} />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
            {totalItems > 0 && (
              <Box
                position="absolute"
                top="-2"
                right="-2"
                bg="orange.400"
                color="white"
                borderRadius="full"
                w="5"
                h="5"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xs"
                fontWeight="bold"
              >
                {totalItems}
              </Box>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header; 