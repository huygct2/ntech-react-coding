import React from 'react';
import moment from 'moment';
import RelativeTime from './RelativeTime';

test('RelativeTime class: Should be -2s when 1 more seconds to get started', () => {
  const amountTime = RelativeTime.toParts(moment().valueOf() - 2, moment().valueOf());
  const amountTimeExpected = [{ amount: -1, unit: 's' }];
  expect(amountTime).toEqual(amountTimeExpected);
});

test('RelativeTime class: Should be -2d when time is 2 more days to start', () => {
  const amountTime = RelativeTime.toParts(moment().valueOf() - 172800000, moment().valueOf());
  const amountTimeExpected = [{ amount: -2, unit: 'd' }];
  expect(amountTime).toEqual(amountTimeExpected);
});
