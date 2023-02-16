// import React from 'react';
// import  { create } from 'react-test-renderer';

// import Report from '../../component/report';

// const navigation = {
//     navigate: jest.fn()
// }

// const tree = create(<Report navigation={navigation}/>)

// test('navigate to Report Screen',()=>{
//     const button = tree.root.findByProps({testID: 'myButton'}).props;
//     button.onPress();

//     //expect(navigation.navigate)[0].toBeCalledWith('Report')
//     expect(navigation.navigate).toBeCalledWith("Report")

// })

import React from 'react';
import renderer from 'react-test-renderer';
import Report from '../../component/report';

describe('<Report />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Report />).toJSON();
    expect(tree.children[0].type).toBe('View');
  });
});