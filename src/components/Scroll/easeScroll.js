
/**
 * 
 * @param {nonodeElement} wrapperElement -容器节点 
 * @param {obj} options ->{ maxMove: number, needRefresh: beelon }
 */
function EaseScroll (wrapperElement, options = {}) {
  let { maxMove, scrollTop: _scrollTop } = options

  this.options = options
  this.wrapper = wrapperElement
  this.scrollView = wrapperElement.querySelector('.scrollView')
  
  this.scrollView.scrollTop = _scrollTop || 0

  this.maxMove = maxMove || 400 // 最大偏移量
  this.refreshY = this.maxMove - 200

  // 元素属性
  this.startY = 0
  this.moveY = 0
  this.scrollTop = this.scrollView.scrollTop
  this.scrollHeight = this.scrollView.scrollHeight
  this.clientHeight = this.scrollView.clientHeight

  this.startTranslateY = 0

  this.doRefresh = false
  this.refreshing = false
  this.isRefreshFinish = false

  let startTouchTime = 0
  this.wrapper.addEventListener('scroll', function (e) {
    e.preventDefault()
    e.stopPropagation()
    const { target: { scrollTop, scrollHeight, clientHeight } } = e
    this.scrollTop = scrollTop
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
    // this.scrollView.style.overflowY = 'auto'
    this.scrollView.style.transition = 'transform 0.2s ease 0s'
    this.startTranslateY = 0
    
    if (this.moveY - this.startY > this.refreshY && endTouchTime - startTouchTime > 300) {
      this.doRefresh = true
      if (!this.refreshing) {
        this.isRefreshFinish = false
      }
      // if (!this.isRefreshFinish && this.options.needRefresh) {
      //   this.scrollView.style.transform = 'translateY(30px) translateZ(0)'
      // }
    }
    setTimeout(()=>{
      this.scrollView.style.transform = `translate3d(0,${this.startTranslateY}px, 0)`
    }, 0)
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
    this.doRefresh = false 
    this.endRefreshTime = new Date().getTime()
    this.startTranslateY = 0
    this.scrollView.style.transform = `translate3d(0,${this.startTranslateY}px, 0)`
  },
  // 刷新事件
  onRefresh: function (callBack) {
    const { needRefresh } = this.options
    if (!needRefresh) {
      // 不需要刷新
      return
    }
    this.wrapper.addEventListener('touchend', function () {
      if (this.refreshing) {
        if (!this.isRefreshFinish) {
          this.doRefresh = false
          this.startTranslateY = 40
          // this.scrollView.style.transform = 'translateY(40px) translateZ(0)'
          console.log('请求进行ing')
        }
      }
      else {
        // console.log(this.doRefresh)
        const startRefreshTime = new Date().getTime()
        const loadingItem = this.wrapper.getElementsByClassName('loading-item')
        console.log(loadingItem)
        if (this.doRefresh) {
          if (Math.abs(this.endRefreshTime - startRefreshTime) < 3000) {
            // loadingItem.style.opacity = 0.4
            console.log('刷新太频繁了，请稍后')
            return
          }
          // console.log('可以发送请求')
          this.refreshing = true
          this.isRefreshFinish = false
          this.startTranslateY = 40
          // this.scrollView.style.transform = 'translateY(40px) translateZ(0)'
          callBack && callBack()
        }
        else {
          // loadingItem.style.opacity = 0.4
        }
      }
    }.bind(this))
  },

  onScroll: function (callBack) {
    this.wrapper.addEventListener('scroll', function () {
      callBack && callBack(this.scrollTop)
    }.bind(this))
    return 
  }
}

// utils
function handleMove (seft, e) {
  e.preventDefault()
  const { moveY, startY, maxMove, scrollView, startTranslateY } = seft
  const move = moveY - startY
  scrollView.style.transition = 'none'
  let y = 0
  if (move < maxMove) {
    y = move * 0.35 
  }
  else {
    y = maxMove * 0.35 + (move - maxMove) * 0.2
  }
  scrollView.style.transform = `translate3d(0,${y + startTranslateY}px,0)`
}

function handleMoveUp (seft, e) {
  const { scrollTop, moveY, startY, refreshY } = seft 
  if (scrollTop === 0 && moveY - startY > 0) {
    // 
    const loadingItems = seft.wrapper.querySelectorAll('.loading-item')
    const index = Math.ceil((moveY - startY) / (refreshY / 4)) - 1
    if (loadingItems[index]) {
      console.log(index)
      loadingItems[index].style.opacity = 1
    }
  
    handleMove(seft, e)
  }
}

function handleMoveDown (seft, e) {
  const { scrollTop, clientHeight, scrollHeight, moveY, startY } = seft
  if (scrollTop + clientHeight >= scrollHeight && moveY - startY < 0 && 
    !isZero(scrollTop) && !isZero(scrollHeight) && !isZero(clientHeight)) {
    handleMove(seft, e)
  }
}

function isZero (n) {
  return n === 0
}

export default EaseScroll
