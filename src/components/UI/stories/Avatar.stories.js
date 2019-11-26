import React from 'react';
import { Avatar } from '../Avatar';

export default {
  component: Avatar,
  title: 'UI/Avatar',
};

export const defaultState = () => (
  <Avatar src="https://picsum.photos/160" size="80" />
);