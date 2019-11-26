import React from 'react'
import styled from 'styled-components'

import { Panel, Avatar, InvisibleButton } from 'components/UI'
import { AttachIcon, PhotoIcon, EmotionIcon } from 'assets/icons'
import { FeedItem } from './FeedItem'
import { getColor } from 'utils/colors'

const Wrapper = styled.div`
  display: grid;
  gap: 24px;
`

const PanelContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 40px 1fr 32px 32px 32px;
  gap: 16px;

  margin: -4px 0;
  height: 40px;
`

const StyledInput = styled.input`
  height: 100%;
  padding: 0 8px;

  border: none;

  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: #9e9e9f;
  }

  &:focus {
    outline: 2px solid ${getColor('primary')};
    border: none;
  }
`

export function Feed() {
  return (
    <Wrapper>
      <Panel>
        <PanelContent>
          <Avatar src="https://picsum.photos/40" size="40" alt="" />
          <StyledInput type="text" placeholder="Create new publication" />
          <InvisibleButton>
            <AttachIcon />
          </InvisibleButton>
          <InvisibleButton>
            <PhotoIcon />
          </InvisibleButton>
          <InvisibleButton>
            <EmotionIcon />
          </InvisibleButton>
        </PanelContent>
      </Panel>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </Wrapper>
  )
}
