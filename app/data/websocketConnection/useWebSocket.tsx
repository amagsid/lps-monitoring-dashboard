import { useEffect, useState } from 'react';

const useWebSocket = (url: string, metricMessage: any) => {
  // const [connection, setConnection] = useState(null);

  const [loading, setLoading] = useState(true);
  const [serverData, setServerData] = useState([Array<{}>]);
  const [isPaused, setPause] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const socket = new WebSocket(url);

    if (!isPaused) {
      socket.onopen = () => {
        setLoading(false);
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

    socket.onclose = (event) => {
      if (event.code != 1000) {
        // Error code 1000 means that the connection was closed normally.
        if (!navigator.onLine) {
          alert(
            'You are offline. Please connect to the Internet and try again.'
          );
        }
      }
    };

    // socket.onerror = (error: any) => {
    //   console.error('WebSocket error: ', socket);
    //   setIsError(true);
    //   setError(error);
    // };

    socket.addEventListener('error', (error) => {
      console.error('addEventListener event handler!', error);
      setIsError(true);

      socket.close();
    });
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (socket.readyState === 1) {
        socket.close();
        console.log('WebSocket connection is closed.');
      }
    };
  }, []);

  return { serverData, isPaused, loading, setPause, isError, error };
};

export default useWebSocket;
