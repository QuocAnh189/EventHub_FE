import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './i18n/i18n.ts'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@contexts/themeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
