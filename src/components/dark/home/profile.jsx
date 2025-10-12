import React from 'react';

function Profile() {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img hero-background d-none d-md-block">
        </div>
        <div className="col-lg-8 content hero-background">
          <h1>
            <span className="main-color">Robotic Rumble</span>
          </h1>
          <h5>
            Evolving sound. Inspiring creators. Connecting worlds.
          </h5>
          <p className='mt-20'>
            From underground beats to experimental soundscapes, Robotic Rumble celebrates every form of musical creativity. We’re here for artists redefining genres and fans discovering whats next.
          </p>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>10</h2>
                  <p>
                    Events <br /> Monthly
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>3k</h2>
                  <p>
                    Tracks <br /> Played Live
                  </p>
                </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
