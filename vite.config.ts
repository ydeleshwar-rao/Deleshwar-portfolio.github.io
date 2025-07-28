import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Deleshwar-portfolio.github.io/",
  plugins: [react()],
  server: {
    allowedHosts: [
      "give-locations-israeli-dishes.trycloudflare.com"
    ]
  }
})
//  