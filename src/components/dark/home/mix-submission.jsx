import React from 'react';
import DemoSubmission from '../demoSubmission/demo-submission.jsx';

function MixSubmission() {
  return (
    <div className="sec-box portfolio section-padding bord-thin-bottom" data-scroll-index="4" >
      <div className="sec-head mb-20">
        <div className="row">
          <div className="col-lg-8">
            <h6 className="sub-title opacity-7 mb-15">Demo & Mix Submission</h6>
            <h3>
              Got a hit? {' '}
              <span className="main-color"> Let's spin it</span>
            </h3>
          </div>
        </div>

        <div className="sec-head wow fadeInUp">
          <DemoSubmission />
        </div>
      </div>
    </div>
  );
}

export default MixSubmission;
