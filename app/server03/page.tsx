'use client';
import React from 'react';
import DashboardLayout from '../dashboardLayout/dashboardLayout';
import useWebSocket from '../data/websocketConnection/useWebSocket';
import { metricMessages } from '../data/websocketConnection/metricMessages';
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import DetailedStats from '../components/detailedStats';
import { server03AnnualStats } from '../data/serverAnnualStats';

const page = () => {
  const [theme, colorMode] = useMode();
  const { serverData } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[1]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout>
          {' '}
          <DetailedStats
            serverData={serverData}
            serverNumber={'3'}
            annualStats={server03AnnualStats}
          />
        </DashboardLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default page;
