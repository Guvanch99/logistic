import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper as Slider, SwiperSlide } from 'swiper/react'
import styled from 'styled-components/macro'
import Truck1 from '../../../core/assets/truck1.jpeg'
import Truck2 from '../../../core/assets/truck2.jpeg'
import Truck3 from '../../../core/assets/truck3.jpeg'
import Truck4 from '../../../core/assets/truck4.png'
import Truck5 from '../../../core/assets/truck6.jpeg'
import Calculation from '../../../core/assets/truck7.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ContentStyled = styled.div`
  width: 100%;
  height: 600px;
`

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Swiper = () => (
  <Slider
    autoplay={{
      delay: 2500,
      disableOnInteraction: false
    }}
    navigation
    modules={[Navigation, Autoplay, Pagination]}
    className="mySwiper">
    <SwiperSlide>
      <ContentStyled>
        <ImageStyled src={Truck1} alt="truck1"/>
      </ContentStyled>
    </SwiperSlide>
    <SwiperSlide>
      <ContentStyled>
        <ImageStyled src={Truck2} alt="truck2"/>
      </ContentStyled>
    </SwiperSlide>
    <SwiperSlide>
      <ContentStyled>
        <ImageStyled src={Truck3} alt="truck3"/>
      </ContentStyled>
    </SwiperSlide>
    <SwiperSlide>
      <ContentStyled>
        <ImageStyled src={Truck4} alt="truck4"/>
      </ContentStyled>
    </SwiperSlide>
    <SwiperSlide>
      <ContentStyled>
        <ImageStyled src={Calculation} alt="calculation"/>
      </ContentStyled>
    </SwiperSlide>
    <SwiperSlide>
      <ContentStyled>
        <ImageStyled src={Truck5} alt="truck4"/>
      </ContentStyled>
    </SwiperSlide>
  </Slider>
)

export default Swiper
