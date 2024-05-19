import React, { useEffect } from 'react';
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
  console.log(serverData, 'serverData');

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

  const data = [
    {
      id: 'france',
      color: 'hsl(177, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 24,
        },
        {
          x: 'helicopter',
          y: 47,
        },
        {
          x: 'boat',
          y: 30,
        },
        {
          x: 'train',
          y: 267,
        },
        {
          x: 'subway',
          y: 128,
        },
        {
          x: 'bus',
          y: 274,
        },
        {
          x: 'car',
          y: 192,
        },
        {
          x: 'moto',
          y: 212,
        },
        {
          x: 'bicycle',
          y: 89,
        },
        {
          x: 'horse',
          y: 115,
        },
        {
          x: 'skateboard',
          y: 235,
        },
        {
          x: 'others',
          y: 17,
        },
      ],
    },

    {
      id: 'germany',
      color: 'hsl(167, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 187,
        },
        {
          x: 'helicopter',
          y: 287,
        },
        {
          x: 'boat',
          y: 192,
        },
        {
          x: 'train',
          y: 72,
        },
        {
          x: 'subway',
          y: 77,
        },
        {
          x: 'bus',
          y: 60,
        },
        {
          x: 'car',
          y: 135,
        },
        {
          x: 'moto',
          y: 40,
        },
        {
          x: 'bicycle',
          y: 178,
        },
        {
          x: 'horse',
          y: 44,
        },
        {
          x: 'skateboard',
          y: 176,
        },
        {
          x: 'others',
          y: 229,
        },
      ],
    },
  ];

  // Option A
  // interface cleanedUpData {
  //   id: string;
  //   color: string;
  //   data: { x: any; y: any };
  // }

  // interface cleanedUpData extends Array<cleanedUpData> {}

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

  // Function to process incoming data and append it to dataIWant
  const processIncomingData = (incomingDataFromAPI: any, iteration: number) => {
    // Process CPU usage data
    if (incomingDataFromAPI) {
      incomingDataFromAPI?.cpu?.forEach((cpu: any) => {
        // let iteration = 0;
        iteration++;
        cleanedUpData[0].data.push({
          x: iteration,
          y: cpu.usage,
        });
      });
    }

    // Process Memory usage data
    // const totalMemory = incomingDataFromAPI.memory.total;
    //   const usedMemory = incomingDataFromAPI?.memory?.used;
    //   dataIWant[1].data.push({
    //     x: iteration,
    //     y: usedMemory,
    //   });
    // };

    // console.log(first);
  };

  processIncomingData(serverData, 1);
  console.log(cleanedUpData, 'cleanedUpData');

  // useEffect(() => {
  //   console.log('hey');

  // }, [serverData]);

  return (
    <>
      <ResponsiveLine
        data={data}
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
