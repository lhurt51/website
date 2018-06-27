import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Homepage Events',
  route: '/src/HomeComponents/HomeEvents.js',
  issues: [
    {
      title: '#5 - Homepage',
      url: 'https://github.com/HighFivesFoundation/website/issues/5'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/events.png'
}

export const HomeEvents = () => (
  <div>
    <Placeholder {...taskInfo} />
  </div>
)
