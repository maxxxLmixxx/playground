import React, { useState, useEffect, useRef } from 'react'
import { useSpring, useTransition, useChain, animated } from 'react-spring'

import ReactLogo from '../../assets/images/react-logo.png'
import Arrow from '../../assets/images/down-arrow.svg'

import ScrollArrows from './ScrollArrows/ScrollArrows'

import './styles/header-start-page.scss'

const AnimatedLeftHeader = (props) => {
  const transition = useTransition(null, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0 },
    ref: props.refAnimation,
  })

  return transition((style) => {
    return <animated.div {...props} style={style} />
  })
}

const AnimatedRightHeader = (props) => {
  const transition = useTransition(null, {
    from: { transform: 'translateX(10vh)' },
    enter: { transform: 'translateX(0vh)' },
    ref: props.refAnimation,
  })

  return transition((style) => {
    return <animated.div {...props} style={style} />
  })
}

const AnimatedHeaderStart = (props) => {
  const transition = useTransition(null, {
    from: { transform: 'translateY(-100vh)' },
    enter: { transform: 'translateY(0vh)' },
    leave: { transform: 'translateY(20vh)' },
    ref: props.refAnimation,
  })
  return transition((animation) => <animated.div {...props} style={animation}></animated.div>)
}

export default function Header() {
  const refs = {
    sizeDecrease: useRef(),
    bubbleHeader: useRef(),
    leftHeader: useRef(),
    rightHeader: useRef(),
  }

  const [isScrollEvent, setScrollEvent] = useState(false)

  const handleScroll = (e) => {
    if (e.deltaY < 0) return
    window.removeEventListener('wheel', handleScroll)
    setScrollEvent(true)
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll)
  }, [])

  const sizeDecrease = useSpring({
    height: !isScrollEvent ? '100vh' : '7vh',
    ref: refs.sizeDecrease,
  })

  useChain([refs.sizeDecrease, refs.bubbleHeader, refs.leftHeader, refs.rightHeader])

  return (
    <>
      <animated.header className="header" style={sizeDecrease}>
        {isScrollEvent && (
          <>
            <AnimatedLeftHeader refAnimation={refs.leftHeader} className="left-header">
              <img className="react-logo--small" src={ReactLogo} alt="react-logo" />
            </AnimatedLeftHeader>
            <AnimatedRightHeader refAnimation={refs.rightHeader} className="right-header" />
          </>
        )}

        <AnimatedHeaderStart refAnimation={refs.bubbleHeader} className="header-start">
          <img className="react-logo" src={ReactLogo} alt="react-logo" />
          <ScrollArrows arrowNumber={5} arrowElement={Arrow} />
        </AnimatedHeaderStart>
      </animated.header>
    </>
  )
}
