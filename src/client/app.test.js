import App from './app';
import React from 'react';
import { shallow } from 'enzyme';

// This test checked the <App /> and explicitly says what its looking for and if it matches.

describe('App', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').text()).toBe('Welcome to React Boilerplate App');
        expect(wrapper).toMatchSnapshot();
    })
})