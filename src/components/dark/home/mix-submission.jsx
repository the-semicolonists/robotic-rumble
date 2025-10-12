import React from 'react';

function MixSubmission() {
  return (
    <div className="sec-box portfolio section-padding bord-thin-bottom" data-scroll-index="4" >
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-8">
            <h6 className="sub-title opacity-7 mb-15">Demo & Mix Submission</h6>
            <h3>
              Got a hit? {' '}
              <span className="main-color"> Let's spin it</span>
            </h3>
          </div>
        </div>

        <div className="sec-head mb-80 wow fadeInUp mt-100">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="butn-presv">
                <a
                  href="https://forms.gle/XfQXggtsdcCmjXB86"
                  className="butn butn-md butn-bord radius-5 text-u full-width"
                  target='blank'
                >
                  <img src="/assets/imgs/submit.png" alt="" />
                  <h6>Submit your track here</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MixSubmission;
