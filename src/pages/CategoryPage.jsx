import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const CategoryPage = () => {
  const { category } = useParams();
  const products = productsData.filter(
    (product) => product.category === category
  );

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headerBg = useColorModeValue('black', 'gray.800');

  return (
    <Box>
      {/* Category Header */}
      <Box bg={headerBg} color="white" py={{ base: 16, md: 24 }} mb={16}>
        <Container maxW="container.xl" textAlign="center">
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {category}
          </Heading>
        </Container>
      </Box>

      {/* Products List */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={16}>
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                isReversed={index % 2 !== 0}
              />
            ))
          ) : (
            <Text fontSize="lg" color="gray.600">
              No products found in this category.
            </Text>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default CategoryPage; 