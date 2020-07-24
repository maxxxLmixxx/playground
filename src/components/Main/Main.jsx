/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import $Main from './containers/transition-animations/AnimatedMain'

import pBody from 'assets/images/main/p-body.jpg'
import atlas from 'assets/images/main/atlas.jpg'
import turret from 'assets/images/main/turret.png'

import './styles/main-general.scss'

export default function Main({ isScrollEvent }) {
  return (
    <>
      <$Main subscribe={isScrollEvent} className="main-wrapper main-container">
        <div className="main-block main-block-1">
          <img className="main-image white-shadow" src={pBody} alt="p-body" />
          <p>
            P-body (referred to as Orange by GLaDOS), is Atlas' tall and wiry partner in testing, and is one of the two
            playable android Test Subjects built by GLaDOS for the Cooperative Testing Initiative in Portal 2, which was
            devised to phase out human testing. Gameplay-wise, P-body is played by the guest of the Co-op session; the
            player that receives an invitation, or the second player on a home console in split-screen mode.
          </p>
        </div>

        <div className="main-block main-block--reverse main-block-2">
          <img className="main-image" src={atlas} alt="atlas" />
          <p>
            Atlas (referred to as Blue by GLaDOS), is P-body's short and stout companion, and is one of two playable
            android Test Subjects built by GLaDOS for her Cooperative Testing Initiative, which was devised to phase out
            human testing. Gameplay-wise, Atlas is played by the host of the Co-op session; the player that sends an
            invitation.
          </p>
        </div>

        <div className="main-block main-block-3">
          <img className="main-image" src={turret} alt="atlas" />
          <p>
            Turrets serve as one of the main testing obstacles in the Portal series. Armed with almost unlimited
            ammunition and deadly accuracy, they will attempt to kill test subjects on sight. Standard Sentry Turrets
            are voiced by Ellen McLain, while Defective Turrets are voiced by Nolan North.
          </p>
        </div>
      </$Main>
    </>
  )
}
