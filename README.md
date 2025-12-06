# Kashiami - Artist Portfolio Website

[Visit Website](https://phantomvoyager4.github.io/)

## Table of Contents

- [About This Project](#about-this-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Design](#design)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
  - [Other Available Commands](#other-available-commands)
- [Contributing](#contributing)
  - [How to Contribute](#how-to-contribute)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## About This Project

This is a modern, interactive artist portfolio website showcasing music, projects, and connecting with fans. The site features a responsive design, smooth animations, dark/light theme support, and direct links to streaming platforms and social media.

### Key Features

- **Interactive Card Carousel**: Browse artist projects and profiles with animated transitions
- **Song & Playlist Showcase**: Display music collections with responsive grid layout
- **Dark/Light Theme**: Seamless theme switching with smooth transitions
- **Fixed Navigation**: Quick access menu with burger navigation and theme toggle
- **Contact Form**: Allow fans to reach out directly
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion-powered interactions throughout

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router v7
- **Deployment**: GitHub Pages

## Design

The website design was prototyped in Figma. Check out the [design project](https://www.figma.com/design/GCalluILfhXBotMseiZdqB/kashiamiwebpage?node-id=0-1&t=AUKE3qBUR4SqC8jR-1).

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phantomvoyager4/phantomvoyager4.github.io.git
cd kashiami
```

2. Install dependencies:
```bash
npm install
```

### Running Locally

Start the development server with hot module reloading:

```bash
npm run dev
```

The website will be available at port displayed in terminal.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Other Available Commands

- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Automatically fix linting issues
- `npm run format` - Format code with Prettier
- `npm run deploy` - Build and deploy to GitHub Pages

## Contributing

Contributions are welcomed! Whether it's bug fixes, feature improvements, design suggestions, or new components, your help is appreciated.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add your feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

Please ensure your code follows the project's style guide and includes appropriate comments.

## Project Structure

```
src/
├── Components/          # Reusable React components
│   ├── Header.jsx      # Top navigation
│   ├── Navbar.jsx      # Slide-in menu
│   ├── Card.jsx        # Project carousel
│   ├── Songsdisplay.jsx # Song grid
│   └── ...
├── Pages/              # Page-level components
│   ├── home.jsx        # Home page
│   └── zaboutme.jsx    # About page
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## License

This project is open source. Feel free to use it as inspiration for your own projects.

## Contact

- Email: obywatelnumer04230@gmail.com
- Linktree: [linktr.ee/kashiami](https://linktr.ee/kashiami)

---


