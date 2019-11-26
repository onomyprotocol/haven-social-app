import React from 'react'
import styled, { css } from 'styled-components'

const MessageWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  justify-items: start;
  gap: 16px;

  ${({ own }) =>
    own &&
    css`
      grid-template-columns: 1fr;
      justify-items: end;
    `}

  & + & {
    margin-top: 24px;
  }
`

const Name = styled.strong`
  display: block;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 600;
`

const MessageTime = styled.span`
  font-size: 16px;
  color: #8991a1;
`

const BubbleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: end;
  gap: 16px;
`

const Bubble = styled.div`
  padding: 12px 16px;

  border-radius: 6px;
  background-color: ${p => (p.own ? '#f5f7fc' : '#fafafc')};

  line-height: 1.5;
`

export function ChatMessage({ own, avatar, name, time, message }) {
  if (own) {
    return (
      <MessageWrapper own>
        <BubbleWrapper>
          <MessageTime>{time}</MessageTime>
          <Bubble own>{message}</Bubble>
        </BubbleWrapper>
      </MessageWrapper>
    )
  } else {
    return (
      <MessageWrapper>
        {avatar}
        <div>
          <Name>{name}</Name>
          <BubbleWrapper>
            <Bubble>{message}</Bubble>
            <MessageTime>{time}</MessageTime>
          </BubbleWrapper>
        </div>
      </MessageWrapper>
    )
  }
}
