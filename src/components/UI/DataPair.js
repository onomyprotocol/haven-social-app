import React from 'react'
import styled from 'styled-components'
import { getColor } from 'utils/colors'

const Title = styled.p`
  margin: 0;

  font-size: 16px;
  font-weight: 500;
`

const Desc = styled.p`
  margin: 4px 0 0;

  font-size: 14px;
  color: ${getColor('secondary')};
`
export function DataPair({ title, desc }) {
  return (
    <div>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </div>
  )
}
