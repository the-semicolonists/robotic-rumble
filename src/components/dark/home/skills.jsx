import React from 'react';
import data2 from '@/data/home/skills2.json';
import data from '@/data/home/skills.json';
function Skills() {
  return (
    <div
      className="sec-box skills section-padding bord-thin-bottom"
      data-scroll-index="2"
    >
      <div className="row">
        <div className="col-lg-4 valign">
          <div className="sec-head md-mb80 wow fadeIn">
            {/* <h6 className="sub-title opacity-7 mb-15">Our Skills</h6>
            <h3>
              <span className="main-color">Awards</span> & Recognitions
            </h3> */}
            <img src="/assets/imgs/robotic-rumble.png" alt="" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="mb-40 wow fadeIn" data-wow-delay=".2s">
              <h5 className="text-u ls1 mb-15">Inside the <span className="main-color">Rumble</span> </h5>
              <p>
                Robotic Rumble is a Los Angeles-based collective and event platform dedicated to pushing the boundaries of music, culture, and community.
                We throw high-energy events that bring people together around one common love - sound. But we're more than just parties.
                We're a launchpad for emerging music creators who are ready to get their tracks heard in real spaces, by real audiences.
              </p>
              <p className='mt-20'>
                At the heart of Robotic Rumble is our mission to support and showcase fresh, underground talent. Through our demo and mix submission process,
                we give up-and-coming producers and DJs the chance to have their music featured during our live events.
                Whether it's a raw bedroom mix or a polished production, if it hits, we spin it.
              </p>
              <p className='mt-20'>
                Our goal is to amplify the voices of the next generation of sound pioneers. We believe in building a community where music isn't just consumed—it's shared, celebrated, and elevated.
                If you’ve got something that moves people, we want to hear it.
              </p>
              <p className='mt-20'>
                Join the rumble. <span className="main-color">Submit your sound</span>. Let’s make some noise.
              </p>
              <div className="bord-color"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="awards mt-100">
        <div className="row md-marg">
          {data2.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div
                className="award-item sub-bg md-mb30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="d-flex">
                  <div>
                    <span>01</span>
                  </div>
                  <div className="ml-auto">
                    <span>{item.year}</span>
                  </div>
                </div>
                <div className="img icon-img-100 mt-80 mb-30">
                  <img src={item.photo} alt="" />
                </div>
                <h6>02x Designer Award</h6>
                <span className="sub-title main-color mt-10">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
