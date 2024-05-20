// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar';
import { useEffect, useState } from 'react';
import { server01AnnualStats } from '../../data/server1AnnualStats';

interface Props {
  serverData: any;
  // cpu: [];
}

const CalendarChart = ({ serverData }: Props) => {
  const [CPUdataStream, setCPUDataStream] = useState(server01AnnualStats);
  const [filteredDataStream, setFilteredDataStream] = useState<
    Array<{
      day: string;
      value: number;
    }>
  >([]);
  const [isCompare, setIsCompare] = useState(false);
  const handleIsCompareClick = () => {
    setIsCompare(!isCompare); // Toggle the state
    console.log(isCompare);
  };

  //Calculate the sum of CPU usage
  const totalUsage = serverData?.cpu?.reduce(
    (sum: any, cpu: any) => sum + cpu.usage,
    0
  );

  const date = new Date(serverData.timestamp);
  const formattedDate = date.toLocaleDateString().replace(/\//g, '-'); // "YYYY-MM-DD"

  function convertDateFormat(dateStr: string) {
    // Split the input date string by the hyphen
    const [day, month, year] = dateStr.split('-');
    // Rearrange and join the parts to get the desired format
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
  const newData = {
    value: totalUsage,
    day: convertDateFormat(formattedDate),
  };

  useEffect(() => {
    setCPUDataStream((prevData: any) => [...prevData, newData]);
    const filteredData = CPUdataStream.filter((value) => {
      return value.value !== undefined;
    });
    setFilteredDataStream(filteredData);
  }, [serverData]);

  return (
    <>
      {' '}
      <button onClick={handleIsCompareClick}>{isCompare} Toggle Me </button>
      <ResponsiveCalendar
        data={filteredDataStream}
        from={isCompare ? '2024-01-01' : '2023-01-01'}
        to='2024-05-23'
        emptyColor='#f5f5f5'
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 0, right: 10, bottom: 0, left: 30 }}
        yearSpacing={40}
        yearLegendOffset={6}
        monthBorderColor='#ffffff'
        dayBorderWidth={2}
        dayBorderColor='#ffffff'
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </>
  );
};

export default CalendarChart;
