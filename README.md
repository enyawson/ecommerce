# Audiophile E-commerce Website

A modern e-commerce website for high-end audio equipment built with React, Vite, and Chakra UI.

## Features

- Modern and responsive design
- Product catalog with categories (Headphones, Speakers, Earphones)
- Shopping cart functionality with Zustand state management
- Product details with image galleries
- Checkout process
- Mobile-first approach

## Tech Stack

- React 18.2.0
- Vite 5.0.8
- Chakra UI 2.8.2
- React Router DOM 6.22.0
- Zustand 4.5.0
- React Icons 5.0.1

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/enyawson/ecommerce.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will start running at `http://localhost:5173`

### Build

To build the project for production:

```bash
npm run build
```

## Project Structure

```
ecommerce/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── store/          # Zustand store
│   ├── data/           # JSON data files
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── public/             # Public assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from [Frontend Mentor](https://www.frontendmentor.io/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) 