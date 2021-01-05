import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload'
import Scroll from '../../components/Scroll'

import List from './components/List'

// import { getHotSingerListRequest } from '../../api'
import { getSingerHotList } from '../../actions/singer'

import { ScrollContainer, Loading } from '../../baseUI'

import { SingersWrapper } from './style'

function Singers (props) {
  const { singer } = props
  const { dispatchSingerHotList } = props
 
  const { data: { isLoading, list } } = singer
  useEffect(()=>{
    isLoading && dispatchSingerHotList()
  }, [dispatchSingerHotList, isLoading])
  return (
    <SingersWrapper>
      
      <Scroll
        onScroll={()=>{
          forceCheck()
        }}
        onRefresh={(finish)=>{
          setTimeout(()=>{
            finish()
          }, 3000)
        }}
      >
        <ScrollContainer>
          <List singerList={list} />
        </ScrollContainer>
      </Scroll>
    </SingersWrapper>
  )
}

const mapStateToProps = (state) => ({
  singer: state.singer
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSingerHotList () {
      return dispatch(getSingerHotList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers)
