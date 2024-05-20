import React from 'react';
import StreamChart from './charts/StreamChart';
import LineChart from './charts/LineChart';
import Tooltip from '@mui/material/Tooltip';
import CalendarChart from './charts/CalendarChart';
import Zoom from '@mui/material/Zoom';

interface Props {
  // serverNumber: any;
  serverData: {};
}

const DetailedStats = ({ serverData }: Props) => {
  return (
    <>
      <div className='h-full'>
        <div className='grid grid-cols-12 gap-2 w-full px-4 max-w-7xl'>
          {/* <!-- Top row --> */}
          <div className='col-span-8 bg-blue-500 h-40  rounded-lg flex items-center justify-center'>
            <LineChart serverData={serverData} />
          </div>
          <div className='col-span-4 bg-green-500 h-40 flex items-center justify-center  rounded-lg'>
            <h1 className=' font-bold text-8xl'>
              {serverData && serverData?.memory?.freePercentage}
              <span>%</span>
            </h1>
          </div>
          {/* left centered component */}
          <div className='col-span-2 bg-yellow-500 rounded-lg h-64'></div>
          {/* <!-- Centered main component --> */}
          <Tooltip TransitionComponent={Zoom} title='CPU Stats' placement='top'>
            <div className='col-span-8 h-64 flex items-center justify-center rounded-lg'>
              {/* <div className='w-3/4 h-3/4 flex items-center justify-center'> */}
              <StreamChart serverData={serverData} />

              {/* </div> */}
            </div>
          </Tooltip>
          {/* right center component */}
          <div className='col-span-2 bg-yellow-500 rounded-lg h-64 flex items-center justify-center'>
            {serverData && (
              <h1 className=' font-bold text-4xl'>
                {serverData?.memory?.usedPercentage}
                <span>%</span>
              </h1>
            )}
          </div>
          {/* <!-- Bottom row --> */}
          <div className='col-span-4 bg-purple-500 h-48 rounded-lg'></div>
          <div className='col-span-8 bg-pink-500 h-48 rounded-lg'>
            <CalendarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedStats;
