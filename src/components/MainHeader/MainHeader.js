import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container } from '../UI'
import { LogoWhite } from '../../assets/LogoWhite'
import { Search } from './Search'
import { User } from './User'
import TopNav from './TopNav'
import HeaderWidgets from './HeaderWidgets'

const HeaderWrapper = styled.header`
  margin-bottom: 40px;

  background-color: #436fb5;
  border-bottom: 1px solid #dfe4ed;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 72px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// We have to use HeaderSegment with fixed width here, to ensure centered TopNav.
// If for some reason we will need to drop these wrappers, use absolute positioned TopNav.
const HeaderSegment = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 24px;

  width: 350px;
`

export default function MainHeader() {
  return (
    <HeaderWrapper>
      <Container>
        <StyledHeader>
          <HeaderSegment>
            <LogoWrapper>
              <Link to="/">
                <LogoWhite />
              </Link>
            </LogoWrapper>
            <Search />
          </HeaderSegment>

          <TopNav />

          <HeaderSegment>
            <HeaderWidgets />
            <User />
          </HeaderSegment>
        </StyledHeader>
      </Container>
    </HeaderWrapper>
  )
}
