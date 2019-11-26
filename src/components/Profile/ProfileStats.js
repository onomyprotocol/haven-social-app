import React from 'react'
import styled from 'styled-components'

import { Panel, AccentButton } from 'components/UI'
import { BackArrowIcon, HeartIcon } from 'assets/icons'
import { getColor } from 'utils/colors'

const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  & > div + div {
    margin-left: 56px;
  }
`

const HorizontalDivider = styled.div`
  height: 1px;
  margin: 24px -32px;

  background-color: #dfe4ed;
  box-sizing: border-box;
`

const PhotosWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 163px;
    height: 150px;

    border-radius: 4px;
  }
`

const Stat = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 12px;

  > strong {
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 20px;

    > svg {
      margin-right: 8px;
    }
  }

  > span {
    font-size: 18px;
    font-weight: 400;
    color: ${getColor('secondary')};
  }
`

export function ProfileStats() {
  return (
    <>
      <Panel>
        <UpperWrapper>
          <BackArrowIcon />
          <StatsWrapper>
            <Stat>
              <strong>124k</strong>
              <span>Outreach</span>
            </Stat>
            <Stat>
              <strong>2`098</strong>
              <span>Supporters</span>
            </Stat>
            <Stat style={{ color: '#E86250' }}>
              <strong>
                <HeartIcon /> 10.5k
              </strong>
              <span style={{ color: '#E86250' }}>Favor</span>
            </Stat>
          </StatsWrapper>
          <AccentButton width={180}>Edit profile</AccentButton>
        </UpperWrapper>
        <HorizontalDivider />
        <PhotosWrapper>
          <img src="https://picsum.photos/163/150?random=20" alt="" />
          <img src="https://picsum.photos/163/150?random=21" alt="" />
          <img src="https://picsum.photos/163/150?random=22" alt="" />
          <img src="https://picsum.photos/163/150?random=23" alt="" />
          <img src="https://picsum.photos/163/150?random=24" alt="" />
          <img src="https://picsum.photos/163/150?random=25" alt="" />
          <img src="https://picsum.photos/163/150?random=26" alt="" />
        </PhotosWrapper>
      </Panel>
    </>
  )
}
