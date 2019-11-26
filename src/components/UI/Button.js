import React from 'react'
import styled from 'styled-components'

import { getColor } from 'utils/colors'

const StyledButton = styled.button`
  height: 40px;
  width: ${p => (p.width ? p.width + 'px' : 'auto')};

  background-color: ${getColor('bgLight')};
  border: none;
  border-radius: 22px;

  font-size: 14px;
  color: ${getColor('primary')};
  font-weight: 400;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #dfe4ed;

    color: #5c8ddb;
  }
`

const StyledAccentButton = styled.button`
  height: 40px;
  width: ${p => (p.width ? p.width + 'px' : 'auto')};

  background-color: ${getColor('primary')};
  border: none;
  border-radius: 22px;

  font-size: 16px;
  color: #fff;
  font-weight: 500;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #5c8ddb;

    color: #fff;
  }
`

export const StyledInvisibleButton = styled.button`
  padding: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
`

export function Button({ width, children }) {
  return <StyledButton width={width}>{children}</StyledButton>
}

export function AccentButton({ width, children }) {
  return <StyledAccentButton width={width}>{children}</StyledAccentButton>
}

export function InvisibleButton({ children }) {
  return <StyledInvisibleButton>{children}</StyledInvisibleButton>
}
