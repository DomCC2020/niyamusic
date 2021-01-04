import { produce } from 'immer'
import {
  CHANGE_SINGER_LIST,
  CHANGE_SINGER_ENTER_LOADING,
  CHANGE_SINGER_PAGE_COUNT,
  CHANGE_SINGER_PULLDOWN_LOADING,
  CHANGE_SINGER_PULLUP_STATUS,
} from '../contants/singer'

const initSinger = {
  data: {
    list: [],
    isLoading: true,
    pageCount: 0, // 页码
    pullDownLoading: false, // 下拉刷新
    pullUpStatus: '' // more, loading, noMore 上拉加载更多， 记载中， 没有更多了
  }
}

export const singer = produce((draft, action)=>{
  switch (action.type) {
  case CHANGE_SINGER_LIST:
    draft.data.list = action.payload
    break
  case CHANGE_SINGER_ENTER_LOADING:
    draft.data.isLoading = action.payload
    break
  case CHANGE_SINGER_PAGE_COUNT:
    draft.data.pageCount = action.payload
    break
  case CHANGE_SINGER_PULLDOWN_LOADING:
    draft.data.pullDownLoading = action.payload
    break
  case CHANGE_SINGER_PULLUP_STATUS:
    draft.data.pullUpStatus = action.payload
    break
  default:
    break
  }
}, initSinger)
