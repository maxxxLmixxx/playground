import React from 'react'
import { useTransition, animated } from 'react-spring'

export default function $LeftHeader(props) {
  const { subscribe, refAnimation, ...rest } = props
  const transition = useTransition(subscribe, {
    from: { opacity: 0, transform: 'translateX(-110%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0 },
    ref: refAnimation,
  })

  return transition((animation, item) => item && <animated.div {...rest} style={animation} />)
}
