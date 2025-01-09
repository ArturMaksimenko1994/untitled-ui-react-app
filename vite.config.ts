import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",

    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "./src/assets/styles/abstracts/index" as *;
        `,
      },
    },
  },
});
