// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar';

const data = [
  {
    value: 32,
    day: '12-29',
  },
  {
    value: 221,
    day: '03-08',
  },
  // {
  //   value: 28,
  //   day: '2020-06-26',
  // },
  // {
  //   value: 87,
  //   day: '2020-01-13',
  // },
  // {
  //   value: 165,
  //   day: '2020-01-14',
  // },
  // {
  //   value: 393,
  //   day: '2020-05-19',
  // },
  // {
  //   value: 217,
  //   day: '2020-08-08',
  // },
  // {
  //   value: 349,
  //   day: '2020-12-14',
  // },
  // {
  //   value: 287,
  //   day: '2020-05-25',
  // },
  // {
  //   value: 200,
  //   day: '2020-10-03',
  // },
  // {
  //   value: 118,
  //   day: '2020-09-02',
  // },
  // {
  //   value: 123,
  //   day: '2020-09-15',
  // },
  // {
  //   value: 26,
  //   day: '2020-06-21',
  // },
  // {
  //   value: 127,
  //   day: '2020-09-06',
  // },
  // {
  //   value: 387,
  //   day: '11-16',
  // },
  // {
  //   value: 271,
  //   day: '2020-09-14',
  // },
  // {
  //   value: 387,
  //   day: '2020-07-10',
  // },
  // {
  //   value: 251,
  //   day: '2020-07-29',
  // },
  // {
  //   value: 307,
  //   day: '2020-08-01',
  // },
  // {
  //   value: 245,
  //   day: '2020-09-04',
  // },
  // {
  //   value: 299,
  //   day: '2020-01-29',
  // },
  // {
  //   value: 325,
  //   day: '2020-12-20',
  // },
  // {
  //   value: 164,
  //   day: '2020-04-30',
  // },
  // {
  //   value: 42,
  //   day: '2020-05-15',
  // },
  // {
  //   value: 334,
  //   day: '2020-07-17',
  // },
  // {
  //   value: 104,
  //   day: '2020-06-15',
  // },
  // {
  //   value: 383,
  //   day: '2020-11-26',
  // },
  // {
  //   value: 122,
  //   day: '2020-11-19',
  // },
  // {
  //   value: 29,
  //   day: '2020-08-20',
  // },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CalendarChart = () => (
  <ResponsiveCalendar
    data={data}
    from='2020-03-01'
    to='2020-07-12'
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

export default CalendarChart;
