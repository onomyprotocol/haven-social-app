import React from 'react'
import styled from 'styled-components'

import { Avatar, Panel, Caption, SmallLink } from 'components/UI'
import { getColor } from 'utils/colors'

const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 24px;

  > img {
    width: 56px;
    height: 56px;
    padding: 4px;

    border-radius: 50%;
    border: 2px solid ${getColor('primary')};
    cursor: pointer;
  }
`

const AddStory = styled.div`
  position: relative;

  > img {
    width: 56px;
    height: 56px;
    padding: 4px;

    border-radius: 50%;
    border: 2px dashed ${getColor('primary')};
    cursor: pointer;
  }

  &::after {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    position: absolute;
    right: 0;
    bottom: 0;

    background-color: ${getColor('primary')};
    border-radius: 50%;

    color: #fff;
    font-size: 30px;
    font-weight: 400;
    cursor: pointer;
  }
`

export function LatestStories() {
  return (
    <Panel>
      <UpperWrapper>
        <Caption>My Latest Stories</Caption>
        <SmallLink>View all 12</SmallLink>
      </UpperWrapper>
      <StoriesWrapper>
        <AddStory>
          <img src="https://picsum.photos/56?random=1" alt="" />
        </AddStory>
        <Avatar hasStory size="56" src="https://picsum.photos/56?random=2" alt="" />
        <Avatar hasStory size="56" src="https://picsum.photos/56?random=3" alt="" />
        <Avatar hasStory size="56" src="https://picsum.photos/56?random=4" alt="" />
      </StoriesWrapper>
    </Panel>
  )
}
