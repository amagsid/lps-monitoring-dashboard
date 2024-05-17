import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

const useWebSocket = (url: any, messages: any) => {
  const [loading, setLoading] = useState(true);
  const [serverData, setServerData] = useState(Array<{}>);
  const [isPaused, setPause] = useState(false);
  const dataQueueRef = useRef([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    if (!isPaused) {
      socket.onopen = () => {
        // console.log('ws opened on browser');
        // Send initial messages or headers
        if (Array.isArray(messages)) {
          messages.forEach((message: any) => {
            socket.send(JSON.stringify(message));
          });
        }

        setLoading(false);
      };
    }

    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);

      if (!('success' in receivedData)) {
        setInterval(() => {
          setServerData((prevMessages) => [...prevMessages, receivedData]);
          dataQueueRef.current = [];
        }, 1000);

        // console.log(serverData, 'serverData');
      }
    };
    // Clean up the WebSocket connection when the component unmounts
    // return () => {
    //   socket.close();
    //   console.log('WebSocket connection is closed.');
    // };
  }, [serverData]);

  return { serverData, isPaused, loading, setPause };
};

export default useWebSocket;
