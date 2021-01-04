import { 
  LOAD_BANNER_LIST,
  LOAD_RECOMMEND_LIST,
  listKeys,
} from '../contants/recommend'
import { createAction } from './common'

export const dispatchBanner = () => createAction({
  url: '/banner',
  type: LOAD_BANNER_LIST,
  otherOps: {
    listKey: listKeys['bannerList']
  },
  success: res=>res.banners
}) 

export const dispatchRecommend = () => createAction({
  url: '/personalized',
  type: LOAD_RECOMMEND_LIST,
  otherOps: {
    listKey: listKeys['recommendList']
  }
})
