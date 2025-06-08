import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = useMemo(() => {
    const cats = new Set(productsData.products.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  return (
    <Container maxW="container.xl" py={8}>
      <Stack spacing={8}>
        <Stack spacing={3}>
          <Heading size="xl">Our Products</Heading>
          <Text color="gray.600">
            Browse through our collection of quality products
          </Text>
        </Stack>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
        >
          <InputGroup maxW={{ base: 'full', md: '400px' }}>
            <InputLeftElement pointerEvents="none">
              <FiSearch color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>

          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            maxW={{ base: 'full', md: '200px' }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </Select>
        </Stack>

        {filteredProducts.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Text fontSize="lg">
              No products found matching your criteria.
            </Text>
          </Box>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Container>
  );
};

export default Products; 