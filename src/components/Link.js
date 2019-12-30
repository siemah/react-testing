import React, { useState, } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default function Link({ to, children, }) {

  const [className, setClassName] = useState(STATUS.NORMAL);

  const _onMouseEnter = () => {
    setClassName(STATUS.HOVERED)
  }
  const _onMouseLeave = () => {
    setClassName(STATUS.NORMAL);
  }

  return (
    <a href={to} className={className} onMouseEnter={_onMouseEnter} onMouseLeave={_onMouseLeave}>
      {children}
    </a>
  )
}
