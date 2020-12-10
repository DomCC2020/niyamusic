import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Container, BgImg } from './style'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

function Slider (props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList } = props
  useEffect(()=>{
    if (!sliderSwiper) {
      const newSwiper = new Swiper('.slider-box', {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        centeredSlidesBounds: true,
        
        speed: 500,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      })
      let startX = 0
      let startY = 0
      newSwiper.el.ontouchstart = function (e) {
        // e.preventDefault()
        const { clientX, clientY } = e.changedTouches[0]
        startX = clientX
        startY = clientY
        newSwiper.autoplay.stop()
      }
      newSwiper.el.ontouchmove = function (e) {
        const { clientX, clientY } = e.changedTouches[0]

        // if (Math.abs(clientX - startX) > 15 || Math.abs(clientY - startY) < 5) {
        //   e.stopPropagation()
        // }
        const moveX = Math.abs(clientX - startX)
        const moveY = Math.abs(clientY - startY)
        // console.log(moveY / moveX)
        if (moveY / moveX < 1) {
          e.stopPropagation()
        }
        // e.preventDefault()
      }
      newSwiper.el.ontouchend = function () {
        newSwiper.autoplay.start()
      }
      setSliderSwiper(newSwiper)
    }
  }, [sliderSwiper])
        
  return (
    <Container>
      {bannerList && 
      <div 
        className="slider-box" 
        style={{borderRadius: '10px', overflow: 'hidden'}}
      >
                
        <div 
          className="swiper-wrapper"
        >
          {
            bannerList.map(item=>{
              return (
                <div className="swiper-slide">
                  <BgImg imageUrl={item.imageUrl} />
                </div>
              )
            })
          }
                   
        </div>
        <div className="swiper-pagination"></div>
      </div>}
    </Container>
  )
}

Slider.defaultProps = {
  bannerList: []
}

Slider.propTypes = {
  bannerList: PropTypes.array
}

export default memo(Slider)
