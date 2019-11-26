import React from 'react';
import { NotificationsBadge } from '../NotificationsBadge';

export default {
  component: NotificationsBadge,
  title: 'UI/NotificationsBadge',
};

export const directNotification = () => (
  <NotificationsBadge direct count={5} />
);

export const directNotificationZeroValue = () => (
  <NotificationsBadge direct count={0} />
);

export const unreadCount = () => (
  <NotificationsBadge count={80} />
);

export const tooMuchNotifications = () => (
  <NotificationsBadge count={1024} />
);