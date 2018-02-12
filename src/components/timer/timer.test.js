import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import Timer from './timer';

test('Timer component', () => {
  const time = moment();
  const component = renderer.create(
    <Timer
      time={time} 
      timeNow={time}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
