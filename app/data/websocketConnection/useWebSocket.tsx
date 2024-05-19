import { useEffect, useState } from 'react';

const useWebSocket = (url: string, metricMessage: any) => {
  // const [connection, setConnection] = useState(null);

  const [loading, setLoading] = useState(true);
  const [serverData, setServerData] = useState(Array<{}>);
  const [isPaused, setPause] = useState(false);

  useEffect(() => {
    const socket = new WebSocket(url);

    if (!isPaused) {
      socket.onopen = () => {
        setLoading(false);
        // console.log('ws opened on browser');
        if (Array.isArray(metricMessage)) {
          metricMessage.forEach((message: any) => {
            socket.send(JSON.stringify(message));
          });
        } else {
          socket.send(JSON.stringify(metricMessage));
        }
      };
    }

    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      if (!('success' in receivedData)) {
        if (Array.isArray(metricMessage)) {
          setServerData((prevMessages) => [...prevMessages, receivedData]);
        } else {
          setServerData(receivedData);
        }
      }
    };
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (socket.readyState === 1) {
        socket.close();
        console.log('WebSocket connection is closed.');
      }
    };
  }, []);

  return { serverData, isPaused, loading, setPause };
};

export default useWebSocket;
