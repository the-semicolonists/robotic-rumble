# Robotic Rumble Recordings — Website Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update 5 areas of the Robotic Rumble site — header, label description, new releases, demo submissions, and contact — per client brief.

**Architecture:** In-place edits to existing components. No new files except updated data. Each task is independent and can be committed separately.

**Tech Stack:** Next.js 14, React, JSX. No test framework in project — verify visually via `yarn dev` on port 5001.

---

## File Map

| File | Change |
|---|---|
| `src/components/dark/home/nav-top.jsx` | Remove social icons column, add label name text beside logo |
| `src/components/dark/home/navbar.jsx` | Update nav link labels |
| `src/components/dark/home/profile.jsx` | New label description copy, remove stats block |
| `src/data/home/works.json` | Replace with 11 Spotify embed URLs |
| `src/components/dark/home/portfolio.jsx` | Render Spotify embeds from works.json |
| `src/components/dark/demoSubmission/demo-submission.jsx` | Update copy/messaging |
| `src/components/dark/home/mix-submission.jsx` | Update section heading and subheading |
| `src/components/dark/contact/info.jsx` | Update section heading and intro copy |

---

## Task 1: Update Header — NavTop

**Files:**
- Modify: `src/components/dark/home/nav-top.jsx`

- [ ] **Step 1: Replace the NavTop component**

Open `src/components/dark/home/nav-top.jsx` and replace the entire file content with:

```jsx
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
```

- [ ] **Step 2: Verify visually**

Run `yarn dev` (port 5001) and open `http://localhost:5001`. Confirm:
- Logo image and "Robotic Rumble Recordings" text appear side by side on the left
- Email appears on the right
- Social icons are gone

- [ ] **Step 3: Commit**

```bash
git add src/components/dark/home/nav-top.jsx
git commit -m "feat: update header — logo + label name left, email right"
```

---

## Task 2: Update Navigation Labels

**Files:**
- Modify: `src/components/dark/home/navbar.jsx`

- [ ] **Step 1: Update nav link labels**

Open `src/components/dark/home/navbar.jsx` and replace the entire file content with:

```jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            <li className="nav-item">
              <a href="#0" data-scroll-nav="2">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" data-scroll-nav="3">
                <span>New Releases</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" data-scroll-nav="4">
                <span>Demo Submissions</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" data-scroll-nav="5">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
```

- [ ] **Step 2: Verify visually**

Check `http://localhost:5001`. The sticky nav bar should show: **About · New Releases · Demo Submissions · Contact Us**

- [ ] **Step 3: Commit**

```bash
git add src/components/dark/home/navbar.jsx
git commit -m "feat: update nav labels to match new section names"
```

---

## Task 3: Update Label Description (Profile / Hero)

**Files:**
- Modify: `src/components/dark/home/profile.jsx`

- [ ] **Step 1: Replace the Profile component**

Open `src/components/dark/home/profile.jsx` and replace the entire file content with:

```jsx
import React from 'react';

function Profile() {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img hero-background d-none d-md-block">
        </div>
        <div className="col-lg-8 content hero-background">
          <h1>
            <span className="main-color">Robotic Rumble Recordings</span>
          </h1>
          <h5>
            Founded by @Meetch — LA's favorite robot 🤖
          </h5>
          <p className="mt-20">
            A dance music label built on pure energy, creative freedom, and forward-thinking sound.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
```

- [ ] **Step 2: Verify visually**

Check `http://localhost:5001`. The hero section should show the three lines of copy with no stats block below.

- [ ] **Step 3: Commit**

```bash
git add src/components/dark/home/profile.jsx
git commit -m "feat: update label description copy, remove stats block"
```

---

## Task 4: Update New Releases Data and Component

**Files:**
- Modify: `src/data/home/works.json`
- Modify: `src/components/dark/home/portfolio.jsx`

- [ ] **Step 1: Replace works.json with 11 Spotify embed URLs**

Open `src/data/home/works.json` and replace the entire file content with:

```json
[
  { "embedUrl": "https://open.spotify.com/embed/track/4bgKoAY7hjO9TWOEyLeCV5?utm_source=generator" },
  { "embedUrl": "https://open.spotify.com/embed/track/2zKUHiwfMlfauvo5Z2NhDM?utm_source=generator" },
  { "embedUrl": "https://open.spotify.com/embed/track/7dr45aXsMtXQiPvmpc8BXv?utm_source=generator" },
  { "embedUrl": "https://open.spotify.com/embed/track/1GKhnp50XUWhYdEfj3s5wt?utm_source=generator" },
  { "embedUrl": "https://open.spotify.com/embed/track/1vvnBOSzpvA0LdRDipRIJJ?utm_source=generator" },
  { "embedUrl": "https://open.spotify.com/embed/track/0IfYBYLdSm2jbSMZOu4sr4?utm_source=generator" },
  { "embedUrl": "https://open.spotify.com/embed/track/68ChWmNjLfcNxpuV63pOw1?utm_source=generator&theme=0" },
  { "embedUrl": "https://open.spotify.com/embed/track/6Ywb3x8PR4jyYBK61cKZFu?utm_source=generator&theme=0" },
  { "embedUrl": "https://open.spotify.com/embed/track/7liDw9yFUoHZH1sQJH1U35?utm_source=generator&theme=0" },
  { "embedUrl": "https://open.spotify.com/embed/track/2xiEj5q4V0W02GoF0CD2eY?utm_source=generator&theme=0" },
  { "embedUrl": "https://open.spotify.com/embed/track/3xD5E2Yb6rPPFNji1SvCNP?utm_source=generator&theme=0" }
]
```

