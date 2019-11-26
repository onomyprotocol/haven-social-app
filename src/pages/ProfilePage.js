import React from 'react'
import styled from 'styled-components'

import { Container } from '../components/UI'
import { ProfileInfo, ProfileStats, UserRankings, LatestStories, ProfileOverview } from '../components/Profile'
import { Feed } from '../components/Feed'
import { SideNav } from '../components/SideNav'

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  align-items: start;
`

const ProfileSidebar = styled.aside`
  display: grid;
  grid-template-rows: auto auto;
  gap: 24px;
`

const ProfileContent = styled.div`
  display: grid;
  grid-template: auto 1fr / 7fr 3fr;
  gap: 24px;
  align-items: start;
`

const ProfileStatsWrapper = styled.div`
  grid-column: 1/3;
`

const FeedWrapper = styled.div`
  display: grid;
  gap: 24px;
`

const RightSideBarWrapper = styled.div`
  display: grid;
  gap: 24px;
`

const menuItems = [
  {
    id: 'info',
    caption: 'Information'
  },
  {
    id: 'communities',
    caption: 'Communities'
  },
  {
    id: 'friends',
    caption: 'Friends'
  },
  {
    id: 'services',
    caption: 'Services'
  },
  {
    id: 'photos',
    caption: 'Photos'
  }
]

export default function ProfilePage() {
  return (
    <Container>
      <ProfileWrapper>
        <ProfileSidebar>
          <ProfileInfo />
          <SideNav nav={menuItems} />
        </ProfileSidebar>
        <ProfileContent>
          <ProfileStatsWrapper>
            <ProfileStats />
          </ProfileStatsWrapper>
          <FeedWrapper>
            <Feed />
          </FeedWrapper>
          <RightSideBarWrapper>
            <LatestStories />
            <ProfileOverview />
            <UserRankings />
          </RightSideBarWrapper>
        </ProfileContent>
      </ProfileWrapper>
    </Container>
  )
}
