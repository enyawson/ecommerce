import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
  colors: {
    brand: {
      50: '#fff9f1',
      100: '#ffecd7',
      200: '#ffd4a8',
      300: '#ffb56e',
      400: '#ff8b2c',
      500: '#ff6b00',
      600: '#e65a00',
      700: '#cc4600',
      800: '#a63a00',
      900: '#802d00',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});

export default theme; 