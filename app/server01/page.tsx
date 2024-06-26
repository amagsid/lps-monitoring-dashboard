'use client';
import React from 'react';
import DashboardLayout from '../dashboardLayout/dashboardLayout';
import Overview from '../components/Overview';
import useWebSocket from '../data/websocketConnection/useWebSocket';
import { metricMessages } from '../data/websocketConnection/metricMessages';
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import DetailedStats from '../components/detailedStats';
import { server01AnnualStats } from '../data/serverAnnualStats';

const page = () => {
  const [theme, colorMode] = useMode();

  const { serverData } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[0]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout>
          <DetailedStats serverData={serverData} annualStats={server01AnnualStats} />
        </DashboardLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default page;
