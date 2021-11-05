import React from 'react';

export default function VideoStyled() {
  return (
    <video id="vid" loop muted name="media" autoPlay>
        <source src="assets/video/6.mp4" type="video/mp4" />
    </video>
  )
}