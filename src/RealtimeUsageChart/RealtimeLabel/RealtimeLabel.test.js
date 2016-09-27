import React from 'react';
import { shallow, mount } from 'enzyme';

import RealtimeLabel from './RealtimeLabel';

describe('<RealtimeLabel/>', () => {
    
    it('should render <div/> component', () => {
        const wrapper = shallow(<RealtimeLabel/>);

        expect(wrapper.find('div.realtime-label').length).toEqual(1);
    });

    it('should have <span/> component', () => {
        const wrapper = shallow(<RealtimeLabel/>);

        expect(wrapper.find('span.value').length).toEqual(1);
    });

    it('check props.usage', () => {
        const wrapper = shallow(<RealtimeLabel usage={0}/>);

        expect(wrapper.instance().props.usage).toEqual(0);
    })
});