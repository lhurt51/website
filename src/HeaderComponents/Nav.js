import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Nav',
  route: '/src/HeaderComponents/Nav.js',
  issues: [
    {
      title: '#6 - Navigation',
      url: 'https://github.com/HighFivesFoundation/website/issues/6'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/nav.png'
}

export const Nav = () => (
  <nav>
    <Placeholder {...taskInfo} />
  </nav>
)
