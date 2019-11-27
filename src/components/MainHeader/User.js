import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//import { avatarImage } from '../../assets/sample-user.png'
import { Avatar } from 'components/UI'

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export function User() {
  return (
    <UserWrapper>
      <Link to="/profile">
        <Avatar size="48" src="https://picsum.photos/140" alt="" />
      </Link>
    </UserWrapper>
  )
}
