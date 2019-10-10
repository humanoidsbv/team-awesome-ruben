/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import Center from './center';
import Input from '../shared/components/input';

export default {
  component: Input,
  title: 'Input'
};

export const inputField = () => (
  <Center>
    <Input onClick={action('clicked')} />
  </Center>
);
