import CountryInd from '../../Components/Country';
import React from 'react';
import { mount } from 'enzyme';

describe('ActionColumn component', () => {
  function getDefaultProps() {
    return {
      countryData: {
        name: 'India',
        capital: 'New Delhi',
        languages: [{ name: 'English' }, { name: 'Hindi' }, { name: 'Urdu' }],
        currencies: [{ name: 'rupees', symbol: 'R' }]
      }
    };
  }

  test('On render', () => {
    const defaultProps = getDefaultProps();
    const wrapper = mount(<CountryInd {...defaultProps} />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text().includes('India')).toBe(true);
  });
});
