import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { forceCheck } from 'react-lazyload'

import Scroll from '../../components/Scroll'
import Slider from '../../components/Slider'
import List from './components/List'

import * as actionType from '../../actions/recommend'

import { ScrollContainer, Loading } from '../../baseUI'
import { RecommendWrapper } from './style'

function Recommend (props) {
  const { recommend } = props
  const { didShow, willHide } = props
  const { dispatchBanner, dispatchRecommend } = props

  const [isLoading, setLoading] = useState(false)

  useEffect(()=>{
    !recommend.bannerList.length && dispatchBanner()
    !recommend.bannerList.length && (function () {
      setLoading(true)
      dispatchRecommend()
        .then(()=>{
          setLoading(false)
        })
    })()
  }, [dispatchBanner, dispatchRecommend, recommend])
  useEffect(()=>{
    if (didShow) {
      console.log('recommend is show')
    }
    if (willHide) {
      console.log('recommend is hide')
    }
  }, [ didShow, willHide ])

  // const handleRefresh = (finish) => {
  //   setTimeout(()=>{
  //     console.log('请求完成')
  //     finish()
  //   }, 2000)
  // }
  return (
    
    <RecommendWrapper>
      {isLoading && <Loading />}
    
      <Scroll onScroll={()=>{
        forceCheck()
      }}
      >
        <ScrollContainer>
          <Slider bannerList={recommend.bannerList} />
          <List recommendList={recommend.recommnendList} />
        </ScrollContainer>
      </Scroll>
    </RecommendWrapper>
    
  )
}

const mapStateToProps = (state) => ({
  recommend: state.recommend
})

const mapDispatchToProps = (dipatch) =>{
  return {
    dispatchBanner () {
      return dipatch(actionType.dispatchBanner())
    },
    dispatchRecommend () {
      return dipatch(actionType.dispatchRecommend())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
