import React from 'react';
import { Button, AccentButton } from '../Button';

export default {
  component: Button,
  title: 'UI/Button',
};

export const defaultState = () => (
  <Button>Button Label</Button>
);

export const withWidth = () => (
  <Button width="200">Button Label</Button>
);

export const accentButton = () => (
  <AccentButton width="200">Button Label</AccentButton>
);