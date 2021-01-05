import instances from './instance'

const { get, post } = instances

export const getHotSingerListRequest = (count = 0) => get('/top/artists', { count })
