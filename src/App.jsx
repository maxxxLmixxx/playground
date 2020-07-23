import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import './App.scss'

export default function App() {
  const [isScrollEvent, setScrollEvent] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      if (!event.key) if (event.deltaY < 0) return; 
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleScroll)
      setScrollEvent(true)
    }

    window.addEventListener('wheel', handleScroll)
    window.addEventListener('keydown', handleScroll)
  }, [])

  return (
    <>
      <Header isScrollEvent={isScrollEvent} />
      <Main isScrollEvent={isScrollEvent} />
    </>
  )
}
