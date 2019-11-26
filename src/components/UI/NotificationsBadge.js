import React from 'react'
import styled from 'styled-components'
import { getColor } from 'utils/colors'

const NotificationsBubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;

  background-color: ${p => (p.direct ? '#e86250' : getColor('bgLight'))};
  border-radius: 50%;

  font-size: 14px;
  color: ${p => (p.direct ? '#fff' : getColor('secondary'))};
`

export function NotificationsBadge({ direct, count }) {
  return count > 0 && <NotificationsBubble direct={direct}>{count}</NotificationsBubble>
}
