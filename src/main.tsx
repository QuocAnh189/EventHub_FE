import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './i18n/i18n.ts'
import './style.css'

//context
import { ThemeProvider } from '@contexts/themeContext.tsx'
import AppSocketProvider from '@contexts/socketContext.tsx'

//slick
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

//component
import AppLayout from '@layouts/app.tsx'
import { ConfirmProvider } from 'material-ui-confirm'

//redux
import store from '@redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <ConfirmProvider
          defaultOptions={{
            allowClose: true,
            dialogProps: { maxWidth: 'xs' },
            cancellationButtonProps: { color: 'inherit' },
            confirmationButtonProps: { color: 'secondary' }
          }}
        >
          <AppSocketProvider>
            <AppLayout>
              <App />
            </AppLayout>
          </AppSocketProvider>
        </ConfirmProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
