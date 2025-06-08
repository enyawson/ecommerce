import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Divider,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderSummary = ({ showCheckoutButton = true }) => {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  const shipping = 5.99;
  const tax = cartTotal * 0.1; // 10% tax
  const total = cartTotal + shipping + tax;

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      bg={bgColor}
      width="100%"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          Order Summary
        </Text>

        <HStack justify="space-between">
          <Text>Subtotal ({cart.length} items)</Text>
          <Text>${cartTotal.toFixed(2)}</Text>
        </HStack>

        <HStack justify="space-between">
          <Text>Shipping</Text>
          <Text>${shipping.toFixed(2)}</Text>
        </HStack>

        <HStack justify="space-between">
          <Text>Estimated Tax</Text>
          <Text>${tax.toFixed(2)}</Text>
        </HStack>

        <Divider />

        <HStack justify="space-between" fontWeight="bold">
          <Text>Total</Text>
          <Text fontSize="xl">${total.toFixed(2)}</Text>
        </HStack>

        {showCheckoutButton && (
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            onClick={() => navigate('/checkout')}
            isDisabled={cart.length === 0}
          >
            Proceed to Checkout
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default OrderSummary; 