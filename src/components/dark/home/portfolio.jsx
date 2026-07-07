'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import data from '@/data/home/releases.json';

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.releases-swiper .releases-next',
    prevEl: '.releases-swiper .releases-prev',
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
};

const arrowSvg = (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
      fill="currentColor"
    />
  </svg>
);

const btnStyle = {
  position: 'absolute',
  top: '40%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#fff',
  backdropFilter: 'blur(6px)',
  transition: 'background 0.2s',
};

function ReleaseCard({ item }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      overflow: 'hidden',
      height: '100%',
    }}>
      {item.coverImageUrl ? (
        <img
          src={item.coverImageUrl}
          alt={item.title}
          style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{
          width: '100%',
          aspectRatio: '1/1',
          background: 'rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255,255,255,0.2)',
          fontSize: '13px',
        }}>
          Cover Art
        </div>
      )}
      <div style={{ padding: '16px' }}>
        <h6 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600 }}>{item.title}</h6>
        <p style={{ margin: '0 0 14px', fontSize: '12px', opacity: 0.5 }}>{item.artist}</p>
        <a
          href={item.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="butn butn-sm bg-white skew"
          style={{ display: 'inline-block' }}
        >
          <span className="text-dark">Listen on Spotify</span>
        </a>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="sec-box portfolio section-padding" data-scroll-index="3">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-8">
            <h6 className="sub-title opacity-7 mb-15">New Releases</h6>
            <h3>
              These creators are shaking up our events.
              <br />
              <span className="main-color"> Real artists. Real mixes. </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="releases-swiper" style={{ position: 'relative', padding: '0 48px' }}>
        {/* Prev arrow */}
        <div
          className="releases-prev"
          style={{ ...btnStyle, left: 0 }}
        >
          <span style={{ transform: 'rotate(180deg)', display: 'flex' }}>{arrowSvg}</span>
        </div>

        {/* Next arrow */}
        <div
          className="releases-next"
          style={{ ...btnStyle, right: 0 }}
        >
          {arrowSvg}
        </div>

        <Swiper {...swiperOptions}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item wow fadeInUp" data-wow-delay=".2s">
                <ReleaseCard item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
