import React from 'react';

export default function MenuItem({item}) {
  return (
    <li>
      {item.topLink
        ? <a href={item.link} style={{fontSize: '12px'}}>{item.name}</a>
        : <a href={item.link} style={{fontSize: '12px'}}>{item.name}</a>
      }
    </li>
  )
}