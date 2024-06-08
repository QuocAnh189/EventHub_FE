import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n/i18n.ts'
import { BrowserRouter } from 'react-router-dom'
import './style.css'

//context
import { ThemeProvider } from '@contexts/themeContext.tsx'

//slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//component
import { ConfirmProvider } from 'material-ui-confirm'
import AppLayout from '@layouts/app.tsx'

//redux
import { Provider } from 'react-redux'
import store from '@redux/store.ts'
import AppSocket from '@layouts/socket.tsx'

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
          <AppSocket>
            <AppLayout>
              <App />
            </AppLayout>
          </AppSocket>
        </ConfirmProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
