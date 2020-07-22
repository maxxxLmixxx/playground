/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import $Main from './containers/transition-animations/AnimatedMain'

import './styles/main-general.scss'

export default function ({ isScrollEvent }) {
  return (
    <>
      <$Main subscribe={isScrollEvent} className="main-container" />
    </>
  )
}
