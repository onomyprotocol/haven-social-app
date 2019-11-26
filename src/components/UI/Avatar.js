import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  padding: ${p => (p.hasStory ? 8 : 0)}px;

  border-radius: 50%;

  border: ${p => (p.hasStory ? '3px solid #4877c1' : 'none')};
`

export function Avatar(props) {
  return <StyledAvatar {...props} />
}
