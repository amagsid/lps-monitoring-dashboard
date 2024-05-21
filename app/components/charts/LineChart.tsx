import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

interface Props {
  serverData: any;
}

const LineChart = ({ serverData }: Props) => {
  const [memoryDataStream, setMemoryDataStream] = useState([Array]);

  let cleanedUpData = [
    {
      id: 'cpu',
      color: 'hsl(177, 70%, 50%)',
      data: [{ x: 1, y: 20 }],
    },
    {
      id: 'memory',
      color: 'hsl(177, 70%, 50%)',
      data: [{ x: 1, y: 20 }],
    },
  ];

  useEffect(() => {
    if (serverData) {
      setMemoryDataStream((prev: any) => [
        ...prev,
        serverData?.memory?.usedPercentage,
      ]);
    }
  }, [serverData]);

  if (memoryDataStream.length > 4) {
    memoryDataStream.splice(0, 1);
  }

  // Function to process incoming data and append it to dataIWant
  const processIncomingData = (incomingDataFromAPI: any, iteration: number) => {
    let incrementValue = 1;

    console.log(memoryDataStream, 'memoryDataStream');
    if (incomingDataFromAPI) {
      incomingDataFromAPI?.cpu?.forEach((cpu: any) => {
        iteration++;
        cleanedUpData[0].data.push({
          x: iteration,
          y: cpu.usage,
        });
        // cleanedUpData[1]?.data.push({
        //   x: iteration,
        //   y: memory,
        // });
      });
    }

    memoryDataStream.forEach((memory: any, index: any) => {
      const newNumber = incrementValue++;
      // iteration++;
      cleanedUpData[1]?.data.push({
        x: (index = +incrementValue),
        y: memory,
      });
    });
  };
  processIncomingData(serverData, 1);

  const toolTipTheme = {
    tooltip: {
      container: {
        color: '#ffffff', // Set the tooltip text color here
        background: '#333333', // Optionally, you can also set the background color
        fontSize: '14px', // Optionally, set the font size
        borderRadius: '4px', // Optionally, set the border radius
        boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)', // Optionally, set the box shadow
      },
    },
  };

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
        theme={toolTipTheme}
        yFormat=' >-.2f'
        axisTop={null}
        axisRight={{
          // orient: 'right',
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
