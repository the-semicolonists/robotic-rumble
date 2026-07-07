# Website Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Spotify embed iframes in the New Releases section with a card grid, and fix the contact form to work on a static Next.js export via Google Forms.

**Architecture:** Two self-contained changes. Change 1 creates a new `releases.json` data file and rewrites `portfolio.jsx` to render cards. Change 2 converts `info.jsx` (both themes) from a plain HTML form to a React client component using the same Google Forms fetch pattern already used by `demo-submission.jsx`.

**Tech Stack:** Next.js 14 (static export), React 18, Bootstrap grid, inline styles for card-specific CSS, Google Forms no-cors fetch pattern.

---

## File Map

| File | Action | Reason |
|---|---|---|
| `src/data/home/releases.json` | Create | New data structure replacing works.json for dark theme |
| `src/data/home/works.json` | Leave | Keep for reference; dark portfolio.jsx will import releases.json instead |
| `src/components/dark/home/portfolio.jsx` | Modify | Render release cards instead of iframes |
| `src/components/dark/contact/info.jsx` | Modify | Convert to client component with Google Forms submit |
| `src/components/light/contact/info.jsx` | Modify | Same contact.php fix for light theme |

**Not touched:** light theme `portfolio.jsx` (it's a generic works showcase, not a releases section), `ldata/home/works.json`, all other components.

---

## Task 1: Create releases.json

**Files:**
- Create: `src/data/home/releases.json`

- [ ] **Step 1: Create the data file**

Create `src/data/home/releases.json` with this exact content — 11 tracks migrated from works.json. `title`, `artist`, and `coverImageUrl` are placeholders for the client to fill in:

```json
[
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "4bgKoAY7hjO9TWOEyLeCV5",
    "spotifyUrl": "https://open.spotify.com/track/4bgKoAY7hjO9TWOEyLeCV5",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "2zKUHiwfMlfauvo5Z2NhDM",
    "spotifyUrl": "https://open.spotify.com/track/2zKUHiwfMlfauvo5Z2NhDM",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "7dr45aXsMtXQiPvmpc8BXv",
    "spotifyUrl": "https://open.spotify.com/track/7dr45aXsMtXQiPvmpc8BXv",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "1GKhnp50XUWhYdEfj3s5wt",
    "spotifyUrl": "https://open.spotify.com/track/1GKhnp50XUWhYdEfj3s5wt",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "1vvnBOSzpvA0LdRDipRIJJ",
    "spotifyUrl": "https://open.spotify.com/track/1vvnBOSzpvA0LdRDipRIJJ",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "0IfYBYLdSm2jbSMZOu4sr4",
    "spotifyUrl": "https://open.spotify.com/track/0IfYBYLdSm2jbSMZOu4sr4",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "68ChWmNjLfcNxpuV63pOw1",
    "spotifyUrl": "https://open.spotify.com/track/68ChWmNjLfcNxpuV63pOw1",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "6Ywb3x8PR4jyYBK61cKZFu",
    "spotifyUrl": "https://open.spotify.com/track/6Ywb3x8PR4jyYBK61cKZFu",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "7liDw9yFUoHZH1sQJH1U35",
    "spotifyUrl": "https://open.spotify.com/track/7liDw9yFUoHZH1sQJH1U35",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "2xiEj5q4V0W02GoF0CD2eY",
    "spotifyUrl": "https://open.spotify.com/track/2xiEj5q4V0W02GoF0CD2eY",
    "coverImageUrl": ""
  },
  {
    "title": "Release Title",
    "artist": "Artist Name",
    "spotifyTrackId": "3xD5E2Yb6rPPFNji1SvCNP",
    "spotifyUrl": "https://open.spotify.com/track/3xD5E2Yb6rPPFNji1SvCNP",
    "coverImageUrl": ""
  }
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/home/releases.json
git commit -m "feat: add releases.json with migrated spotify track ids"
```

---

## Task 2: Update dark portfolio.jsx to render release cards

**Files:**
- Modify: `src/components/dark/home/portfolio.jsx`

The section heading and surrounding layout stay untouched. Only the gallery contents change — iframes become cards.

Each card shows: square cover art (or a dark placeholder if `coverImageUrl` is empty), track title, artist name, and a "Listen on Spotify" link button styled to match the existing site.

- [ ] **Step 1: Replace portfolio.jsx**

Replace the entire contents of `src/components/dark/home/portfolio.jsx` with:

```jsx
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
```

- [ ] **Step 2: Start dev server and verify**

```bash
npm run dev
```

Open http://localhost:5001/dark — confirm:
- New Releases section shows a 3-column card grid
- Each card has a "Cover Art" placeholder (grey box), "Release Title", "Artist Name", and a "Listen on Spotify" button
- Button style matches the rest of the site (white pill button)
- No iframes visible

- [ ] **Step 3: Commit**

```bash
git add src/components/dark/home/portfolio.jsx
git commit -m "feat: replace spotify embeds with release cards in portfolio section"
```

---

## Task 3: Fix dark contact form (Google Forms backend)

**Files:**
- Modify: `src/components/dark/contact/info.jsx`

Convert from a plain HTML form posting to `contact.php` to a React client component using the same Google Forms fetch pattern as `demo-submission.jsx`.

**Note for client:** Before going live, create a Google Form with fields: Name, Email, Subject, Message. Replace the two `TODO` placeholders below with the form's response URL and entry IDs (found in the form's pre-filled link).

- [ ] **Step 1: Replace info.jsx**

Replace the entire contents of `src/components/dark/contact/info.jsx` with:

```jsx
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
      <div
        className="sec-box contact section-padding"
        data-scroll-index="5"
      >
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
```

- [ ] **Step 2: Verify in browser**

With dev server running at http://localhost:5001/dark:
- Scroll to Contact Us section
- Confirm form renders identically to before (same layout, same fields)
- Fill in name + email + message, submit — button shows "Sending..." then success modal appears
- Modal matches the demo form style (neon green border, robot emoji)

- [ ] **Step 3: Commit**

```bash
git add src/components/dark/contact/info.jsx
git commit -m "feat: convert dark contact form to google forms backend"
```

---

## Task 4: Fix light contact form (same change)

**Files:**
- Modify: `src/components/light/contact/info.jsx`

The light theme has the same `contact.php` issue. Apply the same conversion.

- [ ] **Step 1: Read current light info.jsx**

Read `src/components/light/contact/info.jsx` to check for any differences vs the dark version before replacing.

- [ ] **Step 2: Replace light info.jsx**

Replace the entire contents of `src/components/light/contact/info.jsx` with the same component from Task 3 — identical code, same TODO placeholders. The light theme uses the same form fields and can share the same Google Form once the client creates it.

- [ ] **Step 3: Commit**

```bash
git add src/components/light/contact/info.jsx
git commit -m "feat: convert light contact form to google forms backend"
```
