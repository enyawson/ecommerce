import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Flex,
  Grid,
  IconButton,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import useCartStore from '../store/cartStore';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();
  const bgColor = useColorModeValue('white', 'gray.800');

  const handleQuantityChange = (valueString) => {
    const value = parseInt(valueString, 10);
    if (!isNaN(value) && value > 0) {
      updateQuantity(item.id, value);
    }
  };

  return (
    <Grid
      templateColumns={{ base: '1fr', md: '120px 1fr auto auto' }}
      gap={4}
      p={4}
      bg={bgColor}
      borderRadius="lg"
      alignItems="center"
    >
      <Image
        src={item.image.desktop}
        alt={item.name}
        borderRadius="md"
        objectFit="cover"
        w="120px"
        h="120px"
      />
      
      <Box>
        <Text
          fontSize="lg"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {item.name}
        </Text>
        <Text
          color={useColorModeValue('gray.600', 'gray.300')}
          fontSize="lg"
        >
          $ {item.price.toLocaleString()}
        </Text>
      </Box>

      <NumberInput
        value={item.quantity}
        onChange={handleQuantityChange}
        min={1}
        max={10}
        w="120px"
        size="md"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <IconButton
        aria-label="Remove item"
        icon={<CloseIcon />}
        onClick={() => removeItem(item.id)}
        variant="ghost"
        colorScheme="red"
      />
    </Grid>
  );
};

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg">SHOPPING CART ({items.length})</Heading>
          {items.length > 0 && (
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={clearCart}
            >
              Remove all
            </Button>
          )}
        </Flex>

        {items.length === 0 ? (
          <Box textAlign="center" py={12}>
            <Text fontSize="lg" mb={6}>Your cart is empty</Text>
            <Button
              as={RouterLink}
              to="/"
              colorScheme="orange"
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <VStack spacing={4} align="stretch">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            
            <Box
              borderTop="2px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              pt={6}
              mt={6}
            >
              <Flex justify="space-between" mb={4}>
                <Text fontSize="lg">TOTAL</Text>
                <Text fontSize="lg" fontWeight="bold">
                  $ {total.toLocaleString()}
                </Text>
              </Flex>
              
              <Button
                as={RouterLink}
                to="/checkout"
                colorScheme="orange"
                size="lg"
                width="100%"
              >
                CHECKOUT
              </Button>
            </Box>
          </VStack>
        )}
      </Container>
    </Box>
  );
};

export default Cart; 