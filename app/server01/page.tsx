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
  const { serverData, isPaused, loading, setPause } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages
  );
  const { serverData: server1 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[0]
  );
  const { serverData: server2 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[1]
  );
  const { serverData: server3 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[2]
  );
  const { serverData: server4 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[3]
  );
  const { serverData: server5 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[4]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout>
          {' '}
          <h1>custom stats for Server no.1</h1>
          <Overview
            // allServers={serverData}
            server1={server1}
            server2={server2}
            server3={server3}
            server4={server4}
            server5={server5}
          />
        </DashboardLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default page;
