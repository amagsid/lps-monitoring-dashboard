// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CalendarChart = () => {
  const data = [
    {
      value: 224,
      day: '2024-05-20',
    },
    {
      value: 76,
      day: '2024-03-21',
    },
    {
      value: 113,
      day: '2024-12-04',
    },
    {
      value: 149,
      day: '2024-06-30',
    },
    {
      value: 181,
      day: '2024-06-28',
    },
    {
      value: 351,
      day: '2024-01-25',
    },
    {
      value: 333,
      day: '2024-05-11',
    },
    {
      value: 192,
      day: '2024-08-28',
    },
    {
      value: 221,
      day: '2024-12-06',
    },
    {
      value: 213,
      day: '2024-08-13',
    },
  ];
  return (
    <ResponsiveCalendar
      data={data}
      from='2024-01-01'
      to='2024-12-12'
      emptyColor='#eeeeee'
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      minValue='auto'
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      yearLegendOffset={9}
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
  );
};

export default CalendarChart;
