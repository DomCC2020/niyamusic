import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import EaseScroll from './easeScroll'

import { ScrollWrapper } from './style'

const Scroll = (props) => {
  const { className, children } = props
  const { onRefresh } = props
  const scrollRef = useRef()
  const [eScroll, setEScroll] = useState(null)
  const [translateY, setTranslateY] = useState(0)
  
  useEffect(()=>{
    if (!eScroll) {
      const scroll = new EaseScroll(scrollRef.current)
      setEScroll(scroll)
      scroll.onRefresh(()=>{
        onRefresh && onRefresh(function () {
          scroll.refreshFinish()
        })
        // setTimeout(()=>{
        //   scroll.refreshFinish()
        // }, 15000)
      })
    }
  }, [scrollRef, eScroll, onRefresh])
  // console.log('render')
  return (
    <ScrollWrapper
      // onTouchStart={touchStart}
      // onTouchEnd={touchEnd}
      // onTouchMove={move}
      onClick={()=>{
        const { clickDemo } = props
        clickDemo && clickDemo(function () {
          alert('出发元素改变')
          setTranslateY(20)
        })
      }}
      ref={scrollRef}
    >
      <div id='scrollView' className={className}>
        {children}
      </div>
      
    </ScrollWrapper>
  )
}
export default Scroll
