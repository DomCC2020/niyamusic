import React, { memo } from 'react'
import { withRouter } from 'react-router'
import Lazyload from 'react-lazyload'
import { Title } from '../../../../baseUI'
import { getCount } from '../../../../utils'
import { ListWrapper, List, ListItem, ImgWrapper } from './style'

function RecommendList (props) {
  const { recommendList } = props
  return (
    <ListWrapper>
      <Title>推荐列表</Title>
      <List>
        {recommendList.map((item, index)=>{
          return (
            <ListItem key={`${item.id}${index}`} onClick={()=>{
              // console.log(props)
              props.history.push('/demo')
            }}
            >
              <ImgWrapper>
                <div className='decorate' />
                <div className='pay-count'>
                  <span className='icon iconfont icon-MusicAcc' />
                  <span className='pay-count__text'>{getCount(item.playCount)}</span>
                </div>
                {/* 加此参数可以减小请求的图片资源大小 */}
                <Lazyload placeholder={<img src={require('../../../../assets/images/common/music.png').default} alt = 'music' />}>
                  <img src={`${item.picUrl}?param=300x300`} alt='推荐' />
                </Lazyload>
              </ImgWrapper>
              <div className='dec'>
                <p className='dec-text'>{item.name}{index === 1 ? '撒大声地所' : ''}</p>
              </div>
            </ListItem>
          )
        })}
      </List>
    </ListWrapper>
  )
}

export default memo(withRouter(RecommendList))
