import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import preset from 'postcss-preset-env';
import livereload from 'vite-plugin-live-reload';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        nested(),
        preset(),
      ]
    }
  },
  plugins: [
    livereload(['src/story/**/*.tw', 'src/entry.ts']),
  ],
  server: {
    open: true,
    watch: {
      usePolling: true,
      depth: 5
    },
  },
  build: {
    rollupOptions: {
      external: 'src/entry.ts',
      input: 'index.html',
      plugins: [typescript()],
    }
  }
})