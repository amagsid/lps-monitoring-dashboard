import React, { useEffect, useState } from 'react';
import { ResponsiveStream } from '@nivo/stream';

interface Props {
  serverData: any;
  cpu: [];
}

const StreamChart = ({ serverData }: Props) => {
  const cpuData = serverData?.cpu;
  const [accumulatedCpuData, setAccumulatedCpuData] = useState([Array<{}>]);
  const mappedCpuData = cpuData?.map((item: any) => {
    return { cpu: item.usage };
  });
  useEffect(() => {
    // Append the new entries to the accumulatedData array
    if (mappedCpuData) {
      setAccumulatedCpuData((prev) => [...prev, ...mappedCpuData]);
    }
  }, [cpuData]);

  if (accumulatedCpuData.length >= 30) {
    accumulatedCpuData.splice(0, 8);
  }
  const toolTipTheme = {
    tooltip: {
      container: {
        color: '#ffffff',
        background: '#333333',
        fontSize: '14px',
        borderRadius: '4px',
        boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
      },
    },
  };

  return (
    <>
      {serverData?.cpu && (
        <ResponsiveStream
          data={accumulatedCpuData.slice(1)}
          keys={['cpu']}
          margin={{ top: 5, right: 0, bottom: 4, left: 25 }}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          theme={toolTipTheme} //custom styling
          axisLeft={{
            // orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Usage',
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
            modifiers: [['darker', 2]],
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              // itemTextColor: '#999999',
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
