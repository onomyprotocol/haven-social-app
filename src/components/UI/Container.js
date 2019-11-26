import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 1680px;
  max-width: 100%;
  margin: 0 auto;

  box-sizing: border-box;

  @media screen and (max-width: 1920px) {
    padding: 0 15px;
  }
`

export function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
