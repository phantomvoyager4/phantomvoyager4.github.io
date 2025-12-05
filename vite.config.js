import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      // Enable Fast Refresh for better development experience
      fastRefresh: true,
      // Include .jsx files
      include: "**/*.{jsx,tsx}",
    }),
  ],
  base: "/",

  // Development server configuration
  server: {
    port: process.env.VITE_DEV_PORT || 3000,
    host: process.env.VITE_DEV_HOST || "localhost",
    open: true, // Automatically open browser
    cors: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },

  // Build optimizations
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          animations: ["framer-motion"],
          utils: ["react-intersection-observer"],
        },
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    chunkSizeWarningLimit: 1000, // Warn for chunks larger than 1MB
  },

  // Path resolution
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/Components"),
      "@pages": resolve(__dirname, "src/Pages"),
      "@assets": resolve(__dirname, "src/Components/assets"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@hooks": resolve(__dirname, "src/hooks"),
    },
  },

  // Performance optimizations
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "react-intersection-observer",
    ],
  },

  // Environment variables prefix
  envPrefix: "VITE_",

  // CSS options
  css: {
    devSourcemap: true, // Enable CSS source maps in development
  },

  // Preview server configuration (for production preview)
  preview: {
    port: 4173,
    host: "localhost",
    open: true,
  },
});
