import React from 'react';
import renderer, { create } from 'react-test-renderer';

import Unsync from '../../component/unsync';

const tree = create(<Unsync/>)

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});