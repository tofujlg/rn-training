import React from 'react';
import renderer from 'react-test-renderer';

import Ask from '../../component/ask';

describe('<Ask />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Ask />).toJSON();
    expect(tree.children[0].type).toBe('View');
  });
});

