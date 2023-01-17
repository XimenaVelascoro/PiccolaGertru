import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//con el port lo que hace es que corra en el navegador
export default defineConfig({
  server:{
    port: 3000, 
  },
  plugins: [react()],
})
