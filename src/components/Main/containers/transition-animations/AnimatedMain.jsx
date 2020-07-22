import React from 'react'
import { useTransition, animated } from 'react-spring'

export default (props) => {
  const { subscribe, refAnimation, ...rest } = props
  const transition = useTransition(subscribe, {
    from: { transform: 'translateY(-100vh)' },
    enter: { transform: 'translateY(0vh)' },
  })
  return transition((animation, item) => item && <animated.div {...rest} style={animation} />)
}
