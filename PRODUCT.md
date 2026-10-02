# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with equal weight:

- **Students studying math** (mostly high school, across Algebra 1 through Calculus BC, Statistics, and competition math) looking for a guide on a topic they need, often arriving from a search or a friend's link.
- **Students who might join** the organization to write, typeset, review, or do outreach. No LaTeX experience is required; the team teaches it.

## Product Purpose

Math Mentors is a student-run volunteer organization that writes LaTeX-typeset study materials (problem packets, cheat sheets, full guides, textbooks) and gives them away for free. The site is the library: find a guide, read it in the browser, download the PDF, and, if you want, join the people who make them.

Success: a student finds the guide they need and opens it within a few clicks; a capable student understands how to get involved and does.

## Positioning

What a generic free-worksheet site cannot truthfully claim:

1. **Written by peers.** Every guide comes from students who recently took the course themselves, so it explains things the way a classmate would.
2. **Typeset like a real book.** Every guide is LaTeX-typeset from shared templates, so it reads like a published textbook, not a scanned worksheet.
3. **Complete and free.** Full guides with derivations, worked examples, and practice problems. No accounts, no paywalls.

## Operating Context

- Each guide is a PDF in `public/pdfs/`, with an optional cover image of the same name in `public/thumbnails/` (e.g. `complex.pdf` + `complex.png`).
- Guides are listed in `src/data/resources.ts`; site copy and stats live in `src/data/site.ts`; reviews in `src/data/testimonials.ts`.
- Joining happens through an external interest form (Google Forms) and Discord. Reviews are submitted through a Formspree form and curated by hand before appearing on the site.

## Capabilities and Constraints

- Pages: Home, About, Resources (search plus subject/type filters), one page per guide (embedded PDF, download, share), Share Your Experience (review form), Join, 404.
- Subjects: Algebra 1, Algebra 2, Geometry, Precalculus, Calculus AB, Calculus BC, Statistics, Competition Math. Types: Problem Packet, Cheat Sheet, Full Guide, Textbook.
- Next.js 16 App Router, Tailwind CSS 4, statically generated, deployed on Vercel.
- Content is edited by students in the data files; the design must work with any number of guides, including one.

## Brand Commitments

- Name: Math Mentors (short form "MM").
- Color scheme: black, white, and grays only. This is binding.
- The current logo (blue circle "MM") is temporary and will be replaced; nothing should depend on it.

## Evidence on Hand

- One published guide: "A Guide to Complex Numbers" (Precalculus, Full Guide, by Juho Lee), 32 pages, with a cover image at `public/thumbnails/complex.png`.
- One real student review (Precalculus Student, anonymous) in `src/data/testimonials.ts`.
- Stats in `src/data/site.ts` are maintained by hand (guide count is computed).
- No press, partner schools, or member headcount exist; do not invent them.

## Product Principles

1. The guides are the product: show the real material, not claims about it.
2. Two doors, both obvious: read a guide, or help write one.
3. Honest about scale: a young library presented with pride, never padded.
4. Free means frictionless: no gates between a student and a PDF.
