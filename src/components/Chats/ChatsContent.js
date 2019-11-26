import React from 'react'
import styled from 'styled-components'

import { BellIcon, AttachIcon, DonateIcon, PhotoIcon, EmotionIcon, MicIcon, PinIcon, LockAltIcon } from 'assets/icons'
import { Avatar, DataPair, InvisibleButton } from 'components/UI'
import { ChatMessage } from './ChatMessage'
import { getColor } from 'utils/colors'
import { sampleMessages } from './data/messages'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 72px 1fr 80px;
  background-color: #fff;

  border: 1px solid #dfe4ed;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: 40px 1fr auto auto;
  align-items: center;
  gap: 16px;

  padding: 0 32px;

  border-bottom: 1px solid #dfe4ed;
`

const ChannelDesc = styled.span`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px;
`

const Content = styled.div`
  padding: 32px;
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 16px;
  align-items: center;

  padding: 0 32px;

  border-top: 1px solid #dfe4ed;
`

const MessageInput = styled.input`
  padding: 10px;

  border: none;

  font-size: 18px;

  ::placeholder {
    color: #bcc1cc;
  }

  &:focus {
    outline: 2px solid ${getColor('primary')};
    border: none;
  }
`

const MessageControls = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 16px;
`

export function ChatsContent() {
  return (
    <Wrapper>
      <Header>
        <Avatar src="https://picsum.photos/40" size="40" />
        <DataPair
          title="Blockchain QA"
          desc={
            <ChannelDesc>
              <LockAltIcon />
              Locked Channel
            </ChannelDesc>
          }
        />
        <InvisibleButton>
          <BellIcon />
        </InvisibleButton>
        <InvisibleButton>
          <PinIcon />
        </InvisibleButton>
      </Header>
      <Content>
        {sampleMessages.map(message => (
          <ChatMessage
            own={message.own}
            avatar={<Avatar src={message.avatarUrl} size="40" />}
            name={message.name}
            time={message.time}
            message={message.message}
          />
        ))}
      </Content>
      <Footer>
        <InvisibleButton>
          <AttachIcon />
        </InvisibleButton>
        <MessageInput type="text" placeholder="Write a message" />
        <MessageControls>
          <InvisibleButton>
            <DonateIcon />
          </InvisibleButton>
          <InvisibleButton>
            <PhotoIcon />
          </InvisibleButton>
          <InvisibleButton>
            <EmotionIcon />
          </InvisibleButton>
          <InvisibleButton>
            <MicIcon />
          </InvisibleButton>
        </MessageControls>
      </Footer>
    </Wrapper>
  )
}
