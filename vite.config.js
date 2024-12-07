import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/vite-deployment/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        about: resolve(__dirname, 'about.html'),
      }
    }
  },

  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 100,
      },
      jpeg: {
        quality: 100,
      },
      jpg: {
        quality: 100,
      },
      tiff: {
        quality: 100,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],
})
