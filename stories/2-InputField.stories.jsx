/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import Center from './center';
import InputField from '../shared/components/input-field';

export default {
  component: InputField,
  title: 'Input'
};

export const inputField = () => (
  <Center>
    <InputField onClick={action('clicked')} />
  </Center>
);
