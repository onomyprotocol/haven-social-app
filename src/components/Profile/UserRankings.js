import React from 'react'
import styled from 'styled-components'

import { Panel, Caption, Button, Avatar } from 'components/UI'
import { StarIcon } from 'assets/icons'
import { getColor } from 'utils/colors'

const Ranking = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 90px;
  align-items: center;
  gap: 16px;

  margin-top: 24px;
`

const RankingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`

const HavenName = styled.span``

const RankingNumber = styled.span`
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 4px;

  margin-top: 4px;

  font-size: 14px;
  color: ${getColor('secondary')};
  font-weight: 400;

  svg {
    width: 16px;
    height: 16px;
  }
`

const sampleData = [
  {
    id: 1,
    havenName: 'Crypto info Haven',
    havenAvatar: 'https://picsum.photos/48?random=10',
    ranking: 21,
    total: 20391
  },
  {
    id: 2,
    havenName: 'Infinity Solutions',
    havenAvatar: 'https://picsum.photos/48?random=11',
    ranking: 34,
    total: 33102
  },
  {
    id: 3,
    havenName: 'Eagleknife',
    havenAvatar: 'https://picsum.photos/48?random=12',
    ranking: 151,
    total: 43084
  },
  {
    id: 4,
    havenName: 'Lionbird std',
    havenAvatar: 'https://picsum.photos/48?random=13',
    ranking: 421,
    total: 18309
  }
]

export function UserRankings() {
  return (
    <Panel>
      <Caption>User's Top Haven Rankings</Caption>

      {sampleData.map(item => (
        <Ranking key={item.id}>
          <Avatar src={item.havenAvatar} size="48" alt="" />
          <RankingContent>
            <HavenName>{item.havenName}</HavenName>
            <RankingNumber>
              <StarIcon />
              {item.ranking} of {item.total}
            </RankingNumber>
          </RankingContent>
          <Button>Join</Button>
        </Ranking>
      ))}
    </Panel>
  )
}
