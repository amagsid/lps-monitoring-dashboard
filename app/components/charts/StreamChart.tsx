import React, { useEffect, useState } from 'react';
import { ResponsiveStream } from '@nivo/stream';

const incomingdata = {
  cpu: [
    { id: 1, usage: 12.5 },
    { id: 2, usage: 12.5 },
    { id: 3, usage: 12.5 },
  ],
  machine: 'name',
  memory: {
    total: 10,
    free: 12,
    used: 13,
  },
  timestamp: '',
};

const data = [
  {
    cpu: 155,
  },
  {
    cpu: 140,
  },
  {
    cpu: 100,
  },
  {
    cpu: 90,
  },
  {
    cpu: 120,
  },
  {
    cpu: 90,
  },
];

interface Props {
  serverData: any;
  // cpu: [];
}

const StreamChart = ({ serverData }: Props) => {
  const cpuData = serverData?.cpu;

  // let accumulatedCpuData = [];
  const [accumulatedCpuData, setAccumulatedCpuData] = useState([Array<{}>]);

  const mappedCpuData = cpuData?.map((item) => {
    return { cpu: item.usage };
  });
  useEffect(() => {
    // Append the new entries to the accumulatedData array
    if (mappedCpuData) {
      setAccumulatedCpuData((prev) => [...prev, ...mappedCpuData]);
    }
    console.log(accumulatedCpuData.length);

    // console.log(accumulatedCpuData.slice(1), 'accumulatedCpuData');
    // console.log(mappedCpuData, 'mapped');
  }, [cpuData]);

  if (accumulatedCpuData.length > 90) {
    accumulatedCpuData.splice(0, 10);
  }

  return (
    <>
      {serverData?.cpu && (
        <ResponsiveStream
          data={accumulatedCpuData.slice(1)}
          keys={['cpu']}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          offsetType='none'
          order='ascending'
          colors={{ scheme: 'nivo' }}
          fillOpacity={0.85}
          borderColor={{ theme: 'background' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#2c998f',
              size: 4,
              padding: 2,
              stagger: true,
            },
            {
              id: 'squares',
              type: 'patternSquares',
              background: 'inherit',
              color: '#e4c912',
              size: 6,
              padding: 2,
              stagger: true,
            },
          ]}
          fill={[
            {
              match: {
                id: 'Paul',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'Marcel',
              },
              id: 'squares',
            },
          ]}
          dotSize={8}
          dotColor={{ from: 'color' }}
          dotBorderWidth={2}
          dotBorderColor={{
            from: 'color',
            modifiers: [['darker', '2']],
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000000',
                  },
                },
              ],
            },
          ]}
        />
      )}
    </>
  );
};

export default StreamChart;
