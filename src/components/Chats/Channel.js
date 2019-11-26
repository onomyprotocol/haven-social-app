import React from 'react'
import styled from 'styled-components'

import { Avatar, NotificationsBadge, DataPair } from 'components/UI'
import { LockIcon, SoundIcon, SmallPlusIcon, ChevronDown } from 'assets/icons'
import { getColor } from 'utils/colors'

const StyledChannel = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr auto;
  align-items: center;
  gap: 16px;

  padding: 8px 12px;

  border-radius: 4px;
  background-color: ${p => (p.active ? getColor('bgLight') : 'transparent')};
`

const ChannelIcons = styled.div`
  display: flex;
  align-items: center;

  svg + svg {
    margin-left: 10px;
  }
`

const StyledChannelGroup = styled.div`
  & + & {
    margin-top: 24px;
  }
`

const ChannelGroupTitle = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  align-items: center;
  gap: 8px;

  margin-bottom: 20px;
  padding: 0 8px;

  color: ${getColor('secondary')};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`

export function ChannelGroup({ data }) {
  return (
    <StyledChannelGroup>
      <ChannelGroupTitle>
        <ChevronDown />
        {data.name}
        <SmallPlusIcon />
      </ChannelGroupTitle>
      <div>
        {data.channels.map(channel => (
          <Channel key={channel.id} data={channel} />
        ))}
      </div>
    </StyledChannelGroup>
  )
}

export function Channel({ data }) {
  const { active, name, members, locked, voice, unread, direct, avatar } = data
  return (
    <StyledChannel active={active}>
      <Avatar src={avatar} size="40" />
      <DataPair title={name} desc={members + ' members'} />
      <ChannelIcons>
        {locked && <LockIcon />}
        {voice && <SoundIcon />}
        {unread > 0 && <NotificationsBadge count={unread} direct={direct} />}
      </ChannelIcons>
    </StyledChannel>
  )
}
