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
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@contexts': '/src/contexts',
      '@db': '/src/db',
      '@fonts': '/src/fonts',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces',
      '@i18n': '/src/i18n',
      '@layouts': '/src/layouts',
      '@locales': '/src/locales',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@ui': '/src/ui',
      '@utils': '/src/utils',
      '@widgets': '/src/widgets'
    }
  },
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env
  }
})
