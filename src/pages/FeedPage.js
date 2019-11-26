import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/UI'
import { Feed } from '../components/Feed'
import { SideNav } from '../components/SideNav'
import { LatestStories } from '../components/Profile/LatestStories'

const FeedPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px auto 408px;
  align-items: start;
  gap: 24px;
`

const menuItems = [
  {
    id: 'latest_posts',
    caption: 'Latest posts'
  },
  {
    id: 'most_popular',
    caption: 'Most popular'
  },
  {
    id: 'recommendations',
    caption: 'Recommendations'
  }
]

export default function FeedPage() {
  return (
    <Container>
      <FeedPageWrapper>
        <SideNav nav={menuItems} />
        <Feed />
        <LatestStories />
      </FeedPageWrapper>
    </Container>
  )
}
