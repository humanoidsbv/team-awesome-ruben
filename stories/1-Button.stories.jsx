/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../shared/components/button';
import Center from './center';

export default {
  component: Button,
  title: 'Button'
};

export const regular = () => (
  <Center>
    <Button onClick={action('clicked')}>Click me</Button>
  </Center>
);

export const emoji = () => (
  <Center>
    <Button onClick={action('clicked')}>
      Water the plants &nbsp;
      <span role="img" aria-label="so cool">
        🌹 🌻 🌷 🌿 🌵 🌾 🌼
      </span>
    </Button>
  </Center>
);

export const disabled = () => (
  <Center>
    <Button onClick={action('clicked')} disabled>
      Click me
    </Button>
  </Center>
);

export const active = () => (
  <Center>
    <Button onClick={action('clicked')} disabled={false}>
      Click me
    </Button>
  </Center>
);
