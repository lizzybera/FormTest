import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/',  // Set this to '/' if you're deploying to the root domain or to '/your-project/' if it's a subpath.
  // build: {
  //   outDir: 'dist', // Ensure the output directory is set to 'dist' (default for Vite)
  // },
})
