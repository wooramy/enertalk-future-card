import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DailyColumnChart from '../src/DailyColumnChart';
import RealtimeUsageChart from '../src/RealtimeUsageChart';

storiesOf('DailyColumnChart', module)
  .add('default', () => {
    const props = {
      metering: {
        usage: 150000000,
        bill: 15000,
      },
      forecast: {
        usage: 250000000,
        bill: 25000,
      },
      country: 'KR',
      language: 'ko',
    };
    return (
      <DailyColumnChart {...props} />
    );
  });

storiesOf('RealtimeUsageChart', module)
  .add('default', () => {
    return (
      <RealtimeUsageChart />
    );
  });
