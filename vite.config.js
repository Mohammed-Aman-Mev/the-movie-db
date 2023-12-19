import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "videoLink": {
        target: "https://www.youtube.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
// https://auth-backend-93eo.onrender.com