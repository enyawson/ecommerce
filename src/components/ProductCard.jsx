import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Stack,
  Button,
  Link,
  useToast,
} from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const toast = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ shadow: 'lg' }}
      transition="all 0.3s"
    >
      <Link as={RouterLink} to={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          height="200px"
          width="100%"
          objectFit="cover"
        />
      </Link>

      <Box p={6}>
        <Stack spacing={3}>
          <Link
            as={RouterLink}
            to={`/products/${product.id}`}
            fontSize="xl"
            fontWeight="semibold"
            lineHeight="tight"
          >
            {product.name}
          </Link>

          <Text color="gray.600" fontSize="sm">
            {product.description}
          </Text>

          <Text color="blue.600" fontSize="2xl">
            ${product.price.toFixed(2)}
          </Text>

          <Button
            colorScheme="blue"
            onClick={handleAddToCart}
            isDisabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard; 