import React from 'react';
import StatCard from './StatCard';

interface Props {
  server1: {} | any;
  server2: {};
  server3: {};
  server4: {};
  server5: {};
}

const Overview = ({ server1, server2, server3, server4, server5 }: Props) => {
  let allServers = [];
  allServers.push(server1, server2, server3, server4, server5);

  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full'>
      {allServers.map(({ machine, cpu, memory }, i) => (
        <StatCard machine={machine} cpu={cpu} memory={memory} key={i + 1} />
      ))}
    </div>
  );
};

export default Overview;
