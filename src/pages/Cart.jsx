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

  // Handle image path
  const imagePath = item.image?.desktop;
  const finalImagePath = imagePath || '/placeholder.jpg';

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
        src={finalImagePath}
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
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);
  
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const total = getTotal();

  useEffect(() => {
    console.log('Cart items:', items);
  }, [items]);

  if (!items || items.length === 0) {
    return (
      <Box bg={bgColor} minH="100vh" py={8}>
        <Container maxW="container.xl" py={20}>
          <VStack spacing={8} align="center">
            <Heading>Your Cart is Empty</Heading>
            <Text color="gray.500">Add some items to your cart to see them here.</Text>
            <Button
              as={RouterLink}
              to="/"
              colorScheme="orange"
              size="lg"
            >
              Continue Shopping
            </Button>
          </VStack>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="xl">Shopping Cart</Heading>
          <Button
            variant="ghost"
            colorScheme="red"
            onClick={clearCart}
          >
            Remove All
          </Button>
        </Flex>

        <Grid templateColumns="1fr" gap={4} mb={8}>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Grid>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'stretch', md: 'center' }}
          gap={4}
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          borderRadius="lg"
          shadow="sm"
        >
          <Box>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              TOTAL
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              $ {total.toLocaleString()}
            </Text>
          </Box>
          
          <HStack spacing={4}>
            <Button
              as={RouterLink}
              to="/"
              variant="outline"
            >
              Continue Shopping
            </Button>
            <Button
              as={RouterLink}
              to="/checkout"
              colorScheme="orange"
              size="lg"
            >
              Checkout
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Cart; 