/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import $Main from './containers/transition-animations/AnimatedMain'

import pBody from 'assets/images/main/p-body.jpg'
import atlas from 'assets/images/main/atlas.jpg'

import './styles/main-general.scss'

export default function Main({ isScrollEvent }) {
  return (
    <>
      <$Main subscribe={isScrollEvent} className="main-container">
        <img className="main-image main-image--left" src={pBody} alt="p-body"/>
        <img className="main-image main-image--right" src={atlas} alt="atlas" />
      </$Main>
    </>
  )
}
