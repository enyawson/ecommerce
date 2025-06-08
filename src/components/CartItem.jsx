import React from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const bgColor = useColorModeValue('white', 'gray.800');

  const handleQuantityChange = (value) => {
    const quantity = parseInt(value);
    if (quantity > 0) {
      updateQuantity(item.id, quantity);
    }
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
      bg={bgColor}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      mb={4}
    >
      <Flex align="center" mb={{ base: 4, md: 0 }}>
        <Image
          src={item.image}
          alt={item.name}
          boxSize="100px"
          objectFit="cover"
          borderRadius="md"
          mr={4}
        />
        <Box>
          <Text fontSize="lg" fontWeight="semibold">
            {item.name}
          </Text>
          <Text color="blue.600" fontSize="lg">
            ${item.price.toFixed(2)}
          </Text>
        </Box>
      </Flex>

      <Flex align="center" gap={4}>
        <NumberInput
          size="sm"
          maxW={20}
          defaultValue={item.quantity}
          min={1}
          max={item.stock}
          onChange={handleQuantityChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <IconButton
          icon={<FiTrash2 />}
          colorScheme="red"
          variant="ghost"
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove item"
        />
      </Flex>
    </Flex>
  );
};

export default CartItem; 