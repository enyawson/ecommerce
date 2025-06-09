import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  FormErrorMessage,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '../schemas/checkoutSchema';
import useCartStore from '../store/cartStore';

const Checkout = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'e-money',
    },
  });

  const paymentMethod = watch('paymentMethod');

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = subtotal * 0.2;
  const total = subtotal + shipping + vat;

  const onSubmit = (data) => {
    // Save order details for confirmation page
    const orderDetails = {
      ...data,
      items,
      subtotal,
      shipping,
      vat,
      total,
      orderNumber: Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
    };
    
    // Store order details in localStorage
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
    
    // Clear cart
    clearCart();
    
    // Navigate to confirmation page
    navigate('/confirmation');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={8}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          {/* Checkout Form */}
          <Box
            bg={bgColor}
            p={8}
            borderRadius="lg"
            shadow="sm"
          >
            <Heading size="lg" mb={6}>CHECKOUT</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Billing Details */}
              <VStack spacing={6} align="stretch" mb={8}>
                <Heading size="md" color="orange.400">BILLING DETAILS</Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={errors.name}>
                    <FormLabel>Name</FormLabel>
                    <Input {...register('name')} />
                    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.email}>
                    <FormLabel>Email Address</FormLabel>
                    <Input {...register('email')} type="email" />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.phone}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input {...register('phone')} />
                    <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                  </FormControl>
                </Grid>
              </VStack>

              {/* Shipping Info */}
              <VStack spacing={6} align="stretch" mb={8}>
                <Heading size="md" color="orange.400">SHIPPING INFO</Heading>
                <FormControl isInvalid={errors.address}>
                  <FormLabel>Address</FormLabel>
                  <Input {...register('address')} />
                  <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
                </FormControl>

                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={errors.city}>
                    <FormLabel>City</FormLabel>
                    <Input {...register('city')} />
                    <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.state}>
                    <FormLabel>State</FormLabel>
                    <Input {...register('state')} />
                    <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.zipCode}>
                    <FormLabel>ZIP Code</FormLabel>
                    <Input {...register('zipCode')} />
                    <FormErrorMessage>{errors.zipCode?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.country}>
                    <FormLabel>Country</FormLabel>
                    <Input {...register('country')} />
                    <FormErrorMessage>{errors.country?.message}</FormErrorMessage>
                  </FormControl>
                </Grid>
              </VStack>

              {/* Payment Details */}
              <VStack spacing={6} align="stretch" mb={8}>
                <Heading size="md" color="orange.400">PAYMENT DETAILS</Heading>
                <FormControl isInvalid={errors.paymentMethod}>
                  <FormLabel>Payment Method</FormLabel>
                  <RadioGroup defaultValue="e-money">
                    <VStack align="stretch" spacing={3}>
                      <Radio {...register('paymentMethod')} value="e-money">
                        e-Money
                      </Radio>
                      <Radio {...register('paymentMethod')} value="cash">
                        Cash on Delivery
                      </Radio>
                    </VStack>
                  </RadioGroup>
                  <FormErrorMessage>{errors.paymentMethod?.message}</FormErrorMessage>
                </FormControl>

                {paymentMethod === 'e-money' && (
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                    <FormControl isInvalid={errors.eMoneyNumber}>
                      <FormLabel>e-Money Number</FormLabel>
                      <Input {...register('eMoneyNumber')} />
                      <FormErrorMessage>{errors.eMoneyNumber?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.eMoneyPin}>
                      <FormLabel>e-Money PIN</FormLabel>
                      <Input {...register('eMoneyPin')} type="password" />
                      <FormErrorMessage>{errors.eMoneyPin?.message}</FormErrorMessage>
                    </FormControl>
                  </Grid>
                )}
              </VStack>
            </form>
          </Box>

          {/* Summary */}
          <Box
            bg={bgColor}
            p={8}
            borderRadius="lg"
            shadow="sm"
            height="fit-content"
          >
            <Heading size="lg" mb={6}>SUMMARY</Heading>
            <VStack spacing={4} align="stretch">
              {items.map((item) => (
                <Grid key={item.id} templateColumns="auto 1fr auto" gap={4} alignItems="center">
                  <Box
                    w="64px"
                    h="64px"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <img
                      src={item.image.desktop}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Box>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text color="gray.500">$ {item.price.toLocaleString()}</Text>
                  </Box>
                  <Text>x{item.quantity}</Text>
                </Grid>
              ))}

              <Box pt={6} borderTop="1px" borderColor={borderColor}>
                <Grid templateColumns="1fr auto" gap={2}>
                  <Text color="gray.500">SUBTOTAL</Text>
                  <Text fontWeight="bold">$ {subtotal.toLocaleString()}</Text>

                  <Text color="gray.500">SHIPPING</Text>
                  <Text fontWeight="bold">$ {shipping.toLocaleString()}</Text>

                  <Text color="gray.500">VAT (20%)</Text>
                  <Text fontWeight="bold">$ {vat.toLocaleString()}</Text>

                  <Text color="gray.500" fontSize="lg" pt={4}>TOTAL</Text>
                  <Text fontWeight="bold" fontSize="lg" color="orange.400" pt={4}>
                    $ {total.toLocaleString()}
                  </Text>
                </Grid>
              </Box>

              <Button
                colorScheme="orange"
                size="lg"
                w="100%"
                mt={4}
                onClick={handleSubmit(onSubmit)}
              >
                CONTINUE & PAY
              </Button>
            </VStack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout; 