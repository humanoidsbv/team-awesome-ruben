import React from 'react';
import { action } from '@storybook/addon-actions';

import InputStandard from '../shared/components/input-standard';

export default {
  component: InputStandard,
  title: 'Input'
};

export const inputStandard = () => (
  <InputStandard onClick={action('clicked')} />
);
