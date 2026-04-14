import React from 'react';

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-8 valign">
            <a href="#0" className="logo d-flex align-items-center" style={{ gap: '12px' }}>
              <img src="/assets/imgs/robotic-logo.png" alt="Robotic Rumble Recordings" className="icon-img-60" />
              <span className="fz-16 fw-600" style={{ color: 'inherit', whiteSpace: 'nowrap' }}>
                Robotic Rumble Recordings
              </span>
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:info@roboticrumble.com">
                  <span className="sub-title fz-12">info@roboticrumble.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
