import React, { useEffect, useRef, useState } from 'react';
import StreamChart from './charts/StreamChart';
import LineChart from './charts/LineChart';
import Tooltip from '@mui/material/Tooltip';
import CalendarChart from './charts/CalendarChart';
import Zoom from '@mui/material/Zoom';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { FaArrowTrendDown } from 'react-icons/fa6';

const DetailedStats = ({ serverData }: any) => {
  //converting timestamp yo human-readable date/time
  const date = new Date(serverData.timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  //check memory usage trend - if it's going up or down
  const CurrentMemoryUsage = serverData?.memory?.usedPercentage;
  const [isMemoryTrendUp, setIsMemoryTrendUp] = useState(false);

  function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    }, [value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }

  const prevMemoryUsage = usePrevious(serverData?.memory?.usedPercentage);

  useEffect(() => {
    if (prevMemoryUsage) {
      if (prevMemoryUsage > CurrentMemoryUsage) {
        console.log('its going down', prevMemoryUsage, CurrentMemoryUsage);
        setIsMemoryTrendUp(false);
      }
      if (prevMemoryUsage < CurrentMemoryUsage) {
        console.log('its going up', prevMemoryUsage, CurrentMemoryUsage);
        setIsMemoryTrendUp(true);
      }
    }
  }, [CurrentMemoryUsage]);

  return (
    <div className='h-full'>
      <div className='grid grid-cols-12 gap-2 w-full px-4 max-w-7xl'>
        {/* <!-- Top row --> */}
        <div className='col-span-8 bg-blue-500 h-40  rounded-lg flex items-center justify-center'>
          <LineChart serverData={serverData} />
        </div>
        <div className='col-span-4 bg-green-500 h-40 flex flex-col items-center justify-center  rounded-lg'>
          <h1>Free memory (%)</h1>
          <h1 className=' font-bold  text-8xl'>
            {serverData && serverData?.memory?.freePercentage}
          </h1>
        </div>
        {/* left centered component */}
        <div className='col-span-2 bg-yellow-500 rounded-lg h-64 flex flex-col items-center justify-center '>
          <h1 className=' text-lg'> last updated at</h1>{' '}
          {serverData.timestamp && (
            <span className=' font-semibold text-4xl'> {formattedTime}</span>
          )}
        </div>
        {/* <!-- Centered main component --> */}
        <Tooltip TransitionComponent={Zoom} title='CPU Stats' placement='top'>
          <div className='col-span-8 h-64 flex items-center justify-center rounded-lg'>
            <StreamChart serverData={serverData} />
          </div>
        </Tooltip>
        {/* right center component */}
        <div className='col-span-2 bg-yellow-500 rounded-lg h-64 flex flex-col items-center justify-center '>
          <h1>Used memory (%)</h1>
          {serverData && (
            <h1 className=' text-4xl  font-extrabold'>
              {serverData?.memory?.usedPercentage}
            </h1>
          )}
        </div>
        {/* <!-- Bottom row --> */}
        <div className='col-span-4 bg-purple-500 h-48 rounded-lg flex flex-col items-center justify-center'>
          <h1>memory usage trend</h1>
          {isMemoryTrendUp ? (
            <FaArrowTrendUp size={120} />
          ) : (
            <FaArrowTrendDown size={120} />
          )}
        </div>
        <div className='col-span-8 bg-pink-500 h-48 rounded-lg'>
          <CalendarChart />
        </div>
      </div>
    </div>
  );
};

export default DetailedStats;
