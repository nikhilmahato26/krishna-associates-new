import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#0F172A',
              color: '#F8FAFC',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              padding: '12px 16px',
              borderRadius: '10px',
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
