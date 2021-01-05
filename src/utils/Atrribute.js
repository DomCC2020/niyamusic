
export default function Attribute () {
  this.scrollTop = 0
  this.setScropTop = function (scrollTop) {
    this.scrollTop += scrollTop
  }
  this.getScrollTop = function () {
    return this.scrollTop
  }
}
