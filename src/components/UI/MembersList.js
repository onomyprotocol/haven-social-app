import React from 'react'
import styled from 'styled-components'

import { getColor } from 'utils/colors'

const List = styled.div`
  display: flex;
  align-items: center;

  > img + img {
    margin-left: 10px;
  }
`

const MoreButton = styled.button`
  margin-left: auto;
  padding: 0;

  background: none;
  border: none;

  font-size: 14px;
  font-weight: 600;
  color: ${getColor('primary')};

  cursor: pointer;
`

export function MembersList({ more, children }) {
  return (
    <List>
      {children}
      <MoreButton>+{more}</MoreButton>
    </List>
  )
}
