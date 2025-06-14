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
            bgImage={`url(/assets/home/desktop/image-hero.jpg)`}
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
            bgImage={`url(/assets/home/tablet/image-header.jpg)`}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
          />
          <Box
            display={{ base: "block", md: "none" }}
            height="100%"
            width="100%"
            bgImage={`url(/assets/home/mobile/image-header.jpg)`}
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
          <Stack
            maxW="xl"
            height="100%"
            justify="center"
            spacing={6}
          >
            <Text
              color="gray.400"
              textTransform="uppercase"
              letterSpacing="widest"
              fontSize="sm"
            >
              New Product
            </Text>
            <Heading
              as="h1"
              size="2xl"
              textTransform="uppercase"
              lineHeight="1.2"
            >
              XX99 Mark II Headphones
            </Heading>
            <Text
              color="gray.400"
              fontSize="lg"
              maxW="md"
            >
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </Text>
            <Button
              as={RouterLink}
              to="/product/xx99-mark-two-headphones"
              size="lg"
              colorScheme="orange"
              width="fit-content"
             
              
            >
              See Product
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Categories */}
      <Container maxW="container.xl" mb={16}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: 4, sm: 6, md: 8 }}
        >
          <CategoryCard
            title="Headphones"
            image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            link="/category/headphones"
          />
          <CategoryCard
            title="Speakers"
            image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            link="/category/speakers"
          />
          <CategoryCard
            title="Earphones"
            image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
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
                  bgImage="/assets/home/desktop/pattern-circles.svg"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="contain"
                />
                <Image
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  alt="ZX9 Speaker"
                  width={{ base: "100%", sm: "80%", md: "70%", lg: "60%" }}
                  maxW={{ base: "300px", sm: "350px", md: "400px", lg: "450px" }}
                  left={{ base: "0", sm: "10%", md: "15%", lg: "20%" }}
                  mt="auto"
                  position="relative"
                  top={{ base: "0px", sm: "0px", md: "10px", lg: "75px" }}
                />
              </Box>
              <Stack
                flex={1}
                spacing={6}
                color="white"
                align={{ base: 'center', md: 'start' }}
                textAlign={{ base: 'center', md: 'left' }}
                mt={{ base: 8, md: 0 }}
              >
                <Heading
                  as="h2"
                  size="2xl"
                  textTransform="uppercase"
                  lineHeight="1.2"
                >
                  ZX9 Speaker
                </Heading>
                <Text fontSize="lg" maxW="md">
                  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </Text>
                <Button
                  as={RouterLink}
                  to="/product/zx9-speaker"
                  
                  colorScheme="blackAlpha"
                  size="lg"
                  _hover={{ bg: 'whiteAlpha.400' }}
                  backgroundColor="black"
                  color="white"
                 
                >
                  See Product
                </Button>
              </Stack>
            </Flex>
          </Box>

          {/* ZX7 Speaker */}
          <Box
            position="relative"
            height={{ base: "320px", md: "400px" }}
            borderRadius="xl"
            overflow="hidden"
          >
            <Image
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="ZX7 Speaker"
              objectFit={{ base: "cover", sm: "cover", md: "cover", lg: "cover" }}
              width={{ base: "100%", sm: "90%", md: "100%", lg: "100%" }}
              height={{ base: "100%", sm: "90%", md: "100%", lg: "100%" }}
            />
            <Box
              position="absolute"
              top="50%"
              left={{ base: "5%", sm: "7%", md: "10%", lg: "10%" }}
              transform="translateY(-50%)"
            >
              <Stack spacing={6}>
                <Heading size={{base: "lg", sm: "lg", md: "lg", lg: "xl"}}>ZX7 SPEAKER</Heading>
                <Button
                  as={RouterLink}
                  to="/product/zx7-speaker"
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
                src="/assets/home/desktop/image-earphones-yx1.jpg"
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
                <Heading size={{base: "lg", sm: "lg", md: "lg", lg: "xl"}}>YX1 EARPHONES</Heading>
                <Button
                  as={RouterLink}
                  to="/product/yx1-earphones"
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
              src="/assets/shared/desktop/image-best-gear.jpg"
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