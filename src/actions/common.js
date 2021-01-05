import { pullUpStatuses } from '../contants/common'
import instances from '../api/instance'
const { request } = instances
export function createAction (options) {
  const { url, param, type, payload, success, otherOps } = options
  return dispatch => {
    // console.log('aaaaa')
    return new Promise((resolve, reject)=>{
      request(url, param)
        .then(res=>{
          const { result } = res
        
          dispatch({
            type,
            ...otherOps,
            payload: payload ? payload : success ? success(res) : result
          })
          resolve(res)
        // resolve(res)
        })
        .catch(e=>{
          console.log(e)
          reject(e)
        // reject(e)
        })
    })
  }
}

export function getpullStatus (list, more, min = 5) {
  return more ? pullUpStatuses.MORE ? list.length <= min : '' : pullUpStatuses.NO_MORE
}
