import React, { useState } from 'react'
import styled from 'styled-components'

import { getColor } from 'utils/colors'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  padding: 32px 40px;

  background-color: #fff;
  border: 1px solid #dfe4ed;
  border-radius: 4px;

  a + a {
    margin-top: 32px;
  }
`

const SideNavItem = styled.a`
  position: relative;

  font-size: 18px;
  color: ${p => (p.active ? getColor('primary') : getColor('secondary'))};
  text-decoration: none;

  transition: color 0.2s ease;
  cursor: pointer;

  & + & {
    margin-top: 32px;
  }

  &:hover {
    color: #5c8ddb;
  }

  &::after {
    content: '';
    display: ${p => (p.active ? 'block' : 'none')};

    height: 21px;
    width: 4px;

    position: absolute;
    top: 0;
    right: -40px;

    background-color: ${getColor('primary')};
  }
`

export function SideNav({ nav }) {
  const [activeTab, setActiveTab] = useState(nav[0].id)

  const handleTabChange = newTab => setActiveTab(newTab)

  return (
    <StyledNav>
      {nav.map(item => (
        <SideNavItem key={item.id} onClick={() => handleTabChange(item.id)} active={activeTab === item.id}>
          {item.caption}
        </SideNavItem>
      ))}
    </StyledNav>
  )
}
