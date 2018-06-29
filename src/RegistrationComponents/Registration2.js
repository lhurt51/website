import React from 'react'
import { Placeholder } from '../Placeholder'
import { RegistrationNav } from './RegistrationNav'

const taskInfo = {
  title: 'Registration',
  route: '/src/HomeComponents/Registration.js',
  issues: [
    {
      title: '#9 - Athlete Application Form',
      url: 'https://github.com/HighFivesFoundation/website/issues/9'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/page-2.png'
}

export const Registration2 = () => (
  <main>
    <h1 style={{ color: '#568f56' }}>Page Two of Registration</h1>
    <div>
      This is the second step of the form
      <RegistrationNav />
      <Placeholder {...taskInfo} />
    </div>
  </main>
)
