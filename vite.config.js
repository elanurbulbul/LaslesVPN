import { defineConfig } from 'vite'
const path = require('path')


export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: "../../wwwroot/templates/template-1/",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
      },
      output: {
        assetFileNames: "wwwroot/[ext]/[name][extname]",
        chunkFileNames: "wwwroot/chunks/[name].js",
        entryFileNames: "wwwroot/chunks/[name].js",
      },
    },
  },
 
})