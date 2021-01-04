import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import EaseScroll from './easeScroll'

import { ScrollWrapper, RefreshLoading } from './style'

const Scroll = (props) => {
  const { className, tranY, children } = props
  const { onRefresh, onScroll } = props
  const scrollRef = useRef()
  const [eScroll, setEScroll] = useState(null)
  const [translateY, setTranslateY] = useState(0)
  
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
        <RefreshLoading>
          <div className='loading-item' />
          <div className='loading-item' />
          <div className='loading-item' />
          <div className='loading-item' />
          <div className='loading-item' />
        </RefreshLoading>
        {children}
      </div>
      
    </ScrollWrapper>
  )
}

export default Scroll
