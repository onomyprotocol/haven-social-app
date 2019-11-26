import React from 'react'
import styled from 'styled-components'

const StyledDivider = styled.div`
  height: ${p => p.dividerHeight}px;
  width: 1px;

  background-color: #DFE4ED;
`

export function Divider({ dividerHeight }) {
  return (
    <StyledDivider dividerHeight={dividerHeight} />
  )
}
