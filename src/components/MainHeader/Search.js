import React from 'react'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  input {
    width: 350px;
    height: 48px;
    margin: 0;
    padding: 0 15px 0 72px;

    background-color: #3b64a7;
    border: none;
    border-radius: 28px;

    font-size: 16px;

    box-sizing: border-box;

    ::placeholder {
      color: #b7c6de;
    }

    &:focus {
      outline: 2px solid #fff;
      border: none;
    }
  }

  &::before {
    content: '';
    display: block;

    width: 24px;
    height: 24px;

    position: absolute;
    left: 24px;

    background-image: url(${require('assets/search.svg')});
  }
`

export function Search() {
  return (
    <SearchWrapper>
      <input type="text" placeholder="Search on Haven Social" />
    </SearchWrapper>
  )
}
