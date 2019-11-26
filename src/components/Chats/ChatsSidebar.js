import React from 'react'
import styled from 'styled-components'

import { Avatar, AccentButton, MembersList } from 'components/UI'
import { LockAltIcon, ChevronDown, ChannelInfoIcon } from 'assets/icons'
import { getColor } from 'utils/colors'

const ChannelInfo = styled.div`
  display: grid;
  grid-template-rows: 72px 1fr;

  background-color: #fff;

  border: 1px solid #dfe4ed;
  border-left: none;
`

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  justify-items: center;
  gap: 32px;

  padding: 32px;
`

const ChannelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChannelName = styled.span`
  font-weight: 600;
  font-size: 20px;
`

const ChannelDesc = styled.span`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px;

  margin-top: 8px;

  font-weight: 300;
  color: ${getColor('secondary')};
  font-size: 14px;
`

const Paragraph = styled.p`
  max-height: 200px;
  margin: 0;

  color: ${getColor('secondary')};
  font-size: 16px;
  line-height: 1.56;
`

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 60px;

  width: 100%;
`

const InfoCaption = styled.span`
  margin-bottom: 8px;

  color: ${getColor('secondary')};
  font-size: 14px;
`

const InfoValue = styled.strong`
  font-size: 16px;
  font-weight: 600;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr 24px;
  align-items: center;
  gap: 16px;

  padding: 0 32px;

  border-bottom: 1px solid #dfe4ed;
`

export function ChatsSidebar() {
  return (
    <ChannelInfo>
      <Header>
        <ChannelInfoIcon />
        <span>Channel Info</span>
        <ChevronDown />
      </Header>
      <Content>
        <Avatar hasStory src="https://picsum.photos/140" size="140" />
        <ChannelWrapper>
          <ChannelName>Blockchain QA</ChannelName>
          <ChannelDesc>
            <LockAltIcon />
            Locked Channel
          </ChannelDesc>
        </ChannelWrapper>
        <AccentButton width="180">Edit channel</AccentButton>
        <Paragraph>
          Starship test vehicle under assembly will look similar to this illustration when finished. Operational
          Starships would obv have windows, etc. Blind would equal while oh mr do style. Lain led and fact none. One
          preferred sportsmen resolving the happiness continued. High at of in loud rich true.
        </Paragraph>
        <InfoWrapper>
          <Info>
            <InfoCaption>Voice</InfoCaption>
            <InfoValue>Disabled</InfoValue>
          </Info>
          <Info>
            <InfoCaption>Members</InfoCaption>
            <InfoValue>921</InfoValue>
          </Info>
        </InfoWrapper>
        <Info>
          <InfoCaption>Members List</InfoCaption>
          <MembersList more={287}>
            <Avatar size="48" src="https://picsum.photos/48?random=1" alt="" />
            <Avatar size="48" src="https://picsum.photos/48?random=2" alt="" />
            <Avatar size="48" src="https://picsum.photos/48?random=3" alt="" />
            <Avatar size="48" src="https://picsum.photos/48?random=4" alt="" />
          </MembersList>
        </Info>
      </Content>
    </ChannelInfo>
  )
}
