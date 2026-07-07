'use client';

import React, { useState } from 'react';

function Info() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formDataToSend = new FormData();
    // TODO: Replace entry IDs with your Google Form's field entry IDs
    formDataToSend.append('entry.REPLACE_NAME', formData.name);
    formDataToSend.append('entry.REPLACE_EMAIL', formData.email);
    formDataToSend.append('entry.REPLACE_SUBJECT', formData.subject);
    formDataToSend.append('entry.REPLACE_MESSAGE', formData.message);

    try {
      // TODO: Replace with your Google Form response URL
      // Format: https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
      await fetch(
        'https://docs.google.com/forms/d/e/REPLACE_WITH_FORM_ID/formResponse',
        { method: 'POST', mode: 'no-cors', body: formDataToSend }
      );
      setShowModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an issue sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="sec-box contact section-padding" data-scroll-index="5">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head md-mb80 wow fadeIn">
              <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
              <h3>Let's build something loud together!</h3>
              <p className="fz-15 mt-10">
                For general questions, marketing, partnerships, or business inquiries — we'd love to hear from you.
              </p>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Facebook</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Tiktok</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="full-width wow fadeIn">
              <form onSubmit={handleSubmit}>
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" disabled={submitting}>
                        <span className="text">
                          {submitting ? 'Sending...' : 'Send A Message'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(3px)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content text-center"
              style={{
                background: '#000',
                color: '#fff',
                border: '2px solid #c8f31d',
                boxShadow: '0 0 30px #c8f31d80',
                borderRadius: '12px',
                padding: '30px 20px',
              }}
            >
              <div className="modal-body">
                <div style={{ fontSize: '50px', marginBottom: '15px', color: '#c8f31d' }}>🤖</div>
                <h4 style={{ color: '#c8f31d', fontWeight: 'bold' }}>Message Received!</h4>
                <p style={{ color: '#bbb', marginTop: '10px' }}>
                  Thanks for reaching out! We'll get back to you as soon as possible.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#c8f31d',
                    color: '#000',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    padding: '8px 25px',
                    marginTop: '10px',
                  }}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Info;
