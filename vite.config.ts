import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'docs'),
  server: {
    open: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/DrawLabJS.ts'),
      name: 'DrawLabJS.ts',
      fileName: (format) => `draw-lab-js.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['fabric'],
      output: {
        globals: {
          fabric: 'fabric' // Global variable name for 'fabric.js'
        }
      }
    }
  }
});