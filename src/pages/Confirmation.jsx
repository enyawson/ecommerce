import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';

const Confirmation = () => {
  const bgColor = useColorModeValue('green.50', 'green.900');
  const iconColor = useColorModeValue('green.500', 'green.200');

  return (
    <Container maxW="container.xl" py={20}>
      <Stack spacing={8} align="center" textAlign="center">
        <Box
          p={8}
          bg={bgColor}
          borderRadius="full"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FiCheckCircle} w={12} h={12} color={iconColor} />
        </Box>

        <Stack spacing={3}>
          <Heading size="xl">Order Confirmed!</Heading>
          <Text fontSize="lg" color="gray.600">
            Thank you for your purchase. We'll send you a confirmation email with your order details.
          </Text>
        </Stack>

        <Text fontSize="md" color="gray.600">
          Order number: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </Text>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={8}>
          <Button
            as={RouterLink}
            to="/"
            size="lg"
            colorScheme="blue"
          >
            Back to Home
          </Button>
          <Button
            as={RouterLink}
            to="/products"
            size="lg"
            variant="outline"
          >
            Continue Shopping
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Confirmation; 