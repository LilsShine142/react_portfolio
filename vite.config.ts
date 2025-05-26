import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react_portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          antd: ['antd'],
          icons: ['@ant-design/icons', 'react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  }
})