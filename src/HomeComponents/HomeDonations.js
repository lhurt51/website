import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Homepage Donations',
  route: '/src/HomeComponents/HomeDonations.js',
  issues: [
    {
      title: '#5 - Homepage',
      url: 'https://github.com/HighFivesFoundation/website/issues/5'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/donations.png'
}

export const HomeDonations = () => (
  <div>
    <Placeholder {...taskInfo} />
  </div>
)
