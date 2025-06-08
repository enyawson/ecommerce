import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Badge,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { addToCart } = useCart();

  const product = productsData.products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container maxW="container.xl" py={8}>
        <Stack spacing={4} align="center">
          <Heading>Product Not Found</Heading>
          <Button
            leftIcon={<FiArrowLeft />}
            onClick={() => navigate('/products')}
          >
            Back to Products
          </Button>
        </Stack>
      </Container>
    );
  }

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
    <Container maxW="container.xl" py={8}>
      <Button
        leftIcon={<FiArrowLeft />}
        variant="ghost"
        mb={8}
        onClick={() => navigate('/products')}
      >
        Back to Products
      </Button>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Image
            src={product.image}
            alt={product.name}
            borderRadius="lg"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </Box>

        <Stack spacing={6}>
          <Box>
            <Heading size="xl" mb={2}>
              {product.name}
            </Heading>
            <Badge colorScheme="blue" fontSize="md">
              {product.category}
            </Badge>
          </Box>

          <Text fontSize="2xl" color="blue.600" fontWeight="bold">
            ${product.price.toFixed(2)}
          </Text>

          <Text fontSize="lg" color="gray.600">
            {product.description}
          </Text>

          <Box>
            <Text fontSize="md" mb={2}>
              Stock: {product.stock} units
            </Text>
            <Button
              size="lg"
              colorScheme="blue"
              leftIcon={<Icon as={FiShoppingCart} />}
              onClick={handleAddToCart}
              isDisabled={product.stock === 0}
              width={{ base: 'full', md: 'auto' }}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductDetail; 