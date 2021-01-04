import React from 'react'

import { connect } from 'react-redux'

import * as actionType from '../../actions/recommend'

class Demo extends React.Component {
  constructor (props) {
    super(props)
    props.injectCurrent && props.injectCurrent(this)
  }
  componentDidMount () {
    
  }
  componentDidShow () {
    console.log('Demo is show')
  }
  componentWillHide () {
    console.log('Demo is Hide')
  }
  render () {
    return (
      <div ref={ref=>{
        this.demo = ref
      }} style={{height: '800px', width: '500px'}}
      >哈哈哈哈</div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
