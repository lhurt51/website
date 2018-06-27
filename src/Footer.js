import React from 'react'
import { Placeholder } from './Placeholder'

const taskInfo = {
  title: 'Footer',
  route: '/src/Footer.js',
  issues: [
    {
      title: '#7 - Footer',
      url: 'https://github.com/HighFivesFoundation/website/issues/7'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/footer.png'
}

export const Footer = () => (
  <footer>
    <h1 style={{ color: '#24248f' }}>Footer Component</h1>
    <Placeholder {...taskInfo} />
  </footer>
)
