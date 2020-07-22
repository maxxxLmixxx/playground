import React, { useState, useEffect } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'

import ReactLogo from '../../assets/images/react-logo.png'
import Arrow from '../../assets/images/down-arrow.svg'

import ScrollArrows from './ScrollArrows/ScrollArrows'

import './styles/header-start-page.scss'
import './styles/header-minimized.scss'

const AnimatedLeftHeader = (props) => {
  const transition = useTransition(null, {
    from: { transform: 'translateX(-100%)' },
    enter: { transform: 'translateX(0%)' },
  })

  return transition((style) => {
    return <animated.div {...props} style={style} />
  })
}

const AnimatedRightHeader = (props) => {
  const transition = useTransition(null, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
  })

  return transition((style) => {
    return <animated.div {...props} style={style} />
  })
}

export default function Header() {
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
    height: !isScrollEvent ? '100vh' : '10vh',
  })

  const bubble = useSpring({
    transform: !isScrollEvent ? 'translateY(0vh)' : 'translateY(-40vh)',
  })

  return (
    <>
      <animated.header className="header" style={sizeDecrease}>
        {isScrollEvent && (
          <AnimatedLeftHeader className="left-header">
            <img className="react-logo-little" src={ReactLogo} alt="react-logo" />
          </AnimatedLeftHeader>
        )}

        {isScrollEvent && (
          <AnimatedRightHeader className="right-header" />

        )}

        <animated.div className="header-start" style={bubble}>
          <img className="react-logo" src={ReactLogo} alt="react-logo" />
          <ScrollArrows arrowNumber={5} arrowElement={Arrow} />
        </animated.div>
      </animated.header>
    </>
  )
}
