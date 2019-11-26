import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { NotificationsBadge } from 'components/UI'
import { ChatIcon, NotificationIcon } from 'assets/icons'

const Widgets = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 27px;

  & > * {
    cursor: pointer;
  }

  svg:hover path {
    transition: 0.2s fill ease;
    fill: #939bab;
  }
`

const NotificationsWrapper = styled.div`
  position: relative;
`

const BadgeWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: -8px;
`

export default function HeaderWidgets() {
  const randomNotificationsNumber = Math.floor(Math.random() * Math.floor(99))

  return (
    <Widgets>
      <Link to="/chats">
        <ChatIcon />
      </Link>
      <NotificationsWrapper>
        {randomNotificationsNumber > 0 && (
          <BadgeWrapper>
            <NotificationsBadge direct count={randomNotificationsNumber} />
          </BadgeWrapper>
        )}
        <NotificationIcon />
      </NotificationsWrapper>
    </Widgets>
  )
}
