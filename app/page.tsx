'use client';
import Image from 'next/image';
import Dashboard from './pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeContext, useMode } from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function Home() {
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className='flex h-screen flex-col items-center justify-between'>
            <Dashboard />
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}
