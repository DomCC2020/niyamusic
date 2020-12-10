
/**
 * 
 * @param {nonodeElement} wrapperElement -容器节点 
 * @param {obj} options -参数{ maxMove: number }
 */
function EaseScroll (wrapperElement, options = {}) {
  let { maxMove } = options

  this.wrapper = wrapperElement
  this.scrollView = document.getElementById('scrollView')

  this.maxMove = maxMove || 400 // 最大偏移量

  // 元素属性
  this.startY = 0
  this.moveY = 0
  this.scrollY = this.scrollView.scrollTop
  this.scrollHeight = this.scrollView.scrollHeight
  this.clientHeight = this.scrollView.clientHeight

  this.doRefresh = false
  this.refreshing = false
  this.isRefreshFinish = false

  let startTouchTime = 0
  this.scrollView.addEventListener('scroll', function (e) {
    e.preventDefault()
    const { target: { scrollTop, scrollHeight, clientHeight } } = e
    this.scrollY = scrollTop
    this.scrollHeight = scrollHeight
    this.clientHeight = clientHeight
  }.bind(this))

  // 获取touchY轴
  this.wrapper.addEventListener('touchstart', function (e) {
    startTouchTime = new Date().getTime()
    // e.preventDefault()
    this.startY = e.changedTouches[0].clientY
  }.bind(this))

  // 元素移动
  this.wrapper.addEventListener('touchmove', function (e) {
    this.moveY = e.changedTouches[0].clientY
  
    handleMoveUp(this, e)
    handleMoveDown(this, e)
  }.bind(this))

  this.wrapper.addEventListener('touchend', function () {
    const endTouchTime = new Date().getTime()
    this.scrollView.style.overflowY = 'auto'
    this.scrollView.style.transition = 'transform 0.2s ease 0s'
    this.scrollView.style.transform = 'translateY(0)'
    if (this.moveY - this.startY > this.maxMove - 100 && endTouchTime - startTouchTime > 300) {
      // console.log('aaaa')
      this.doRefresh = true
      if (!this.refreshing) {
        this.isRefreshFinish = false
      }
    }
  }.bind(this))
  
  // document.addEventListener('touchmove', function (e) {
  //   // e.preventDefault()
  // }, {passive: false})
}

EaseScroll.prototype = {
  constructor: EaseScroll,
  endRefreshTime: 0,
  // 刷新完成
  refreshFinish: function () {
    this.isRefreshFinish = true
    this.refreshing = false
    this.endRefreshTime = new Date().getTime()
  },
  // 刷新事件
  onRefresh: function (callBack) {
    this.wrapper.addEventListener('touchend', function () {
      if (this.refreshing) {
        if (!this.isRefreshFinish) {
          this.doRefresh = false
          console.log('请求进行ing')
        }
      }
      else if (!this.refreshing) {
        // console.log(this.doRefresh)
        const startRefreshTime = new Date().getTime()
        if (this.doRefresh) {
          if (Math.abs(this.endRefreshTime - startRefreshTime) < 3000) {
            console.log('刷新太频繁了，请稍后')
            return
          }
          console.log('可以发送请求')
          this.refreshing = true
          this.isRefreshFinish = false
          callBack && callBack()
        }
      }
    }.bind(this))
  }
}

// utils
function handleMove (seft, e) {
  e.preventDefault()
  const { moveY, startY, maxMove, scrollView } = seft
  const move = moveY - startY
  scrollView.style.transition = 'none'
  let y = 0
  if (move < maxMove) {
    y = move * 0.35
  }
  else {
    y = maxMove * 0.35 + (move - maxMove) * 0.2
  }
  scrollView.style.transform = `translateY(${y}px)`
}

function handleMoveUp (seft, e) {
  const { scrollY, moveY, startY } = seft 
  if (scrollY === 0 && moveY - startY > 0) {
    seft.scrollView.style.overflowY = 'hidden'
    handleMove(seft, e)
  }
}

function handleMoveDown (seft, e) {
  const { scrollY, clientHeight, scrollHeight, moveY, startY } = seft
  if (scrollY + clientHeight >= scrollHeight && moveY - startY < 0 && 
    !isZero(scrollY) && !isZero(scrollHeight) && !isZero(clientHeight)) {
    seft.scrollView.style.overflowY = 'auto'
    handleMove(seft, e)
  }
}

function isZero (n) {
  return n === 0
}

export default EaseScroll
