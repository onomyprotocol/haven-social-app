import React from 'react'
import styled from 'styled-components'

const StyledPanel = styled.div`
  padding: 24px 32px;

  border: 1px solid #dfe4ed;
  background-color: #fff;
  border-radius: 4px;

  box-sizing: border-box;
`

export function Panel({ children }) {
  return <StyledPanel>{children}</StyledPanel>
}