- [ ] **Step 2: Replace the Portfolio component**

Open `src/components/dark/home/portfolio.jsx` and replace the entire file content with:

```jsx
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
```

- [ ] **Step 3: Verify visually**

Check `http://localhost:5001`. Scroll to New Releases. Confirm:
- 11 Spotify embeds appear in a 2-column grid
- Tracks are playable in-page
- Section heading reads "New Releases"

- [ ] **Step 4: Commit**

```bash
git add src/data/home/works.json src/components/dark/home/portfolio.jsx
git commit -m "feat: new releases section with 11 Spotify embeds"
```

---

## Task 5: Update Demo Submissions Copy

**Files:**
- Modify: `src/components/dark/home/mix-submission.jsx`
- Modify: `src/components/dark/demoSubmission/demo-submission.jsx`

- [ ] **Step 1: Update mix-submission.jsx section headings**

Open `src/components/dark/home/mix-submission.jsx` and replace the entire file content with:

```jsx
import React from 'react';
import DemoSubmission from '../demoSubmission/demo-submission.jsx';

function MixSubmission() {
  return (
    <div className="sec-box portfolio section-padding bord-thin-bottom" data-scroll-index="4">
      <div className="sec-head mb-20">
        <div className="row">
          <div className="col-lg-8">
            <h6 className="sub-title opacity-7 mb-15">Demo Submissions</h6>
            <h3>
              Only fully finished demos.{' '}
              <span className="main-color">For label representation and official releases.</span>
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
```

- [ ] **Step 2: Update demo-submission.jsx form copy**

Open `src/components/dark/demoSubmission/demo-submission.jsx`. Make the following targeted edits:

Replace the form title:
```jsx
// Old
<h2 style={{ color: "#c8f31d", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>
  Get Heard at Robotic Rumble
</h2>

// New
<h2 style={{ color: "#c8f31d", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>
  Submit Your Demo
</h2>
```

Replace the form description:
```jsx
// Old
<p style={{ color: "#ccc", marginBottom: "20px", textAlign: "center" }}>
  We're always listening for new talent. Drop your best work below.
</p>

// New
<p style={{ color: "#ccc", marginBottom: "20px", textAlign: "center" }}>
  We're looking for finished, release-ready tracks. If your sound fits the Robotic Rumble Recordings vibe, we'll be in touch.
</p>
```

Replace the consent checkbox label:
```jsx
// Old
<label style={{ fontSize: "0.9rem", color: "#ccc", flex: 1 }}>
  I confirm that I am the creator or have the rights to the
  submitted music, and I give Robotic Rumble permission to use it in
  live events, streams, or promotions.
</label>

// New
<label style={{ fontSize: "0.9rem", color: "#ccc", flex: 1 }}>
  I confirm I am the creator or hold full rights to this track, and I give Robotic Rumble Recordings permission to consider it for official label representation and release.
</label>
```

- [ ] **Step 3: Verify visually**

Check `http://localhost:5001`. Scroll to Demo Submissions. Confirm:
- Section heading: "Demo Submissions"
- Subheading: "Only fully finished demos. For label representation and official releases."
- Form title: "Submit Your Demo"
- Form description updated
- Consent checkbox text updated
- All form fields (Artist Name, Short Bio, Track Title, Track Link, checkbox) still present

- [ ] **Step 4: Commit**

```bash
git add src/components/dark/home/mix-submission.jsx src/components/dark/demoSubmission/demo-submission.jsx
git commit -m "feat: update demo submissions copy for label representation"
```

---

## Task 6: Update Contact Us Copy

**Files:**
- Modify: `src/components/dark/contact/info.jsx`

- [ ] **Step 1: Update the heading and intro text in info.jsx**

Open `src/components/dark/contact/info.jsx`. Make the following targeted edits:

Replace the heading:
```jsx
// Old
<h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
<h3>Let's build something loud together!</h3>
<p className="fz-15 mt-10">
  If you would like to work with us or just want to get in touch,
  we'd love to hear from you!
</p>

// New
<h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
<h3>Let's build something loud together!</h3>
<p className="fz-15 mt-10">
  For general questions, marketing, partnerships, or business inquiries — we'd love to hear from you.
</p>
```

- [ ] **Step 2: Verify visually**

Check `http://localhost:5001`. Scroll to the contact section. Confirm:
- Sub-label reads "Contact Us"
- Intro paragraph reflects updated copy
- Form fields, phone number, and social links are unchanged

- [ ] **Step 3: Commit**

```bash
git add src/components/dark/contact/info.jsx
git commit -m "feat: update contact section heading and intro copy"
```

---

## Notes for Future

- **Playlist upgrade:** When the owner sets up his Spotify or SoundCloud playlist, replace `works.json` with a single entry `{ "embedUrl": "https://open.spotify.com/embed/playlist/{id}" }` and update the iframe `height` to `352` in `portfolio.jsx`. No other changes needed.
- **Colors/images/style:** Deferred by client — handled in a separate pass.
