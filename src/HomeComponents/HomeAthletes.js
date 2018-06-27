import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Homepage Athletes',
  route: '/src/HomeComponents/HomeAthletes.js',
  issues: [
    {
      title: '#5 - Homepage',
      url: 'https://github.com/HighFivesFoundation/website/issues/5'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/athletes.png'
}

export const HomeAthletes = () => (
  <div>
    <Placeholder {...taskInfo} />
  </div>
)
