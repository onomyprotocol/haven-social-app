import React from 'react'
import styled from 'styled-components'

const config = {
  online: { title: 'Online', color: '#00c983' },
  dnd: { title: 'Do Not Disturb', color: '#e86250' },
  away: { title: 'Away', color: '#e6bd43' },
  invisible: { title: 'Invisible', color: '#dfe4ed' }
}

const StyledStatus = styled.span`
  display: flex;
  align-items: center;

  color: ${p => p.color};
  font-size: 14px;

  &::before {
    content: '';
    display: inline-block;

    width: 8px;
    height: 8px;
    margin-right: 8px;

    border-radius: 50%;
    background-color: ${p => p.color};
  }
`

export function Status({ status }) {
  return <StyledStatus color={config[status].color}>{config[status].title}</StyledStatus>
}
