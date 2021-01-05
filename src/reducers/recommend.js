import { produce } from 'immer'

import {
  LOAD_BANNER_LIST,
  LOAD_RECOMMEND_LIST,
  listKeys
} from '../contants/recommend'

const initRecommend = {
  [listKeys.bannerList]: [],
  [listKeys.recommendList]: []
}
export const recommend = produce((draft, action)=>{
  switch (action.type) {
  case LOAD_BANNER_LIST:
  case LOAD_RECOMMEND_LIST:
    draft[action.listKey] = action.payload
    break
  default:
    break
  }
}, initRecommend)
