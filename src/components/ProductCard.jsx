import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Button,
  Stack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const ProductCard = ({ product, isReversed = false }) => {
  const { name, description, image, new: isNew, slug } = product;

  return (
    <Stack
      direction={{ base: 'column', lg: isReversed ? 'row-reverse' : 'row' }}
      spacing={{ base: 8, lg: 16 }}
      align="center"
      justify="space-between"
      w="100%"
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="xl"
      overflow="hidden"
      p={{ base: 6, md: 8, lg: 12 }}
      shadow="md"
      _hover={{ shadow: 'lg' }}
      transition="all 0.3s"
    >
      <Box 
        flex="1"
        position="relative"
        borderRadius="xl"
        overflow="hidden"
      >
        <Image
          src={image.desktop.replace('./', '/src/')}
          alt={name}
          w="100%"
          h="auto"
          objectFit="cover"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: 'scale(1.15)' }}
        />
      </Box>

      <Stack 
        flex="1" 
        spacing={6}
        align={{ base: 'center', lg: 'start' }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        {isNew && (
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
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          textTransform="uppercase"
          letterSpacing="wider"
          lineHeight="1.2"
        >
          {name}
        </Heading>

        <Text
          color={useColorModeValue('gray.600', 'gray.300')}
          fontSize={{ base: "md", lg: "lg" }}
          lineHeight="tall"
        >
          {description}
        </Text>

        <Button
          as={RouterLink}
          to={`/product/${slug}`}
          size="lg"
          colorScheme="orange"
          width="fit-content"
          px={8}
          textTransform="uppercase"
          fontWeight="bold"
        >
          See Product
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductCard; 