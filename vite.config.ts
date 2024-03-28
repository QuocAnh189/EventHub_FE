import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgrPlugin from 'vite-plugin-svgr'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), macrosPlugin()],
  build: {
    outDir: 'build',
    rollupOptions: {
      treeshake: 'recommended',
      output: {
        manualChunks(id: any) {
          if (id.includes('node_modules/antd')) {
            return 'antd'
          }
          if (id.includes('node_modules/@mui')) {
            return 'mui'
          }
          if (id.includes('node_modules/recharts')) {
            return 'recharts'
          }
          if (id.includes('node_modules/react-select-country-list')) {
            return 'country-list'
          }
          if (id.includes('node_modules/country-state-city')) {
            return 'city-list'
          }
        }
      }
    }
  },
  // server: {
  //   port: 3000
  // },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layout': '/src/layout',
      '@ui': '/src/ui',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@db': '/src/db',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@fonts': '/src/fonts',
      '@utils': '/src/utils',
      '@widgets': '/src/widgets',
      '@contexts': '/src/contexts',
      '@constants': '/src/constants'
    }
  },
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env
  }
})
