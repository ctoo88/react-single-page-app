import React from 'react';

const Icon = (props) => (
  <svg width="30" height="30" fill="white">
    <use xlinkHref={props.name} className={props.active ? 'hide' : ''}></use>
    {props.fillName &&
      <use xlinkHref={props.fillName} className={!props.active ? 'hide' : ''}></use>}
  </svg>
);

export default Icon;
