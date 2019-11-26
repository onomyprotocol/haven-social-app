import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Avatar } from '../UI'

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export function User() {
  return (
    <UserWrapper>
      <Link to="/profile">
        <Avatar src={require('assets/sample-user.png')} alt="" size="48" />
      </Link>
    </UserWrapper>
  )
}
