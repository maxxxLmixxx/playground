/* eslint-disable react/jsx-pascal-case */
import React, { useRef } from 'react'
import { useSpring, useChain, animated } from 'react-spring'

//files
import ReactLogo from '../../assets/images/react-logo.png'
import Arrow from '../../assets/images/down-arrow.svg'
import PortalLogo from 'assets/images/portal-logo.png'
//styles
import './styles/header-general.scss'
//scss configuration
import { headerHeight, headerBackground } from '_config.scss'
//components
import ScrollArrows from './ScrollArrows/ScrollArrows'
//animation components
import $HeaderStart from './containers/transition-animations/AnimatedHeaderStart'
import $LeftHeader from './containers/transition-animations/AnimatedLeftHeader'
import $RightHeader from './containers/transition-animations/AnimatedRightHeader'

export default function Header({ isScrollEvent }) {
  const refs = {
    sizeDecrease: useRef(),
    bubbleHeader: useRef(),
    leftHeader: useRef(),
    rightHeader: useRef(),
  }

  const sizeDecrease = useSpring({
    height: !isScrollEvent ? '100vh' : `${headerHeight}`,
    color: !isScrollEvent ? headerBackground : `green`,
    ref: refs.sizeDecrease,
  })

  useChain([refs.sizeDecrease, refs.leftHeader, refs.rightHeader])

  return (
    <>
      <animated.header
        className="header"
        style={!isScrollEvent ? sizeDecrease : { ...sizeDecrease, minHeight: '40px' }}
      >
        <$HeaderStart subscribe={isScrollEvent} refAnimation={refs.bubbleHeader} className="header-start">
          <img className="react-logo" src={ReactLogo} alt="react-logo" />
          <ScrollArrows arrowNumber={5} arrowElement={Arrow} />
        </$HeaderStart>

        <$LeftHeader subscribe={isScrollEvent} refAnimation={refs.leftHeader} className="left-header">
          <img className="react-logo--small" src={ReactLogo} alt="react-logo" />
        </$LeftHeader>

        <$RightHeader subscribe={isScrollEvent} refAnimation={refs.rightHeader} className="right-header">
          <div className="portal-text">Portal 2</div>
          <img className="portal-logo" src={PortalLogo} alt="portal-logo" />
        </$RightHeader>
      </animated.header>
    </>
  )
}
