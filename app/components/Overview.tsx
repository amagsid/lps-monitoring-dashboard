import React from 'react';
import StatCard from './StatCard';

interface Props {
  server1: {} | any;
  server2: {};
  server3: {};
  server4: {};
  server5: {};
}

const Overview = ({
  //   allServers,
  server1,
  server2,
  server3,
  server4,
  server5,
}: //   : { cpu: server1CPU, memory: server1memory }
Props) => {
  //   console.log(server1CPU);
  //   console.log(allServers);

  let allServers = [];

  allServers.push(server1, server2, server3, server4, server5);

  //   console.log(allServers, 'allServers');

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>
      {allServers.map(({ machine, cpu, memory }) => {
        return <StatCard machine={machine} cpu={cpu} memory={memory} />;
      })}
    </div>
  );
};

export default Overview;
