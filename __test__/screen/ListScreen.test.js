import React from 'react';
import  { create } from 'react-test-renderer';
import ListScreen from '../../screen/ListScreen';
ListScreen


const tree = create(<ListScreen/>)

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});