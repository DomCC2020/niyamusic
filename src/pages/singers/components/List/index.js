import React from 'react'
import Lazyload from 'react-lazyload'
import { ListWrapper, ListItem } from './style'

function List (props) {
  const { singerList, tranY } = props

  return (
    <ListWrapper tranY={tranY}>
      {singerList.map((item, index)=>{
        return (
          <ListItem key={`${item.accountId}_${index}`}>
            <Lazyload placeholder={<img src={require('../../../../assets/images/common/music.png').default} alt = 'music' />}>
              <img src={`${item.picUrl}?param=300x300`} alt='singer' />
            </Lazyload>
            <span className='name'>{item.name}</span>
          </ListItem>
        )
      })}
    </ListWrapper>
  )
}

export default List
