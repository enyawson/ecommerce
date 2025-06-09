import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Flex,
  useColorModeValue,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react';
import productsData from '../data/products.json';
import useCartStore from '../store/cartStore';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const toast = useToast();

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleQuantityChange = (valueString) => {
    const value = parseInt(valueString, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      quantity: quantity
    };
    addItem(itemToAdd);
    
    toast({
      title: 'Added to cart',
      description: `${quantity} x ${product.name} added to your cart`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const handleSeeProduct = (productSlug) => {
    navigate(`/product/${productSlug}`);
  };

  if (!product) {
    return (
      <Container maxW="container.xl" py={20}>
        <Text>Product not found.</Text>
      </Container>
    );
  }

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      <Container maxW="container.xl" py={8}>
        {/* Back Button */}
        <Button
          as={RouterLink}
          to={`/category/${product.category}`}
          variant="link"
          color={textColor}
          mb={8}
          leftIcon={<Text>←</Text>}
        >
          Go Back
        </Button>

        {/* Product Main Info */}
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={12}
          mb={16}
        >
          <Box
            bg={bgColor}
            borderRadius="xl"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={product.image.desktop}
              alt={product.name}
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </Box>

          <Stack spacing={6} justify="center">
            {product.new && (
              <Text
                color="orange.400"
                textTransform="uppercase"
                letterSpacing="wide"
                fontSize="sm"
                fontWeight="semibold"
              >
                New Product
              </Text>
            )}
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              textTransform="uppercase"
              letterSpacing="wider"
              lineHeight="1.2"
            >
              {product.name}
            </Heading>
            <Text
              color={textColor}
              fontSize={{ base: "md", lg: "lg" }}
              lineHeight="tall"
            >
              {product.description}
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color={useColorModeValue('black', 'white')}
            >
              $ {product.price.toLocaleString()}
            </Text>

            {/* Add to Cart Section */}
            <HStack spacing={4}>
              <NumberInput
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
                max={10}
                w="120px"
                size="lg"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                colorScheme="orange"
                width="200px"
                size="lg"
                onClick={() => {
                  handleAddToCart();
                  setQuantity(1);
                }}
              >
                ADD TO CART
              </Button>
            </HStack>
          </Stack>
        </Grid>

        {/* Features and In the Box */}
        <Grid
          templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
          gap={12}
          mb={16}
        >
          <Box>
            <Heading
              as="h2"
              size="lg"
              mb={6}
              textTransform="uppercase"
            >
              Features
            </Heading>
            <Text
              color={textColor}
              whiteSpace="pre-line"
              fontSize="lg"
              lineHeight="tall"
            >
              {product.features}
            </Text>
          </Box>

          <Box>
            <Heading
              as="h2"
              size="lg"
              mb={6}
              textTransform="uppercase"
            >
              In The Box
            </Heading>
            <List spacing={4}>
              {product.includes.map((item, index) => (
                <ListItem key={index} color={textColor}>
                  <Text as="span" color="orange.400" fontWeight="bold" mr={4}>
                    {item.quantity}x
                  </Text>
                  {item.item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Gallery */}
        <Grid
          templateColumns={{ base: '1fr', md: '40% 1fr' }}
          gap={4}
          mb={16}
        >
          <Stack spacing={4}>
            <Image
              src={product.gallery.first.desktop}
              alt={`${product.name} gallery 1`}
              borderRadius="xl"
            />
            <Image
              src={product.gallery.second.desktop}
              alt={`${product.name} gallery 2`}
              borderRadius="xl"
            />
          </Stack>
          <Box>
            <Image
              src={product.gallery.third.desktop}
              alt={`${product.name} gallery 3`}
              borderRadius="xl"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Grid>

        {/* You May Also Like */}
        <Box mb={16}>
          <Heading
            as="h2"
            size="lg"
            mb={8}
            textAlign="center"
            textTransform="uppercase"
          >
            You May Also Like
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {product.others.map((item) => (
              <Stack
                key={item.slug}
                bg={bgColor}
                borderRadius="xl"
                overflow="hidden"
                align="center"
                spacing={6}
                p={6}
              >
                <Box
                  borderRadius="xl"
                  overflow="hidden"
                  w="100%"
                  h="300px"
                >
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
                <Heading
                  as="h3"
                  size="md"
                  textTransform="uppercase"
                  textAlign="center"
                >
                  {item.name}
                </Heading>
                <Button
                  onClick={() => handleSeeProduct(item.slug)}
                  colorScheme="orange"
                >
                  See Product
                </Button>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail; 