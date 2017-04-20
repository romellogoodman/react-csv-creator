import React from 'react';
import {storiesOf} from '@kadira/storybook';

import {
  Title
} from '../src';

storiesOf('Title', module)
  .add('with text', () => {
    return <Title text='hello there'/>;
  });
