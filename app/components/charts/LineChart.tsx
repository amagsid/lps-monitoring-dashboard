import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface Props {
  serverData: any;
}

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

const LineChart = ({ serverData }: Props) => {
  console.log(serverData, 'serverData');
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
  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        xFormat=' >-'
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=' >-.2f'
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 8,
          tickPadding: 9,
          tickRotation: -32,
          legend: 'count',
          legendOffset: -50,
          legendPosition: 'middle',
          truncateTickAt: 13,
        }}
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
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
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
