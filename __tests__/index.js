import 'react-native';
import React from 'react';
import Venligboerneapp from '../main.js';
// NOTE: We're importing with a different name than it was
// declared. This is allowed, because it is exported as default.

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Create index.android.js and index.ios.js for
// platform specific tests

it('renders correctly', () => {
  const tree = renderer.create(
    <Venligboerneapp />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
