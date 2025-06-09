import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  Image,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// Import hero images
import heroDesktop from '../assets/home/desktop/image-hero.jpg';
import heroTablet from '../assets/home/tablet/image-header.jpg';
import heroMobile from '../assets/home/mobile/image-header.jpg';

const CategoryCard = ({ title, image, link }) => (
  <Box
    as={RouterLink}
    to={link}
    bg={useColorModeValue('gray.100', 'gray.700')}
    borderRadius="lg"
    overflow="visible"
    transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    boxShadow={{ base: 'sm', md: 'md' }}
    _hover={{ 
      transform: 'scale(1.05)',
      boxShadow: 'lg'
    }}
    position="relative"
    mt="75px"
  >
    <Box
      position="absolute"
      top={{ base: "-50px", sm: "-60px", md: "-70px", lg: "-80px" }}
      left="50%"
      transform="translateX(-50%)"
      width={{ base: "120px", sm: "140px", md: "160px", lg: "180px" }}
      height={{ base: "120px", sm: "140px", md: "160px", lg: "180px" }}
    >
      <Image
        src={image}
        alt={title}
        width={{ base: "120px", md: "150px", lg: "200px" }}
        height={{ base: "120px", md: "150px", lg: "200px" }}
        objectFit="contain"
      />
    </Box>
    <Stack spacing={4} pt="75px" pb={6} px={6} align="center">
      <Text 
        fontSize={{ base: "lg", sm: "xl", md: "2xl" }} 
        fontWeight="bold" 
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Button
        variant="link"
        colorScheme="orange"
        rightIcon={<ChevronRightIcon h={5} w={5} />}
      >
        SHOP
      </Button>
    </Stack>
  </Box>
);

