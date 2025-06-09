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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi';
import useCartStore from '../store/cartStore';

const Header = () => {
  // Subscribe directly to the items array to ensure re-renders
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

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
            <Link as={RouterLink} to="/" color="white" _hover={{ color: 'orange.400' }} fontWeight="bold" fontSize="1.2rem">Home</Link>
            <Link as={RouterLink} to="/category/headphones" color="white" _hover={{ color: 'orange.400' }} fontWeight="bold" fontSize="1.2rem">Headphones</Link>
            <Link as={RouterLink} to="/category/speakers" color="white" _hover={{ color: 'orange.400' }} fontWeight="bold" fontSize="1.2rem">Speakers</Link>
            <Link as={RouterLink} to="/category/earphones" color="white" _hover={{ color: 'orange.400' }} fontWeight="bold" fontSize="1.2rem">Earphones</Link>
          </Stack>

          <Flex alignItems="center">
            <Link as={RouterLink} to="/cart">
              <Box position="relative">
                <IconButton
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
            </Link>
            <Box display={{ base: 'block', md: 'none' }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  ml={4}
                  icon={<HiOutlineMenu size={24} />}
                  variant="ghost"
                  color="white"
                  aria-label="Open menu"
                  _hover={{ bg: 'whiteAlpha.200' }}
                />
                <MenuList bg="black" borderColor="gray.600">
                  <MenuItem 
                    as={RouterLink} 
                    to="/" 
                    _hover={{ bg: 'gray.600', color: 'orange.400' }}
                    bg="black" 
                    color="white"
                  >
                    Home
                  </MenuItem>
                  <MenuItem 
                    as={RouterLink} 
                    to="/category/headphones"
                    _hover={{ bg: 'gray.600', color: 'orange.400' }}
                    bg="black"
                    color="white" 
                  >
                    Headphones
                  </MenuItem>
                  <MenuItem 
                    as={RouterLink} 
                    to="/category/speakers"
                    _hover={{ bg: 'gray.600', color: 'orange.400' }}
                    bg="black"
                    color="white"
                  >
                    Speakers
                  </MenuItem>
                  <MenuItem 
                    as={RouterLink} 
                    to="/category/earphones"
                    _hover={{ bg: 'gray.600', color: 'orange.400' }}
                    bg="black"
                    color="white"
                  >
                    Earphones
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header; 