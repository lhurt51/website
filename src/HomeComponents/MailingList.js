import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Mailing List',
  route: '/src/HomeComponents/MailingList.js',
  issues: [
    {
      title: '#22 - Mailing List',
      url: 'https://github.com/HighFivesFoundation/website/issues/22'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/mailinglist.png'
}

export const MailingList = () => (
  <div>
    <Placeholder {...taskInfo} />
  </div>
)
