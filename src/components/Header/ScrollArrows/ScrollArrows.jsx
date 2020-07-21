import React from 'react'
import { useSprings, animated } from 'react-spring'

import './scroll-animation-container.scss'

export default function ({ arrowNumber, arrowElement, offset = 8, duration = 600 }) {
  const arrowConfig = Array.from({ length: arrowNumber }).map((_, i) => ({
    translateYStart: i * offset,
    translateYEnd: (i + 1) * offset,
    scaleStart: i === 0 ? 0 : 0.7,
    scaleEnd: i === arrowNumber - 1 ? 0 : 0.7,
  }))

  const arrowAnimations = useSprings(
    arrowNumber,
    arrowConfig.map((item) => ({
      from: {
        transform: `translateY(${item.translateYStart}vh) scale(${item.scaleStart})`,
      },
      to: {
        transform: `translateY(${item.translateYEnd}vh) scale(${item.scaleEnd})`,
      },
      loop: true,
      config: { duration },
    }))
  )

  return (
    <div className="scroll-animation-container" style={{ position: 'relative' }}>
      {arrowAnimations.map((animation, i) => (
        <animated.img
          src={arrowElement}
          alt="arrow"
          key={`arrow-${i}`}
          style={{ ...animation, position: `absolute` }}
        />
      ))}
    </div>
  )
}
