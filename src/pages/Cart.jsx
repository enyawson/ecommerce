import React from 'react';
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
        src={item.image.desktop.replace('./', '/src/')}
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
        onChange={(_, value) => updateQuantity(item.id, value)}
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
  const { items, getTotal, clearCart } = useCartStore();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const total = getTotal();

  if (items.length === 0) {
    return (
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="center">
          <Heading>Your Cart is Empty</Heading>
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