import React, { useState, useEffect } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'

import ReactLogo from '../../assets/images/react-logo.png'
import Arrow from '../../assets/images/down-arrow.svg'

import ScrollArrows from './ScrollArrows/ScrollArrows'

import './styles/header-start-page.scss'
import './styles/header-minimized.scss'

export default function AnimatedHeader({ children }) {
  const [isScrollEvent, setScrollEvent] = useState(false)

  const handleScroll = (e) => {
    if (e.deltaY < 0) return
    window.removeEventListener('wheel', handleScroll)
    setScrollEvent(true)
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll)
  }, [])

  const folding = useSpring({
    height: isScrollEvent ? '10vh' : '100vh',
  })

  const transitions = useTransition(isScrollEvent, null, {
    from: { transform: `scale(0)` },
    enter: { transform: `scale(1)` },
    leave: { transform: `scale(0)` },
  })

  return (
    <animated.header className="header" style={folding}>
      <div className="header-container">
        {transitions.map(({ props }) => (
          <animated.img className="react-logo" src={ReactLogo} alt="react-logo" style={props} />
        ))}
        {isScrollEvent ? <></> : <ScrollArrows arrowNumber={5} arrowElement={Arrow} />}
      </div>
    </animated.header>
  )
}
