# Robotic Rumble Recordings — Website Update Design

**Date:** 2026-07-07  
**Scope:** Two targeted changes to the existing dark-theme site. All other sections (Services, About/Profile, Demo Submissions form, Testimonials, Footer) remain untouched.

---

## Summary of What's Already Done

After auditing the codebase, most of the client's requests are already implemented:

| Client ask | Status |
|---|---|
| Logo next to "Robotic Rumble Recordings" in header | ✅ Already working (`/assets/imgs/robotic-logo.png` in `nav-top.jsx`) |
| Label description copy | ✅ Already correct in `profile.jsx` |
| Demo Submissions — only finished demos, label representation copy | ✅ Already in `mix-submission.jsx` and `demo-submission.jsx` |
| Contact Us section with form | ✅ Exists in `contact/info.jsx` |

---

## Change 1 — New Releases: Cards Instead of Embedded Players

### Current state
`portfolio.jsx` renders the `works.json` data as embedded Spotify iframes. The data file only has `embedUrl` fields — no titles, artists, or cover art.

### Target state
Each release renders as a card with:
- Cover art image (square, from `coverImageUrl`)
- Track title
- Artist name
- "Listen on Spotify" button linking to `spotifyUrl`

The section title, intro copy, and surrounding layout stay exactly as-is.

### Data structure change
`src/data/home/works.json` becomes `src/data/home/releases.json` with this structure per entry:

```json
{
  "title": "Track Title",
  "artist": "Artist Name",
  "spotifyTrackId": "4bgKoAY7hjO9TWOEyLeCV5",
  "spotifyUrl": "https://open.spotify.com/track/4bgKoAY7hjO9TWOEyLeCV5",
  "coverImageUrl": ""
}
```

The 11 existing track IDs are migrated. `title`, `artist`, and `coverImageUrl` are left as placeholders for the client to fill in. The `spotifyUrl` is derived from `spotifyTrackId`.

**Note:** Spotify's oEmbed endpoint (`https://open.spotify.com/oembed?url=...`) returns title, artist, and thumbnail URL without authentication. This could be used at build time to auto-populate metadata — defer to implementation decision.

### Files changed
- `src/data/home/works.json` → rename/replace with `releases.json` (new structure)
- `src/components/dark/home/portfolio.jsx` — update import path and replace iframe rendering with card rendering
- `src/components/light/home/portfolio.jsx` — same update (light theme parallel)
- `src/ldata/home/works.json` → rename/replace (light theme parallel)

### Card layout
3-column grid on desktop, 1-column on mobile. Each card:
```
┌─────────────────┐
│   Cover Art     │  ← square image, coverImageUrl, placeholder if empty
│                 │
├─────────────────┤
│ Track Title     │  ← bold
│ Artist Name     │  ← muted
│ [Listen on Spotify] │  ← button, links to spotifyUrl
└─────────────────┘
```

Follows existing site design language: dark card background, existing button styles, consistent spacing.

---

## Change 2 — Contact Form: Google Forms Backend

### Current state
`contact/info.jsx` has `<form action="contact.php">` which does not work on a static Next.js export.

### Target state
Convert to the same Google Forms approach used by `demo-submission.jsx`:
- `"use client"` directive added
- State managed with `useState` for each field (name, email, subject, message)
- `handleSubmit` POSTs to a Google Forms response URL with `mode: "no-cors"`
- Success modal shown on submit (matching the demo form's modal style)
- A new Google Form needs to be created for contact submissions; the response URL and entry IDs are added to the component

### Fields (unchanged)
- Name (required)
- Email (required)
- Subject
- Message (required)

### Files changed
- `src/components/dark/contact/info.jsx` — convert to client component with Google Forms submit
- `src/components/light/contact/info.jsx` — same update (light theme parallel, if it exists)

---

## Out of Scope

- Colors, images, and visual style (client explicitly deferred)
- Services section — no changes
- Testimonials section — no changes
- About/Profile hero section — copy already correct
- Demo Submissions form — already correct
- Footer — no changes
- Light theme routes — update in parallel with dark theme changes (same files, same pattern)
