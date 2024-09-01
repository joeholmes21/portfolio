import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
    },
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.jpg'],
})
