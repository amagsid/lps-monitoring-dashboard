// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar';
import { useEffect, useState } from 'react';
import { server01AnnualStats } from '../../data/serverAnnualStats';
import { TbArrowBarBoth } from 'react-icons/tb';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import UndoIcon from '@mui/icons-material/Undo';
import Tooltip from '@mui/material/Tooltip';
import { ColorModeContext, useMode } from '../../../theme';
import { useTheme } from '@mui/material';

interface Props {
  serverData: any;
  annualStats: any;
  // cpu: [];
}

const CalendarChart = ({ serverData, annualStats }: Props) => {
  const theme = useTheme();
  const [CPUdataStream, setCPUDataStream] = useState(annualStats);
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
    const filteredData = CPUdataStream.filter((value: any) => {
      return value.value !== undefined;
    });
    setFilteredDataStream(filteredData);
  }, [serverData]);

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
      <Tooltip
        // style={{ scale: 2 }}
        className='w-full '
        title={!isCompare ? 'compare to last year' : 'back to 2024 view'}
        placement='top-end'
      >
        <div className=' h-fit w-fit z-40 relative'>
          {!isCompare ? (
            <CompareArrowsIcon
              className='z-40'
              style={{ position: 'absolute', right: 10 }}
              onClick={handleIsCompareClick}
            />
          ) : (
            <UndoIcon
              className='z-40'
              style={{ position: 'absolute', right: 10 }}
              onClick={handleIsCompareClick}
            />
          )}
        </div>
      </Tooltip>

      <ResponsiveCalendar
        data={filteredDataStream}
        from={!isCompare ? '2024-01-01' : '2023-01-01'}
        to='2024-05-23'
        theme={toolTipTheme}
        emptyColor='#f2f2f2'
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 15, right: 10, bottom: 10, left: 20 }}
        yearSpacing={15}
        yearLegendOffset={5}
        monthBorderColor={
          theme.palette.mode == 'dark'
            ? `#3d8294`
            : `#b6f3fc
        `
        }
        monthLegendOffset={4}
        dayBorderWidth={2}
        dayBorderColor={
          theme.palette.mode == 'dark'
            ? `#3d8294`
            : `#b6f3fc
        `
        }
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
