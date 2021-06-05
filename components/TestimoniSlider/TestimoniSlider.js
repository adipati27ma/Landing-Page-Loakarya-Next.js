import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const testimonials = [
  {
    id: 1,
    avatar: '/images/testimonies/akhyar.png',
    review:
      'Loakarya memberi warna baru dalam gaya hidup saya. Saya tidak perlu bingung lagi jika ingin membeli furniture sambil menjaga lingkungan.',
    name: 'Ray',
    instagram: '@aaaakhyar',
  },
  {
    id: 2,
    avatar: '/images/testimonies/akhyar.png',
    review:
      'Loakarya memberi warna baru dalam gaya hidup saya. Saya tidak perlu bingung lagi jika ingin membeli furniture sambil menjaga lingkungan.',
    name: 'Hanifan',
    instagram: '@hanifanrmdn',
  },
  {
    id: 3,
    avatar: '/images/testimonies/akhyar.png',
    review:
      'Loakarya memberi warna baru dalam gaya hidup saya. Saya tidak perlu bingung lagi jika ingin membeli furniture sambil menjaga lingkungan.',
    name: 'Billy',
    instagram: '@billynurfaudz',
  },
  {
    id: 4,
    avatar: '/images/testimonies/akhyar.png',
    review:
      'Loakarya memberi warna baru dalam gaya hidup saya. Saya tidak perlu bingung lagi jika ingin membeli furniture sambil menjaga lingkungan.',
    name: 'Billy',
    instagram: '@billynurfaudz',
  },
];

export default function TestimoniSlider() {
  return (
    <div className="testimoni-slider-container">
      <Swiper
        slidesPerView={4}
        // spaceBetween={30}
        centeredSlides={true}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {testimonials.map((testimoni) => (
          <SwiperSlide key={testimoni.id}>
            <div className="testimoni-slider-item">
              <div className="customer-avatar">
                <img src={testimoni.avatar} alt="" />
              </div>
              <div className="testimoni-content">
                <p className="the-quote">"</p>
                <p className="testimoni-review home-section-paragraph">
                  {testimoni.review}
                </p>
                <div className="customer-identity">
                  <p className="customer-name">{testimoni.name}</p>
                  <p className="customer-instagram">{testimoni.instagram}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
