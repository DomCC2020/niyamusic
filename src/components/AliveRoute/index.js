import React from 'react'
import { Route, matchPath } from 'react-router'

if (
  window.history &&
  window.history.scrollRestoration &&
  window.history.scrollRestoration === 'auto'
) {
  window.history.scrollRestoration = 'manual'
}

// 虽然实现逻辑简单，也不完美，但是取名一定要大气
class AliveRoute extends React.Component {
  constructor () {
    super()
    this.visible = false // 视口可见
    this.matchCount = 0 // 匹配次数
    this.unmatchCount = 0 // 未匹配次数，每次匹配都会清零
    this.scrollLeft = 0 // 水平滚动位置
    this.scrollTop = 0 // 滚动垂直高度
    this.$component = null
  }
  shouldComponentUpdate () {
    // 该组件不会再更新了
    return false
  }

  $AliveRouteInjectCurrent = $intsance => {
    this.$component = $intsance
  }

  getElment () {
    return document.getElementScroll || document.documentElement
  }

  getElementScroll () {
    const el = this.getElment()
    return { scrollLeft: el.scrollLeft, scrollTop: el.scrollTop }
  }

  isMatchLivePath (pathname, livePath, alwaysLive, options) {
    const { path } = options
    const livePaths = livePath instanceof Array ? [...livePath, path] : [livePath, path]
    if (alwaysLive) {
      livePaths.push('*')
    }
    for (const currentLivePath of livePaths) {
      if (typeof currentLivePath !== 'string') {
        continue
      }
      const currentOptions = { ...options, path: currentLivePath }

      const mathCurrent = matchPath(pathname, currentOptions)
      if (mathCurrent) {
        return mathCurrent
      }
    }
    
    return null
  }

  handleElmentScroll (scrollLeft, scrollTop) {
    const el = this.getElment()
    el && (function () {
      el.scrollLeft = scrollLeft
      el.scrollTop = scrollTop
    })()
  }

  handleInfoIfShowPage (visible) {
    if (visible && this.matchCount > 1) {
      setTimeout(()=>{
        this.handleElmentScroll(this.scrollLeft, this.scrollTop)
        this.$component && this.$component.componentDidShow && this.$component.componentDidShow()
      }, 0) 
    }
  }

  handleInfoIsLeavePage (visible) {
    const { scrollLeft, scrollTop } = this.getElementScroll()
    if (!visible && this.unmatchCount === 1) {
      // const { scrollLeft, scrollTop } = this.getElementScroll()

      this.scrollLeft = scrollLeft
      this.scrollTop = scrollTop
      this.$component && this.$component.componentDidShow && this.$component.componentWillHide()
    }
  }
  
  handleUnmount () {
    this.visible = false 
    this.matchCount = 0 
    this.unmatchCount = 0 
    this.scrollLeft = 0 
    this.scrollTop = 0 
    this.$component = null
    // this.handleElmentScroll(this.scrollLeft, this.scrollTop)
  }

  render () {
    const { 
      component: Component,
      path,
      exact,
      sensitive,
      strict,
      livePath,
      alwaysLive,
      style,
      className,
      
      ...resPros 
    } = this.props
    return (
      <Route {...resPros} path={path} exact={exact} sensitive={sensitive} strict={strict}>
        { props=>{
          const { match } = props
          const matchLivePath = this.isMatchLivePath(
            props.location.pathname, 
            livePath, 
            alwaysLive, 
            { path, exact, sensitive, strict }
          )

          if (!matchLivePath && this.matchCount !== 0) {
            this.handleUnmount()
          }

          if (match && matchLivePath) {
            this.visible = true
            this.matchCount += 1
            this.unmatchCount = 0
            this.handleInfoIfShowPage(this.visible, Component)
          }

          else if (!match && matchLivePath && this.matchCount > 0) {
            this.visible = false
            this.unmatchCount += 1
            this.handleInfoIsLeavePage(this.visible)
          }
          const visibleStyle = {
            visibility: 'visible'
          }  
          const hiddenStyle = {
            visibility: 'hidden',
            position: 'absolute'
          }
          const visibilityStyle = this.visible ? visibleStyle : hiddenStyle
          return this.matchCount > 0 && matchLivePath ?
    
          // 这里无疑破坏了组件的html解构， 导致匹配的组件多了一个div
          // 因此添加style和className补救吧
            <div 
              style={{...visibilityStyle, width: '100%', height: '100%', ...style}}
              className={className}
            > 
              <Component 
                {...resPros}
                {...props}
                // 首次不应为didShow，避免和didMount冲突
                injectCurrent = {this.$AliveRouteInjectCurrent}
                didShow = {this.visible && this.matchCount > 1}
                willHide = {!this.visible && this.unmatchCount === 1}
              />
            </div> :
            null
        }}
      </Route>
    )
  }
}

export default AliveRoute

// REAdME
// 该组件不能放在Switch里面。以为Switch每次match为null的情况都会return null只有匹配到情况下才会return Route，详情可看Switch源码
