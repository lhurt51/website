import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Login',
  route: '/src/HeaderComponents/Login.js',
  issues: [
    {
      title: '#18 - Login',
      url: 'https://github.com/HighFivesFoundation/website/issues/18'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/login.png'
}

export const Login = () => <Placeholder {...taskInfo} />
