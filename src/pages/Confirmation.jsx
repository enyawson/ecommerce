import React, { useEffect, useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Grid,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Confirmation = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    const orderData = localStorage.getItem('lastOrder');
    if (!orderData) {
      navigate('/');
      return;
    }
    setOrder(JSON.parse(orderData));
  }, [navigate]);

  if (!order) return null;

  const firstItem = order.items[0];
  const otherItemsCount = order.items.length - 1;

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh" py={20}>
      <Container maxW="container.md">
        <VStack
          bg={bgColor}
          p={8}
          borderRadius="lg"
          shadow="md"
          spacing={8}
          align="stretch"
        >
          <Icon
            as={CheckCircleIcon}
            w={16}
            h={16}
            color="orange.400"
          />
          
          <Box>
            <Heading size="lg" mb={4}>
              THANK YOU FOR YOUR ORDER
            </Heading>
            <Text color="gray.500">
              You will receive an email confirmation shortly.
            </Text>
          </Box>

          <Grid
            templateColumns={{ base: '1fr', md: '2fr 1fr' }}
            gap={6}
            bg={useColorModeValue('gray.50', 'gray.700')}
            borderRadius="lg"
            overflow="hidden"
          >
            {/* Order Items */}
            <Box p={6} borderBottom={{ base: '1px', md: 'none' }} borderRight={{ md: '1px' }} borderColor={borderColor}>
              <Grid templateColumns="auto 1fr auto" gap={4} alignItems="center">
                <Box
                  w="64px"
                  h="64px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <img
                    src={firstItem.image.desktop}
                    alt={firstItem.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold">{firstItem.name}</Text>
                  <Text color="gray.500">$ {firstItem.price.toLocaleString()}</Text>
                </Box>
                <Text>x{firstItem.quantity}</Text>
              </Grid>

              {otherItemsCount > 0 && (
                <Text
                  mt={4}
                  pt={4}
                  borderTop="1px"
                  borderColor={borderColor}
                  textAlign="center"
                  color="gray.500"
                >
                  and {otherItemsCount} other item{otherItemsCount > 1 ? 's' : ''}
                </Text>
              )}
            </Box>

            {/* Order Total */}
            <Box p={6} bg={useColorModeValue('black', 'gray.800')} color="white">
              <Text color="gray.400" mb={2}>GRAND TOTAL</Text>
              <Text fontSize="2xl" fontWeight="bold">
                $ {order.total.toLocaleString()}
              </Text>
            </Box>
          </Grid>

          <Button
            as={RouterLink}
            to="/"
            colorScheme="orange"
            size="lg"
            w="100%"
          >
            BACK TO HOME
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Confirmation; 