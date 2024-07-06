import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

    server:{
      proxy:{
        '/api':{
          target:"http://localhost:3000",
          secure:false,    //This setting tells Vite's dev server to ignore SSL certificate errors when making requests to `http
      },
    },
    },
  plugins: [react()],
})
