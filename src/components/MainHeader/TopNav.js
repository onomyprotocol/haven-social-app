import React from 'react'
import styled from 'styled-components'

const StyledTopNav = styled.nav`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 0 auto;
`

const TopNavItem = styled.a`
  opacity: 0.5;

  font-size: 18px;
  color: #fff;
  text-decoration: none;

  transition: color 0.2s ease;

  & + & {
    margin-left: 32px;
  }

  &:hover {
    opacity: 1;
  }
`

export default function TopNav() {
  return (
    <StyledTopNav>
      <TopNavItem href="/feed">Feed</TopNavItem>
      <TopNavItem href="#">Havens</TopNavItem>
      <TopNavItem href="#">Wallet</TopNavItem>
      <TopNavItem href="#">Events</TopNavItem>
      <TopNavItem href="#">Hash</TopNavItem>
    </StyledTopNav>
  )
}
