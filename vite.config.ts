import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgrPlugin from 'vite-plugin-svgr'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), macrosPlugin()],
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env
  },
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
      '@i18n': '/src/i18n',
      '@interfaces': '/src/interfaces',
      '@layouts': '/src/layouts',
      '@locales': '/src/locales',
      '@pages': '/src/pages',
      '@redux': '/src/redux',
      '@styles': '/src/styles',
      '@type': '/src/type',
      '@ui': '/src/ui',
      '@utils': '/src/utils',
      '@widgets': '/src/widgets'
    }
  }
})
