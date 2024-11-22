import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import image from '../assets/banner.jpeg'
// import image2 from '../assets/banner3.jpeg'
import image3 from '../assets/banner4.jpeg'

const Banner = () => {
  let data=[
    image,image3
  ]
  return (
    <>
      {data ? (
        <div className="w-full mx-auto mt-44 px-6 md:px-12 lg:px-16"> {/* Slightly decreased width with padding */}
          <div className="mx-auto"> {/* Decreased maximum width */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              loop={true}
            >
              {data.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-48 md:h-96 lg:h-96 object-cover rounded-lg shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Banner;
