import React from 'react'
import styled from 'styled-components'

import { Avatar, InvisibleButton, Status, DataPair } from 'components/UI'
import { CogIcon, SearchIcon, MicOffIcon } from 'assets/icons'
import { ChannelGroup } from './Channel'
import { sampleData } from './data/channels'
import { getColor } from 'utils/colors'

const StyledChatsChannels = styled.div`
  display: grid;
  grid-template-rows: 72px 50px 1fr 80px;

  background-color: #fff;

  border: 1px solid #dfe4ed;
  border-right: none;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: 40px 1fr 32px;
  align-items: center;
  gap: 16px;

  padding: 16px 24px;

  background-color: #fafafc;
  border-bottom: 1px solid #dfe4ed;
`

const Tabs = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  padding: 0 24px;

  background-color: #fafafc;
  border-bottom: 1px solid #dfe4ed;

  color: ${getColor('secondary')};

  span + span {
    margin-left: 32px;
  }
`

const Content = styled.div`
  padding: 24px 8px;

  border-top: 1px solid #dfe4ed;
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 40px 1fr auto auto;
  align-items: center;
  gap: 16px;

  padding: 16px 24px;

  background-color: #fafafc;
  border-top: 1px solid #dfe4ed;
`

export function ChatsChannels() {
  return (
    <StyledChatsChannels>
      <Header>
        <Avatar src="https://picsum.photos/80?random=6" size="40" />
        <DataPair title="Crypto Haven" desc="12 channels 293 users" />
        <InvisibleButton>
          <SearchIcon />
        </InvisibleButton>
      </Header>
      <Tabs>
        <span>All</span>
        <span>Favorites</span>
        <span>People</span>
        <span>Premium</span>
      </Tabs>
      <Content>
        {sampleData.map(group => (
          <ChannelGroup key={group.id} data={group} />
        ))}
      </Content>
      <Footer>
        <Avatar src="https://picsum.photos/80?random=3" size="40" />
        <DataPair title="Michael" desc={<Status status="online" />} />
        <InvisibleButton>
          <MicOffIcon />
        </InvisibleButton>
        <InvisibleButton>
          <CogIcon />
        </InvisibleButton>
      </Footer>
    </StyledChatsChannels>
  )
}
