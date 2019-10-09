/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../shared/components/button';
import Center from './center';

export default {
  component: Button,
  title: 'Button'
};

export const text = () => (
  <Center>
    <Button onClick={action('clicked')} />
  </Center>
);

export const emoji = () => (
  <Center>
    <Button onClick={action('clicked')} innerText="⁣⁣🌹 🌻 🌷 🌿 🌵 🌾 🌼⁣">
      yes
    </Button>
  </Center>
);
