import React from 'react';
import  { create } from 'react-test-renderer';

import DetailScreen from '../../screen/DetailScreen';
DetailScreen

const tree = create(<DetailScreen/>)

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});