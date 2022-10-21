import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components/macro'
import { styledTheme } from './core/styles/styledTheme'
import Routes from './Routes'
import { GlobalStyles } from './core/styles/GlobalStyles'
import './core/translation/i18n'
import { NotificationProvider } from './features/notifications/state/useNotification'

const App: FC = () => (
  <ThemeProvider theme={styledTheme}>
    <NotificationProvider>
      <GlobalStyles />
      <Routes/>
    </NotificationProvider>
  </ThemeProvider>
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(<App />)
