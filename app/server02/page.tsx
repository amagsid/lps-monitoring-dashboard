'use client';
import React from 'react';
import DashboardLayout from '../dashboardLayout/dashboardLayout';
import Overview from '../components/Overview';
import useWebSocket from '../data/websocketConnection/useWebSocket';
import { metricMessages } from '../data/websocketConnection/metricMessages';
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

const page = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout>
          {' '}
          <h1>custom stats for Server no.2</h1>
        </DashboardLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default page;
