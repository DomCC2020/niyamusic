import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'

import { ScrollWrapper } from './style'

const Scroll = (props) => {
  const scrollRef = useRef()
  const boxRef = useRef()
  const { children } = props
  const [translateY, setTranslateY] = useState(0)
  // let startY = 0
  // let endY = 0
  // const touchStart = e => {
  //   // e.preventDefault()
  //   startY = e.changedTouches[0].clientY
  // }
  // const touchEnd = (e)=>{
  //   // e.preventDefault()
  //   // endY = e.changedTouches[0].clientY
  //   // setTranslateY(endY - startY)
  //   // console.log(e.screenY)
  // }
  // function move (e) {
  //   // e.preventDefault()
   
  //   endY = e.changedTouches[0].clientY
  //   // 动态计算当前位置
  //   const moveY = endY - startY
    
  //   console.log(moveY)
  //   setTranslateY(moveY) 
  //   // setTranslateY(endY - startY)
  // }
  
  useEffect(()=>{
    function eEvent (e) {
      e.preventDefault()
    }
    document.body.addEventListener('touchmove', eEvent, {passive: false})
    let startY = 0
    let endY = 0
    let moveY = 0
    let currentY = endY - startY
    scrollRef.current.addEventListener('touchstart', function (e) {
      startY = e.changedTouches[0].clientY
      // boxRef.current.style.transform = `translateY(${currentY}px)`
    })
    scrollRef.current.addEventListener('touchend', function (e) {
      endY = e.changedTouches[0].clientY
      currentY = endY - startY + currentY
      console.log(currentY)
    })
    scrollRef.current.addEventListener('touchmove', function (e) {
      moveY = e.changedTouches[0].clientY

      boxRef.current.style.transform = `translateY(${moveY - startY + currentY}px)`
    })
  }, [scrollRef, boxRef])
  console.log(translateY)
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
      <div ref={boxRef} className='demo' >
        {children}
      </div>
    </ScrollWrapper>
  )
}
export default Scroll
