import React from 'react'
import styled from 'styled-components'

import { getColor } from 'utils/colors'

const StyledCaption = styled.h4`
  margin: 0;

  font-size: 18px;
  font-weight: 600;
`

const StyledSmallLink = styled.button`
  background: none;
  border: none;

  font-size: 14px;
  color: ${getColor('primary')};

  cursor: pointer;
`

export function Caption({ children }) {
  return <StyledCaption>{children}</StyledCaption>
}

export function SmallLink({ children }) {
  return <StyledSmallLink>{children}</StyledSmallLink>
}
