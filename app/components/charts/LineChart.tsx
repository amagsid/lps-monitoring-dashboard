import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

interface Props {
  serverData: any;
}

const incomingDataFromAPI = {
  cpu: [
    { id: 1, usage: 12.5 },
    { id: 2, usage: 12.5 },
    { id: 3, usage: 12.5 },
  ],
  machine: 'machinName',
  memory: {
    total: 10,
    free: 12,
    used: 13,
  },
  timestamp: '',
};

const LineChart = ({ serverData }: Props) => {
  const [memoryDataStream, setMemoryDataStream] = useState([Array]);

  let memoryDataStreamm = [];

  const dataIWant = [
    {
      id: 'cpu',
      color: 'hsl(177, 70%, 50%)',
      data: [
        {
          x: 'iteration number representing time',
          y: 'cpu usuage',
        },
        {
          x: 'iteration number representing time',
          y: 'cpu usuage',
        },
        {
          x: 'iteration number representing time',
          y: 'cpu usuage',
        },
      ],
    },
    {
      id: 'memory',
      color: 'hsl(177, 70%, 50%)',
      data: [
        {
          x: 'iteration number representing time',
          y: 'memory usuage',
        },
        {
          x: 'iteration number representing time',
          y: 'memory usuage',
        },
        {
          x: 'iteration number representing time',
          y: 'memory usuage',
        },
      ],
    },
  ];

  let cleanedUpData = [
    {
      id: 'cpu',
      color: 'hsl(177, 70%, 50%)',
      data: [{ x: 1, y: 20 }],
    },
    // {
    //   id: 'memory',
    //   color: 'hsl(177, 70%, 50%)',
    //   data: Array<any>,
    // },
  ];

  useEffect(() => {
    if (serverData) {
      setMemoryDataStream((prev: any) => [...prev, serverData?.memory?.used]);
    }
  }, [serverData]);

  console.log(memoryDataStream, 'memoryDataStream');

  // Function to process incoming data and append it to dataIWant
  const processIncomingData = (incomingDataFromAPI: any, iteration: number) => {
    // Process CPU usage data
    if (incomingDataFromAPI) {
      incomingDataFromAPI?.cpu?.forEach((cpu: any) => {
        iteration++;
        cleanedUpData[0].data.push({
          x: iteration,
          y: cpu.usage,
        });
      });
      incomingDataFromAPI?.forEach((memory: any) => {
        iteration++;
        cleanedUpData[1]?.data.push({
          x: iteration,
          y: memory.used,
        });
      });
      // incomingDataFromAPI?.memory?.forEach((memory: any) => {
      //   iteration++;
      //   cleanedUpData[0].data.push({
      //     x: iteration,
      //     y: memory.used,
      //   });
      // });
    }

    // Process Memory usage data
    // const totalMemory = incomingDataFromAPI.memory.total;
    //   const usedMemory = incomingDataFromAPI?.memory?.used;
    //   cleanedUpData[1].data.push({
    //     x: iteration,
    //     y: usedMemory,
    //   });

    // console.log(first);
  };

  // processIncomingData(serverData, 1);
  // console.log(cleanedUpData, 'cleanedUpData');
  // console.log(serverData, 'server');

  return (
    <>
      <ResponsiveLine
        data={cleanedUpData}
        margin={{ top: 10, right: 35, bottom: 20, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=' >-.2f'
        axisTop={null}
        axisRight={{
          orient: 'right',
          tickSize: 4,
          tickPadding: 3,
          tickRotation: -1,
          legend: '',
          legendOffset: -26,
          truncateTickAt: 0,
        }}
        axisBottom={null}
        axisLeft={{
          tickSize: 4,
          tickPadding: 7,
          tickRotation: 0,
          legend: '',
          legendOffset: -50,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        enableGridX={false}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel='data.yFormatted'
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 16,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 70,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 11,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default LineChart;
