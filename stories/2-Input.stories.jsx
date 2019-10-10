/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import Center from './center';
import Input from '../shared/components/input';
import Label from '../shared/components/label';

export default {
  component: Input,
  title: 'Input'
};

export const input = () => (
  <Center>
    <Label>
      Name
      <Input onClick={action('clicked')} />
    </Label>
  </Center>
);

export const inputInvalid = () => (
  <Center>
    <Label>
      Wrong name!
      <Input isValid={false} />
    </Label>
  </Center>
);

export const InputStandAlone = () => (
  <Center>
    <Input />
  </Center>
);
