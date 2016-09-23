import React from 'react';
import { shallow } from 'enzyme';
import DailyColumnChart from './DailyColumnChart';

it(`renders root element as 'article'`, () => {
  expect(shallow(<DailyColumnChart />).find('article').length).toBe(1);
});

it('sholud display title temporarily', () => {
  expect(shallow(<DailyColumnChart />).text('DailyColumnChart UI')).toBeTruthy();
});
