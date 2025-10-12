import React from 'react';
import data from '@/data/home/works.json';

function Portfolio() {
  return (
    <div className="sec-box portfolio section-padding" data-scroll-index="3">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-8">
            <h6 className="sub-title opacity-7 mb-15">Robotic Rumble Spotlight</h6>
            <h3>
              These creators are shaking up our events.
              <br/>
              <span className="main-color"> Real artists. Real mixes. </span>
            </h3>
          </div>
          {/* <div className="col-lg-4 valign">
            <div className="go-more full-width d-flex justify-content-end">
              <a href="/dark/works" className="d-flex">
                <span>
                  View All Works{' '}
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 34.2 32.3"
                    xmlSpace="preserve"
                    style={{ strokeWidth: 2 }}
                  />
                </span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {data?.slice(0, 4).map((item, index) => (
            <div key={index} className="col-lg-6 items">
              <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={item.link}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="cont mt-10 d-flex align-items-center">
                  <div>
                    <span className="tag">{item.title}</span>
                  </div>
                  <div className="ml-auto">
                    <div className="arrow">
                      <a href="single-project">
                        <svg
                          className="arrow-right"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xmlSpace="preserve"
                          style={{ strokeWidth: 2 }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
