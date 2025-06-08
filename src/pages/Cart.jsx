import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <Container maxW="container.xl" py={20}>
        <Stack spacing={6} align="center" textAlign="center">
          <Icon as={FiShoppingBag} w={12} h={12} color="gray.400" />
          <Heading size="lg">Your Cart is Empty</Heading>
          <Text color="gray.600">
            Looks like you haven't added any items to your cart yet.
          </Text>
          <Button
            as={RouterLink}
            to="/products"
            colorScheme="blue"
            size="lg"
          >
            Start Shopping
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Stack spacing={10}>
        <Box>
          <Heading size="xl" mb={2}>Shopping Cart</Heading>
          <Text color="gray.600">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          <Stack spacing={6}>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </Stack>

          <Box>
            <OrderSummary />
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Cart; 