import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router.tsx'
import 'leaflet/dist/leaflet.css';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
