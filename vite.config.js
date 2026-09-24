import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Pet_Adoption_Platform/',
  plugins: [react()],
})