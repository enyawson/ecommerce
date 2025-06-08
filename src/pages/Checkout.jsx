import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { cart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    clearCart();
    setIsSubmitting(false);
    navigate('/confirmation');
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Stack spacing={10}>
        <Heading size="xl">Checkout</Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={8}>
              {/* Shipping Information */}
              <Box>
                <Heading size="md" mb={4}>Shipping Information</Heading>
                <Stack spacing={4}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </SimpleGrid>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>City</FormLabel>
                      <Input type="text" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>State</FormLabel>
                      <Select placeholder="Select state">
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                        {/* Add more states */}
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>ZIP Code</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
              </Box>

              {/* Payment Information */}
              <Box>
                <Heading size="md" mb={4}>Payment Information</Heading>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Card Number</FormLabel>
                    <Input type="text" placeholder="1234 5678 9012 3456" />
                  </FormControl>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Expiration Month</FormLabel>
                      <Select placeholder="Month">
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Expiration Year</FormLabel>
                      <Select placeholder="Year">
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i} value={new Date().getFullYear() + i}>
                            {new Date().getFullYear() + i}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>CVV</FormLabel>
                      <Input type="text" placeholder="123" maxLength={4} />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
              </Box>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                isLoading={isSubmitting}
                loadingText="Processing"
              >
                Place Order
              </Button>
            </Stack>
          </form>

          <Box>
            <OrderSummary showCheckoutButton={false} />
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Checkout; 