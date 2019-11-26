import React from 'react'
import styled from 'styled-components'

import { Container } from '../components/UI'
import { ChatsHavens, ChatsChannels, ChatsContent, ChatsSidebar } from '../components/Chats'

const ChatsWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 390px 1fr 350px;

  height: 930px;
`

export default function ChatsPage() {
  return (
    <Container>
      <ChatsWrapper>
        <ChatsHavens />
        <ChatsChannels />
        <ChatsContent />
        <ChatsSidebar />
      </ChatsWrapper>
    </Container>
  )
}
