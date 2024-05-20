// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CalendarChart = () => (
  <ResponsiveCalendar
    // data={data}
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