const Home = () => {
  const bgOverlay = useColorModeValue('blackAlpha.800', 'blackAlpha.900');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="#191919"
        color="white"
        position="relative"
        height={{ base: "600px", md: "700px", lg: "800px" }}
        mb={16}
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={0}
          bg="linear-gradient(to right, #191919 10%, transparent 100%)"
        >
          <Box
            display={{ base: "none", lg: "block" }}
            height="100%"
            width="100%"
            bgImage={`url(${heroDesktop})`}
            bgPosition="right center"
            bgSize="contain"
            bgRepeat="no-repeat"
            sx={{
              mixBlendMode: "normal"
            }}
          />
          <Box
            display={{ base: "none", md: "block", lg: "none" }}
            height="100%"
            width="100%"
            bgImage={`url(${heroTablet})`}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
          />
          <Box
            display={{ base: "block", md: "none" }}
            height="100%"
            width="100%"
            bgImage={`url(${heroMobile})`}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
          />
        </Box>
        
        <Container 
          maxW="container.xl" 
          height="100%" 
          position="relative"
          px={{ base: 4, lg: 8 }}
        >
          <Flex
            height="100%"
            alignItems="center"
            position="relative"
          >
            {/* Text Content */}
            <Stack 
              maxW={{ base: "100%", md: "60%", lg: "40%" }} 
              spacing={6}
              zIndex={2}
              pr={{ base: 0, md: 4 }}
            >
              <Text
                color="gray.400"
                letterSpacing="0.5em"
                textTransform="uppercase"
                fontSize="sm"
              >
                New Product
              </Text>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl" }}
                textTransform="uppercase"
                letterSpacing="wider"
                lineHeight="1.2"
              >
                XX99 Mark II
                <Text as="span" display="block">
                  Headphones
                </Text>
              </Heading>
              <Text 
                fontSize={{ base: "md", md: "lg" }} 
                color="gray.400" 
                maxW="md"
                lineHeight="1.75"
              >
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </Text>
              <Button
                as={RouterLink}
                to="/products/xx99-mark-two-headphones"
                size="lg"
                colorScheme="orange"
                width="fit-content"
                mt={4}
                px={8}
              >
                SEE PRODUCT
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxW="container.xl" mb={16}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: 4, sm: 6, md: 8 }}
        >
          <CategoryCard
            title="Headphones"
            image="/src/assets/shared/desktop/image-category-thumbnail-headphones.png"
            link="/category/headphones"
          />
          <CategoryCard
            title="Speakers"
            image="/src/assets/shared/desktop/image-category-thumbnail-speakers.png"
            link="/category/speakers"
          />
          <CategoryCard
            title="Earphones"
            image="/src/assets/shared/desktop/image-category-thumbnail-earphones.png"
            link="/category/earphones"
          />
        </Grid>
      </Container>

      {/* Featured Products */}
      <Container maxW="container.xl" mb={16}>
        <Stack spacing={8}>
          {/* ZX9 Speaker */}
          <Box
            bg="orange.400"
            borderRadius="xl"
            overflow="hidden"
            py={16}
            px={8}
            position="relative"
          >
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="space-between"
            >
              <Box flex={1} position="relative">
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="150%"
                  height="150%"
                  bgImage="/src/assets/home/desktop/pattern-circles.svg"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="contain"
                 
                />
                <Image
                  src="/src/assets/home/desktop/image-speaker-zx9.png"
                  alt="ZX9 Speaker"
                  width="100%"
                  maxW="400px"
                  mt="auto"
                  position="relative"
                  top={{ base: "50px", sm: "60px", md: "70px", lg: "80px" }}
                />
              </Box>
              <Stack flex={1} spacing={6} color="white" pl={{ md: 8 }}>
                <Heading size="2xl">ZX9 SPEAKER</Heading>
                <Text fontSize="lg">
                  Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity.
                </Text>
                <Button
                  as={RouterLink}
                  to="/products/zx9-speaker"
                  variant="outline"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  width="fit-content"
                >
                  SEE PRODUCT
                </Button>
              </Stack>
            </Flex>
          </Box>

          {/* ZX7 Speaker */}
          <Box
            bg="gray.100"
            borderRadius="xl"
            overflow="hidden"
            position="relative"
            height="320px"
          >
            <Image
              src="/src/assets/product-zx7-speaker/desktop/image-product.jpg"
              alt="ZX7 Speaker"
              objectFit="cover"
              width="100%"
              height="100%"
            />
            <Box
              position="absolute"
              top="50%"
              left={8}
              transform="translateY(-50%)"
            >
              <Stack spacing={6}>
                <Heading size="xl">ZX7 SPEAKER</Heading>
                <Button
                  as={RouterLink}
                  to="/products/zx7-speaker"
                  variant="outline"
                  colorScheme="black"
                  width="fit-content"
                >
                  SEE PRODUCT
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* YX1 Earphones */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
            <Box
              borderRadius="xl"
              overflow="hidden"
              height="320px"
            >
              <Image
                src="/src/assets/product-yx1-earphones/desktop/image-product.jpg"
                alt="YX1 Earphones"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
            <Box
              bg="gray.100"
              borderRadius="xl"
              p={8}
              display="flex"
              alignItems="center"
            >
              <Stack spacing={6}>
                <Heading size="xl">YX1 EARPHONES</Heading>
                <Button
                  as={RouterLink}
                  to="/products/yx1-earphones"
                  variant="outline"
                  colorScheme="black"
                  width="fit-content"
                >
                  SEE PRODUCT
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Stack>
      </Container>

      {/* About Section */}
      <Container maxW="container.xl" py={20}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={12}>
          <Stack spacing={6} justifyContent="center">
            <Heading size="xl">YOU THE GEAR</Heading>
            <Text color="gray.600" fontSize="lg">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of our highly knowledgeable team members who will help you with all your audio needs.
            </Text>
          </Stack>
          <Box>
            <Image
              src="/src/assets/shared/desktop/image-best-gear.jpg"
              alt="Best audio gear"
              borderRadius="xl"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 