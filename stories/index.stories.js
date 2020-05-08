import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TestComponent from '../src/components/testComponent/TestComponent.jsx';

storiesOf('Button', module)
  .add('with text', () => <TestComponent/>)
