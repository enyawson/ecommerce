import React, { useState } from 'react';
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
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
} from '@chakra-ui/react';
import { HiOutlineShoppingCart, HiOutlineMenu } from 'react-icons/hi';
import { useCartStore } from '../store/cartStore';

const NAVIGATION_ITEMS = [
  { path: '/', label: 'HOME' },
  { path: '/category/headphones', label: 'HEADPHONES' },
  { path: '/category/speakers', label: 'SPEAKERS' },
  { path: '/category/earphones', label: 'EARPHONES' },
];

const Header = () => {
  const { items } = useCartStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const bgColor = useColorModeValue('black', 'gray.900');
  const borderColor = useColorModeValue('whiteAlpha.200', 'gray.700');

  return (
    <Box
      as="header"
      bg={bgColor}
      color="white"
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Container maxW="container.xl" py={6}>
        <Flex align="center" justify="space-between">
          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label="Open menu"
            fontSize="20px"
            variant="ghost"
            icon={<HiOutlineMenu />}
            onClick={onOpen}
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
          />

          {/* Logo */}
          <Link
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: 'none' }}
            mx={{ base: 'auto', md: 0 }}
            position={{ base: 'absolute', md: 'relative' }}
            left={{ base: '50%', md: 0 }}
            transform={{ base: 'translateX(-50%)', md: 'none' }}
          >
            <Image
              src="/src/assets/shared/desktop/logo.svg"
              alt="audiophile"
              height="25px"
            />
          </Link>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            align="center"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                as={RouterLink}
                to={item.path}
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="widest"
                _hover={{ color: 'orange.400' }}
                transition="color 0.2s"
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          {/* Cart Icon */}
          <Box>
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
                top="14px"
                right="14px"
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

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor} color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="widest"
                  _hover={{ color: 'orange.400' }}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header; 