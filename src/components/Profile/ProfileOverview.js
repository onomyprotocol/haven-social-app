import React from 'react'
import styled from 'styled-components'

import { Panel, Avatar, MembersList } from 'components/UI'
import { getColor } from 'utils/colors'

const Description = styled.p`
  margin: 0 0 32px;

  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #36364b;
`

const FieldGroup = styled.div`
  margin-top: 24px;
`

const FieldTitle = styled.h6`
  margin: 0 0 8px;

  color: ${getColor('secondary')};
  font-size: 14px;
  font-weight: 500;
`

const FieldValue = styled.strong`
  font-size: 16px;
  font-weight: 600;
  color: #36364b;
`

export function ProfileOverview() {
  return (
    <Panel>
      <Description>
        Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she
        elderly beloved him affixed noisier yet. An course regard to up he hardly. View four has said does men saw find
        dear shy. Talent men wicket add garden.
      </Description>
      <FieldGroup>
        <FieldTitle>Location</FieldTitle>
        <FieldValue>London, UK</FieldValue>
      </FieldGroup>
      <FieldGroup>
        <FieldTitle>Birthdate</FieldTitle>
        <FieldValue>10 Feb 1993</FieldValue>
      </FieldGroup>
      <FieldGroup>
        <FieldTitle>Friends</FieldTitle>
        <MembersList more={520}>
          <Avatar size="48" src="https://picsum.photos/48?random=1" alt="" />
          <Avatar size="48" src="https://picsum.photos/48?random=2" alt="" />
          <Avatar size="48" src="https://picsum.photos/48?random=3" alt="" />
          <Avatar size="48" src="https://picsum.photos/48?random=4" alt="" />
          <Avatar size="48" src="https://picsum.photos/48?random=5" alt="" />
        </MembersList>
      </FieldGroup>
    </Panel>
  )
}
