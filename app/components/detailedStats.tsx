import React from 'react';
import StreamChart from './charts/StreamChart';
import LineChart from './charts/LineChart';

interface Props {
  serverNumber: any;
  serverData: {};
}

const DetailedStats = ({ serverNumber, serverData }: Props) => {
  return (
    <>
      {/* these are stats for server {serverNumber} */}
      <div className='h-full'>
        <div className='grid grid-cols-12 gap-2 w-full px-4 max-w-7xl'>
          {/* <!-- Top row --> */}
          <div className='col-span-6 bg-blue-500 h-40  rounded-lg '></div>
          <div className='col-span-6 bg-green-500 h-40  rounded-lg'></div>
          {/* left centered component */}
          <div className='col-span-2 bg-yellow-500 rounded-lg h-64'></div>
          {/* <!-- Centered main component --> */}
          <div className='col-span-8 bg-red-500 h-64 flex items-center justify-center rounded-lg'>
            {/* <div className='w-3/4 h-3/4 flex items-center justify-center'> */}
            <StreamChart serverData={serverData} />

            {/* <LineChart serverData={serverData} /> */}
            {/* </div> */}
          </div>
          {/* right center component */}
          <div className='col-span-2 bg-yellow-500 rounded-lg h-64'></div>
          {/* <!-- Bottom row --> */}
          <div className='col-span-4 bg-purple-500 h-48 rounded-lg'></div>
          <div className='col-span-8 bg-pink-500 h-48 rounded-lg'></div>
        </div>
      </div>
    </>
  );
};

export default DetailedStats;
