import React from 'react';
import data from '@/data/home/releases.json';

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
            <div key={index} className="col-lg-4 col-md-6 items">
              <div className="item mt-30 wow fadeInUp" data-wow-delay=".2s">
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
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
                    <h6 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600 }}>
                      {item.title}
                    </h6>
                    <p style={{ margin: '0 0 14px', fontSize: '12px', opacity: 0.5 }}>
                      {item.artist}
                    </p>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
