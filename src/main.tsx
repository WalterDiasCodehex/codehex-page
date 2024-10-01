import CssBaseline from '@mui/material/CssBaseline'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import { AppRoutes } from './routes/AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CssBaseline />
    <AppRoutes />
  </BrowserRouter>,
)
