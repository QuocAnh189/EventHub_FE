import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './i18n/i18n.ts'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@contexts/themeContext.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ConfirmProvider } from 'material-ui-confirm'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <ConfirmProvider
        defaultOptions={{
          allowClose: true,
          dialogProps: { maxWidth: 'xs' },
          cancellationButtonProps: { color: 'inherit' },
          confirmationButtonProps: { color: 'secondary' }
        }}
      >
        <App />
      </ConfirmProvider>
    </ThemeProvider>
  </BrowserRouter>
)
