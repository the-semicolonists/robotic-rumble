import React from 'react';
import data from '@/data/home/works.json';

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
      <div className="gallery">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-lg-6 items">
              <div className="item mt-30 wow fadeInUp" data-wow-delay=".2s">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={item.embedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
