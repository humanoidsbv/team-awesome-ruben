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
      <span role="img" aria-label="water the plants!">
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

export const typeSubmit = () => (
  <Center>
    <Button onClick={action('clicked')} type="submit">
      Click me
    </Button>
  </Center>
);
