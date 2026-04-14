# Robotic Rumble Recordings — Website Updates Design

**Date:** 2026-04-14
**Scope:** Content and layout updates across 5 areas per client brief
**Approach:** In-place component updates + upgraded releases data structure

---

## 1. Header (`NavTop`)

**Changes:**
- Remove the center social icons column entirely
- Left: existing logo image + "Robotic Rumble Recordings" text beside it
- Right: email only (`info@roboticrumble.com`)
- Update navbar link labels (the "About" nav link points to the Skills/about section, not the Profile hero — it stays as "About"):
  - About → unchanged
  - Releases → New Releases
  - Demo Submission → Demo Submissions
  - Contact → Contact Us

**Files:** `src/components/dark/home/nav-top.jsx`, `src/components/dark/home/navbar.jsx`

---

## 2. Label Description (`Profile`)

**Changes:**
- H1: "Robotic Rumble Recordings"
- Subtitle: "Founded by @Meetch — LA's favorite robot 🤖"
- Body: "A dance music label built on pure energy, creative freedom, and forward-thinking sound."
- Remove stats block (Events Monthly, Tracks Played Live)

**Files:** `src/components/dark/home/profile.jsx`

---

## 3. New Releases (`Portfolio` + `works.json`)

**Data structure** — upgrade `src/data/home/works.json` to:

```json
[
  {
    "title": "Track Title",
    "artist": "Artist Name",
    "year": "2025",
    "artwork": "/assets/imgs/works/cover.jpg",
    "links": {
      "spotify": "https://...",
      "appleMusic": "https://...",
      "soundcloud": "https://..."
    }
  }
]
```

- `links` fields are optional — only render a button if the URL is present
- Remove all Spotify embed iframes
- Existing `works.json` entries (which use Spotify embed URLs) are replaced with real track data using this new structure

**Card layout (Option A):**
- Artwork thumbnail
- Title + artist + year
- Platform buttons: Spotify, Apple Music, SoundCloud (skipped if no link)

**Section copy:**
- Heading: "New Releases"
- Subheading: "These creators are shaking up our events. Real artists. Real mixes."

**Files:** `src/components/dark/home/portfolio.jsx`, `src/data/home/works.json`

---

## 4. Demo Submissions (`DemoSubmission`)

**Copy changes only — all form fields stay the same:**

| Element | New copy |
|---|---|
| Section heading | "Demo Submissions" |
| Section subheading | "Only fully finished demos. For label representation and official releases." |
| Form title | "Submit Your Demo" |
| Form description | "We're looking for finished, release-ready tracks. If your sound fits the Robotic Rumble Recordings vibe, we'll be in touch." |
| Consent checkbox | "I confirm I am the creator or hold full rights to this track, and I give Robotic Rumble Recordings permission to consider it for official label representation and release." |

**Files:** `src/components/dark/demoSubmission/demo-submission.jsx`, `src/components/dark/home/mix-submission.jsx`

---

## 5. Contact Us (`Info`)

**Copy changes only — all form fields stay the same:**

- Section heading: "Contact Us"
- Intro text: "For general questions, marketing, partnerships, or business inquiries — we'd love to hear from you."
- Phone number and social links: unchanged

**Files:** `src/components/dark/contact/info.jsx`

---

## Out of Scope

- Colors, images, and visual style (deferred by client)
- Services section — no changes requested
- Testimonials section — no changes requested
- Light theme variants — not in use
- Social media links (placeholder `#0` hrefs) — no changes requested
