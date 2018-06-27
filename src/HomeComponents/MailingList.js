import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Mailing List',
  route: '/src/HomeComponents/MailingList.js',
  issues: [
    {
      title: '#11 - Homepage Video',
      url: 'https://github.com/HighFivesFoundation/website/issues/11'
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
