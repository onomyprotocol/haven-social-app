import React from 'react';
import { MembersList } from '../MembersList';
import { Avatar } from '../Avatar';

export default {
  component: MembersList,
  title: 'UI/MembersList',
};

export const defaultState = () => (
  <div style={{ width: 250 }}>
    <MembersList more={123}>
      <Avatar src="https://picsum.photos/80?random=1" size={40} />
      <Avatar src="https://picsum.photos/80?random=2" size={40} />
      <Avatar src="https://picsum.photos/80?random=3" size={40} />
      <Avatar src="https://picsum.photos/80?random=4" size={40} />
    </MembersList>
  </div >
);