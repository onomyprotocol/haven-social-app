import React from 'react'
import styled from 'styled-components'

import { Panel, Divider, Avatar, InvisibleButton } from 'components/UI'
import { ChatIcon, ShareIcon, StarIcon, DonateIcon, DotsIcon, CoinIcon } from 'assets/icons'
import { getColor } from 'utils/colors'

const FeedItemHeader = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 64px 1fr auto;
  gap: 24px;
`

const FeedItemContent = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #36364b;
  font-weight: 400;

  img {
    border-radius: 4px;
  }
`

const FeedAuthor = styled.div`
  display: flex;
  flex-direction: column;
`

const FeedItemName = styled.span`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 400;
`

const FeedItemDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${getColor('secondary')};
`

const FeedItemFooter = styled.footer`
  display: grid;
  grid-template-columns: auto 1px 1fr auto auto 32px;
  align-items: center;
  gap: 24px;

  margin-top: 24px;
`

const Currency = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  gap: 8px;
  grid-template-columns: 24px auto auto;

  color: ${getColor('secondary')};
`

const FeedCounter = styled.span`
  display: flex;
  align-items: center;

  color: ${getColor('secondary')};
  font-size: 18px;

  span {
    margin-left: 8px;
  }
`

const DonateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 0;

  background-color: ${getColor('bgLight')};
  border: none;
  border-radius: 4px;

  cursor: pointer;
`

export function FeedItem() {
  return (
    <Panel>
      <FeedItemHeader>
        <Avatar src="https://picsum.photos/64" size="64" alt="" />
        <FeedAuthor>
          <FeedItemName>Skyler Xu</FeedItemName>
          <FeedItemDate>2:30 PM, Jan 5</FeedItemDate>
        </FeedAuthor>
        <InvisibleButton>
          <DotsIcon />
        </InvisibleButton>
      </FeedItemHeader>

      <FeedItemContent>
        <p>
          Starship test vehicle under assembly will look similar to this illustration when finished. Operational
          Starships would obv have windows, etc.
        </p>
        <img src="https://picsum.photos/848/241" alt="" />
      </FeedItemContent>

      <FeedItemFooter>
        <FeedCounter>
          <DonateButton>
            <DonateIcon />
          </DonateButton>
          <span>22k</span>
        </FeedCounter>

        <Divider dividerHeight={32} />

        <Currency>
          <InvisibleButton style={{ height: 24 }}>
            <CoinIcon />
          </InvisibleButton>
          <span>50</span>
          <span style={{ color: '#BCC1CC' }}>$301.44</span>
        </Currency>

        <FeedCounter>
          <InvisibleButton>
            <ChatIcon />
          </InvisibleButton>
          <span>7.2k</span>
        </FeedCounter>
        <FeedCounter>
          <InvisibleButton>
            <ShareIcon />
          </InvisibleButton>
          <span>7.2k</span>
        </FeedCounter>

        <InvisibleButton>
          <StarIcon />
        </InvisibleButton>
      </FeedItemFooter>
    </Panel>
  )
}
