import React from 'react'
import styled from 'styled-components'

import { Panel, Avatar } from 'components/UI'
import { getColor } from 'utils/colors'

const AvatarWrapper = styled.div`
  margin: 0 auto 20px;

  text-align: center;
`

const UserName = styled.h4`
  margin: 0 0 10px;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const UserNickname = styled.span`
  display: block;

  color: ${getColor('secondary')};
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`

export function ProfileInfo() {
  return (
    <Panel>
      <AvatarWrapper>
        <Avatar src="https://picsum.photos/143" size="143" alt="" hasStory />
      </AvatarWrapper>
      <UserName>Skyler Xu</UserName>
      <UserNickname>@skylerxurulez</UserNickname>
    </Panel>
  )
}
