import React from 'react'
import styled from 'styled-components'

import { Avatar, InvisibleButton } from 'components/UI'
import { ChatIcon, ChevronRight, PlusIcon } from 'assets/icons'
import { getColor } from 'utils/colors'

const StyledChatsHavens = styled.div`
  display: grid;
  grid-template-rows: 32px 48px 1fr 32px;
  gap: 24px;
  align-items: start;
  justify-items: center;

  padding: 24px 0;

  background-color: ${getColor('bgLight')};
  border-radius: 4px 0 0 4px;
`

const PrivateChatsIcon = styled.button`
  width: 48px;
  height: 48px;

  background-color: #fafafc;
  border: none;
  border-radius: 50%;
`

const HavensList = styled.div`
  display: grid;
  gap: 24px;
  justify-items: center;
`

export function ChatsHavens() {
  return (
    <StyledChatsHavens>
      <InvisibleButton>
        <ChevronRight />
      </InvisibleButton>
      <PrivateChatsIcon>
        <ChatIcon></ChatIcon>
      </PrivateChatsIcon>
      <HavensList>
        <Avatar src="https://picsum.photos/48?random=1" />
        <Avatar src="https://picsum.photos/48?random=2" />
        <Avatar src="https://picsum.photos/48?random=3" />
      </HavensList>
      <div>
        <PlusIcon />
      </div>
    </StyledChatsHavens>
  )
}
