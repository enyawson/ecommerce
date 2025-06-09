import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Link,
  IconButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi';
import useCartStore from '../store/cartStore';

const Header = () => {
  const { getItemsCount } = useCartStore();
  const itemCount = getItemsCount();

  return (
    <Box bg="black" color="white" shadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link
            as={RouterLink}
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            textTransform="lowercase"
            color="white"
            _hover={{ textDecoration: 'none', color: 'orange.400' }}
          >
            Audiophile
          </Link>

          <Stack
            direction="row"
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
          >
            <Link as={RouterLink} to="/" color="white" _hover={{ color: 'orange.400' }}>Home</Link>
            <Link as={RouterLink} to="/category/headphones" color="white" _hover={{ color: 'orange.400' }}>Headphones</Link>
            <Link as={RouterLink} to="/category/speakers" color="white" _hover={{ color: 'orange.400' }}>Speakers</Link>
            <Link as={RouterLink} to="/category/earphones" color="white" _hover={{ color: 'orange.400' }}>Earphones</Link>
          </Stack>

          <Flex alignItems="center">
            <Box position="relative">
              <IconButton
                as={RouterLink}
                to="/cart"
                icon={<HiOutlineShoppingCart size={24} />}
                variant="ghost"
                color="white"
                aria-label="Shopping cart"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
              {itemCount > 0 && (
                <Box
                  position="absolute"
                  top="-2px"
                  right="-2px"
                  bg="orange.500"
                  color="white"
                  borderRadius="full"
                  w="20px"
                  h="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  {itemCount}
                </Box>
              )}
            </Box>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              ml={4}
              icon={<HiOutlineMenu size={24} />}
              variant="ghost"
              color="white"
              aria-label="Open menu"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header; 