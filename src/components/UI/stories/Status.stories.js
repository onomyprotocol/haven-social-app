import React from 'react';
import { Status } from '../Status';

export default {
  component: Status,
  title: 'UI/Status',
};

export const online = () => (
  <Status status="online" />
);

export const doNotDisturb = () => (
  <Status status="dnd" />
);

export const away = () => (
  <Status status="away" />
);

export const invisible = () => (
  <Status status="invisible" />
);