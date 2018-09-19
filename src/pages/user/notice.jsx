import React from 'react';

const Notice = (props) => (
  <div className={`notice ${!props.active && 'hide'}`}>
    没有消息
  </div>
);

export default Notice;
