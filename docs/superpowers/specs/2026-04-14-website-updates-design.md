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

**Layout:** Spotify embeds (playable in-page), 2-column grid. Use the 11 tracks from the owner's old site.

**Data structure** — `src/data/home/works.json` stores Spotify embed URLs:

```json
[
  { "embedUrl": "https://open.spotify.com/embed/track/4bgKoAY7hjO9TWOEyLeCV5?utm_source=generator" },
  { "embedUrl": "https://open.spotify.com/embed/track/2zKUHiwfMlfauvo5Z2NhDM?utm_source=generator" }
]
```

**All 11 tracks from old site:**
- `4bgKoAY7hjO9TWOEyLeCV5`
- `2zKUHiwfMlfauvo5Z2NhDM`
- `7dr45aXsMtXQiPvmpc8BXv`
- `1GKhnp50XUWhYdEfj3s5wt`
- `1vvnBOSzpvA0LdRDipRIJJ`
- `0IfYBYLdSm2jbSMZOu4sr4`
- `68ChWmNjLfcNxpuV63pOw1`
- `6Ywb3x8PR4jyYBK61cKZFu`
- `7liDw9yFUoHZH1sQJH1U35`
- `2xiEj5q4V0W02GoF0CD2eY`
- `3xD5E2Yb6rPPFNji1SvCNP`

**Future upgrade path:** When owner sets up his Spotify or SoundCloud playlist, replace the entire section with a single playlist embed — one URL change, no structural code changes needed.

**Demo submission flow:** Artists submit any streaming link via the form → owner reviews → owner adds approved tracks to his platform playlist → site reflects automatically (once playlist embed is in place).

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
