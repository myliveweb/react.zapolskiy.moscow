import React from 'react';
import VideoStyled from './Video'

export default function FirstScreen() {

  return (
    <>
      <VideoStyled />
	    <section id="home" className="pfblock-image screen-height">
        <div className="home-overlay"></div>
        <div className="grid">
          <div className="item item-1">
            <div className="link jquery"><a href="https://zapolskiy.moscow/">Laravel (Core JQuery)</a></div>
            <div className="react"><span>React.js (Core React.js)</span></div>
            <div className="link nuxt"><a href="https://nuxt.zapolskiy.moscow/">Vue.js (Core Nuxt.js SSR)</a></div>
            <div className="link angular"><a href="https://angular.zapolskiy.moscow/">Angular (Core Angular 12)</a></div>
            <div className="link nextjs"><a href="https://next.zapolskiy.moscow/">React.js (Core Next.js SSR)</a></div>
          </div>
          <div className="item item-2">
            <div>Тел: <b>+7 962 206-4142</b></div>
          </div>
          <div className="item item-3">
            <div id="mi-face"></div>
            <div className="intro-new">
            <h1>Разработка сайтов</h1>
            <div className="start">Просто сделай это</div>
          </div>
          </div>
          <div className="item item-4">
            <a href="#services">
              <div className="scroll-down-new">
                <span>
                  <i className="fa fa-angle-down fa-2x"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
	    </section>
    </>
  )
}