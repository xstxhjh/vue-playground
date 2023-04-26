import fs from 'fs'
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [
    vue({
      script: {
        // @ts-ignore
        fs: {
          fileExists: fs.existsSync,
          readFile: file => fs.readFileSync(file, 'utf-8')
        }
      }
    }),
  ],
  define: {
    __COMMIT__: JSON.stringify('commit'),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
  },
  optimizeDeps: {
    exclude: ['@vue/repl']
  }
})
