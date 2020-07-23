/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import $Main from './containers/transition-animations/AnimatedMain'

import pBody from 'assets/images/main/p-body.jpg'
import atlas from 'assets/images/main/atlas.jpg'

import './styles/main-general.scss'

export default function Main({ isScrollEvent }) {
  return (
    <>
      <$Main subscribe={isScrollEvent} className="main-wrapper main-container">
        <div className="main-block main-block-1">
          <img className="main-image" src={pBody} alt="p-body" />
        </div>

        <div className="main-block main-block-2">
          <img className="main-image" src={atlas} alt="atlas" />
        </div>

        <div className="main-block main-block-3">
          <img className="main-image" src={atlas} alt="atlas" />
        </div>
      </$Main>
    </>
  )
}
