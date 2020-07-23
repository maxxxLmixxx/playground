import React from 'react'
import { useTransition, animated } from 'react-spring'

export default function $Main(props) {
  const { subscribe, refAnimation, ...rest } = props
  const transition = useTransition(subscribe, {
    from: { transform: 'scale(0)' },
    enter: { transform: 'scale(1)' },
  })
  return transition((animation, item) => item && <animated.div {...rest} style={animation} />)
}
