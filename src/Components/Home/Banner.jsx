import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="w-full h-full" src="https://i.ibb.co.com/99yJG4Fd/download.jpg" alt="" />      
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src="https://i.ibb.co.com/C3XtvkGd/download.jpg" alt="" />     
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src="https://i.ibb.co.com/1G08cMS4/download.jpg" alt="" />    
      </SwiperSlide>
    </Swiper>
  );
}
