import React from 'react'
import { useTransition, animated } from 'react-spring'

export default (props) => {
  const { subscribe, refAnimation, ...rest } = props
  const transition = useTransition(subscribe, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0vh)' },
    ref: refAnimation,
  })

  return transition((animation, item) => item && <animated.div {...rest} style={animation} />)
}
