
import {
  CHANGE_SINGER_LIST,
  CHANGE_SINGER_ENTER_LOADING,
  CHANGE_SINGER_PAGE_COUNT,
  CHANGE_SINGER_PULLDOWN_LOADING,
  CHANGE_SINGER_PULLUP_STATUS,
} from '../contants/singer'
import { getHotSingerListRequest } from '../api'

import { getpullStatus } from './common'

function changeSingerList (list) {
  return {
    type: CHANGE_SINGER_LIST,
    payload: list
  } 
}

export function changeSingerEnterLoading (isLoading) {
  return {
    type: CHANGE_SINGER_ENTER_LOADING,
    payload: isLoading
  }
}

export function changeSingerPageCount (count) {
  return {
    type: CHANGE_SINGER_PAGE_COUNT,
    payload: count
  }
}

export function changeSingerPullDownLoading (isLoading) {
  return {
    type: CHANGE_SINGER_PULLDOWN_LOADING,
    payload: isLoading
  }
}

export function changeSingerPullUpStatus (status) {
  return {
    type: CHANGE_SINGER_PULLUP_STATUS,
    payload: status
  }
}

export const getSingerHotList = () =>{
  return dispatch=>{
    return getHotSingerListRequest(0)
      .then(res=>{
        const { artists, more } = res
        dispatch(changeSingerEnterLoading(false))
        dispatch(changeSingerPageCount(0))
        dispatch(changeSingerPullDownLoading(false))
        dispatch(changeSingerPullUpStatus(getpullStatus(artists, more)))
        dispatch(changeSingerList(artists))      
      })
  }
}
