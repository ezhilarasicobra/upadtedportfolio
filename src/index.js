
import { render } from 'react-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(
  <BrowserRouter>
 <Switch>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
