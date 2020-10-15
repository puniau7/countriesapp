import HomePage from '../../Components/HomePage';
import React from 'react';
import { shallow } from 'enzyme';

jest.mock('../../Components/Country.jsx', () => {
  return 'country';
});
jest.mock('../../Components/Styles', () => {
  return {
    Home: 'Home',
    Button: 'Button',
    Input: 'Input'
  };
});

const setData = React.useState;
const countryDataInitialState = {
  countryData: {
    name: 'India',
    capital: 'New Delhi',
    languages: [{ name: 'English' }, { name: 'Hindi' }, { name: 'Urdu' }],
    currencies: [{ name: 'rupees', symbol: 'R' }]
  }
};
jest.spyOn(React, 'useState').mockImplementationOnce(() => setData(countryDataInitialState));

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
    const wrapper = shallow(<HomePage {...defaultProps} />);
    expect(wrapper.find('Home')).toBeTruthy();
    expect(wrapper.find('Input')).toBeTruthy();
    expect(wrapper.find('Button')).toBeTruthy();
  });
});
