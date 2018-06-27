import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'What is High Fives?',
  route: '/src/HomeComponents/WhatIs.js',
  issues: [
    {
      title: '#5 - Homepage',
      url: 'https://github.com/HighFivesFoundation/website/issues/5'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/whatis.png'
}

export const WhatIs = () => (
  <div>
    <Placeholder {...taskInfo} />
  </div>
)
