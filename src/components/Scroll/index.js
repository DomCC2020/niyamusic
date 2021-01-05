import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import EaseScroll from './easeScroll'

import { ScrollWrapper, RefreshLoadWrapper } from './style'

const Scroll = (props) => {
  const { className, tranY, children } = props
  const { onRefresh, onScroll } = props
  const scrollRef = useRef()
  const [eScroll, setEScroll] = useState(null)
  const [ demo, setDemo ] = useState(0)
  
  useEffect(()=>{
    if (!eScroll) {
      const scroll = new EaseScroll(scrollRef.current, { 
        needRefresh: !!onRefresh 
      })
      setEScroll(scroll)
      scroll.onRefresh(()=>{
        onRefresh && onRefresh(function () {
          scroll.refreshFinish()
        })
        // setTimeout(()=>{
        //   scroll.refreshFinish()
        // }, 15000)
      })

      scroll.onScroll((scrollTop)=>{
        // console.log(scrollTop)
        onScroll && onScroll(scrollTop)
        // attribute.setScrollTop(scrollTop)
      })
    }
  }, [scrollRef, eScroll, onRefresh, onScroll])
  // console.log('render')
  eScroll && eScroll.onScrollEnd(()=>{
    setDemo(1)
  }, demo === 1)
  const scrollView = classnames('scrollView', className)
  return (
    <ScrollWrapper
      tranY={tranY}
      ref={scrollRef}
    >
      <div 
        className={scrollView}
        // className={className}
      >
        <RefreshLoadWrapper>
          <div className='refresh-load'>
            <div className='loading-item' />
            <div className='loading-item' />
            <div className='loading-item' />
            <div className='loading-item' />
            <div className='loading-item' />
          </div>
        </RefreshLoadWrapper>
        {children}
      </div>
      
    </ScrollWrapper>
  )
}

export default Scroll
