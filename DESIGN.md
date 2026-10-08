---
name: Math Mentors
description: A numbered paperback series of free, student-written, LaTeX-typeset math guides.
colors:
  ink: "#171717"
  paper: "#fafafa"
  board-white: "#ffffff"
  rule: "#e5e5e5"
  graphite: "#525252"
  pencil: "#737373"
  ink-lift: "#404040"
  spine-ink: "#262626"
  dashed-blank: "#d4d4d4"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7.4vw, 6.25rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  lead:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
  volume-number:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    fontFeature: "\"tnum\" 1"
rounded:
  none: "0px"
spacing:
  gutter: "24px"
  section: "80px"
  block: "48px"
  stack: "32px"
  container: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink-lift}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  search-field:
    backgroundColor: "{colors.board-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "52px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "36px"
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  cover-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
  cover-paper:
    backgroundColor: "{colors.board-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  shelf-spine:
    width: "56px"
    height: "320px"
---

# Design System: Math Mentors

## Overview

**Creative North Star: "The Numbered Paperback Series"**

Math Mentors presents its library as a mid-century mathematics paperback series. Every guide is a volume with a number (No. 001), a black-and-white cover carrying a real diagram from its topic, and a spine that stands on a shelf. Pages are built from book parts rather than web parts: covers, spines, a shelf, a colophon, a credits page, and an ink back cover. The series continues past its last printed volume into a dashed, blank next volume that is always the door to joining.

The palette is strictly achromatic: paper ground, solid ink fields, and a short neutral ramp for secondary text and rules. One typeface, Schibsted Grotesk, does everything; titles are set at 900, tight and heavy like cover lettering, and running text sits at 400-500. Corners are square everywhere. Structure comes from 2px ink rules and whole-cover modules, not from cards, tints, or shadows. Density is relaxed: wide 80px section rhythm, big titles, short measures.

The world rejects the editorial hairline-and-kicker page and the rounded-card edtech landing.

**Key Characteristics:**
- Every guide is a numbered volume; numbers are set "No. 001" with tabular digits.
- Covers alternate ink and white board by volume parity, so the shelf reads as a series.
- Black, white, and gray only; no hue anywhere in the system.
- One grotesque family; 900 at -0.04em and 0.92 leading for every title.
- Square corners, 2px ink rules, dotted index leaders.
- One easing curve (expo-out) for the one signature motion: lifting a book.

## Colors

A printer's palette: paper, ink, and the grays between them. Nothing else.

### Neutral
- **Ink** (`ink`): Text, solid cover boards on odd volumes, primary buttons, the header and section rules, the back-cover field, active filter chips, selection highlight, focus ring.
- **Paper** (`paper`): The page ground and the text color on ink fields.
- **Board White** (`board-white`): Even-volume cover boards (with a 15% ink outline), search fields, and the PDF frame; slightly brighter than paper so a cover reads as an object on the page.
- **Rule** (`rule`): 1px row dividers inside lists, credits, and the colophon; the footer's lower rule.
- **Graphite** (`graphite`, neutral-600): Lead and body copy, filter-chip text, footer links.
- **Pencil** (`pencil`, neutral-500): Captions, metadata, subject/type lines on white covers, the blank volume's resting text, input placeholders and icons.
- **Ink Lift** (`ink-lift`, neutral-700): Hover state of ink buttons.
- **Spine Ink** (`spine-ink`, neutral-800): The spine of a face-out ink volume, one step off ink so the spine reads as a separate board (white volumes take neutral-100 for the same reason).
- **Dashed Blank** (`dashed-blank`, neutral-300): The dashed border of the unwritten next volume at rest.

Neutral-400 (#a3a3a3) is used for secondary text on ink (cover subject lines, back-cover captions) and for dotted index leaders and link underlines on paper. On paper it is a rule color, not a text color.

### Named Rules
**The No-Hue Rule.** The system is black, white, and neutral gray only. The logo is ink too: a radical sign whose stroke forms an M, with a small m under its bar (`public/mark.png` in the header; white-ground versions for the browser and home-screen icons).

**The Parity Rule.** Odd volumes print on ink board with paper type; even volumes print on white board with ink type. Tone is derived from the volume number, never chosen per guide.

## Typography

**Display Font:** Schibsted Grotesk (via next/font, `--font-schibsted`, with the system sans fallback)
**Body Font:** Schibsted Grotesk
**Label/Mono Font:** none; numbers use the same face with tabular figures

**Character:** One grotesque in two voices: a compressed, heavy 900 that behaves like cover lettering, and a plain 400-500 text voice that stays out of the way.

### Hierarchy
- **Display** (900, clamp 3rem to 6.25rem, 0.92): The page's single masthead line (home, Join, guide title at clamp 2.75rem to 5.5rem). Back cover "Write No. 002." scales to 7rem.
- **Headline** (900, clamp 2.5rem to 4rem, 0.92): Home and Join section titles ("The series so far", "Credits for No. 002").
- **Title** (900, clamp 2.25rem to 3.25rem, 0.92): Guide-page section titles (Contents, Read it here). Colophon claims and credit roles use the same setting at clamp 1.6-3rem.
- **Lead** (400, 18px, 1.625): The paragraph under a display line; capped at 52ch.
- **Body** (400, 15px, 1.625): Running text, descriptions, index entries; capped at 44-56ch.
- **Label** (600, 14px): List headings ("Or browse by subject", footer column heads, Volume / Written by terms), button text. Sentence case; never uppercase or tracked.
- **Cover type** (container-relative): Imprint and number at max(10px, 4.6cqw) 600; title in the title setting at 12.5cqw; subject line at max(10px, 4.2cqw). Spine numbers at max(9px, 2.6cqw) when face-out, 11px on the shelf.

### Named Rules
**The Title-Set Rule.** Every title, at every size from a 15px spine to a 7rem back cover, uses the same setting: weight 900, letter-spacing -0.04em, line-height 0.92. Do not introduce a second heavy setting.

**The Tabular Digits Rule.** Volume numbers render "No. 001" with tabular figures on the digits only. In this face the numeric feature also widens the period, which would read "No . 001", so the label and period stay proportional.

**The Floor Rule.** Type sized in container units carries a px floor (`max(10px, …)`, `max(11px, …)`, `max(9px, …)`) so a thumbnail cover never prints illegible type.

## Layout

A single centered column, 1152px max (`max-w-6xl`) with 24px gutters, shared by header, every section, and footer. Sections are separated by 80px of vertical space (96px on the back cover at sm and up), not by background bands; the one full-bleed field is the ink back cover. Two-column splits are asymmetric and vary by content (1.35fr/1fr hero, 1fr/2.4fr index, 1.6fr/1fr colophon rows, a 22rem volume column beside the guide text) and collapse to one column below `lg` or `md`. Library covers grid at 2 / 3 / 4 columns with 24px column and 48px row gaps. The shelf scrolls horizontally on narrow screens with the scrollbar hidden. Header is sticky at 56px. Touch targets hold a 32-44px minimum height on every link and control.

## Elevation & Depth

The page is flat. Depth is printed, not lit: ink fields, 2px rules, and a cover's own board against the paper. The single shadow belongs to a physical object, the large face-out volume on the home hero and the guide page, which casts a soft ambient drop beneath it. Covers in grids and shelf spines carry no shadow; they lift by translation on hover instead.

### Shadow Vocabulary
- **Book drop** (`box-shadow: 0 24px 40px -24px rgb(23 23 23 / 0.55)`): Only under a large face-out Volume. Never on buttons, fields, lists, or grid covers.

### Named Rules
**The Object-Only Shadow Rule.** A shadow means "this is a book you could pick up." UI surfaces never take one.

## Shapes

Square corners throughout (0px radius); there is no radius scale. Borders are 2px ink for anything structural or interactive (header, footer, buttons, search field, PDF frame, list tops, the shelf's baseline) and 1px rule for row dividers. White covers take a 1px inset outline at 15% ink so they hold their edge on paper. The unwritten volume is the only dashed outline in the system (2px dashed). Every cover and blank volume is a 5:7 rectangle. Cover figures are inline SVG on a 100x100 field drawn in currentColor with non-scaling strokes (1.5 main, 0.75 thin, 2-3 dash), round caps and joins, solid dots at key points; the UI icon set shares the same 1.5 round stroke on a 24px grid.

## Components

### Buttons
Ink slabs with a trailing arrow pushed to the far edge.
- **Shape:** Square (0px), 2px border, label left and icon right with a 32px gap.
- **Primary:** Ink fill, paper text, 600 weight; md 44px tall, 16px sides, 14px text; lg 52px, 20px sides, 16px text.
- **Hover / Focus:** Fill steps to ink lift over 200ms; the arrow slides 4px on the expo-out curve (300ms). Focus is the global 2px ink outline at 3px offset.
- **Secondary:** Transparent with an ink border; inverts to ink fill on hover.
- **Inverse / Inverse outline:** For ink fields: paper fill with ink text, or a 60% paper outline that fills to paper on hover.

### Chips
- **Style:** Filter chips are bare 14px text, 36px tall, 10px sides, graphite; hover adds a neutral-200 fill.
- **State:** Active is a solid ink slab with paper 600 text and `aria-pressed`.

### Cards / Containers
There are no cards. The container unit is the whole cover (see Cover), and lists are ruled: a 2px ink top rule with 1px rule rows.

### Inputs / Fields
- **Style:** Board white field in a 2px ink frame, 52px tall, search icon in pencil at the left; on the home hero an attached ink Search button closes the right end.
- **Focus:** The input itself suppresses its outline inside the framed field; the frame already reads as active.

### Navigation
- **Header:** Sticky, paper ground, 2px ink bottom rule. Wordmark in 900 at -0.04em. Links 14px 500 in pencil, ink on hover; the active link is ink with a 4px ink bar sitting on the header rule. Join is a small ink slab, not a link.
- **Mobile:** A 44px menu toggle opens a list of 20px 900 entries ruled by 1px dividers.
- **Footer (colophon):** 2px ink top rule, wordmark at 30px 900, three link columns with 600 heads, 12px imprint line under a 1px rule.

### Cover
The series' one cover design, sized in container units so a single component serves a 120px thumbnail and a 440px hero. Imprint "Math Mentors" and the volume number across the top over a rule, the guide's figure set off-center (left inset 16cqw, width 70cqw), the title heavy at the foot, subject and type beneath. Tone follows the Parity Rule.

Figures are drawn by hand for one specific guide, never assigned by subject; a guide without one prints a title-only cover until its figure is made. Figures are inline SVG in currentColor with non-scaling strokes, and carry math labels in STIX Two Text italic (`font-math`) that hide below a 150px cover.

### Spine and Shelf (signature)
A spine is 56px by 320px on the shelf: series mark at the head, title running bottom-to-top in the title setting, number at the foot. On the shelf, spines stand on a 2px ink baseline with 6px gaps. Hover or focus pulls the book up 16px and slides its 192px cover out beside it, both over 500ms on the expo-out curve. The shelf always ends with the blank next volume's dashed spine. Face-out, the spine attaches to the cover's left edge at 12cqw wide.

### Blank Volume
The unwritten next volume: a 5:7 dashed cover in pencil reading "Your volume here." with the next number. Hover turns border and text to ink and nudges the arrow. It links to Join (or the interest form) and appears wherever the series ends: hero, shelf, library grid, empty results, Join.

### Leader list
Rows joined to a count or number by a dotted neutral-400 leader on the last line's baseline, like a book's index or contents. Used for the hero's subject list with guide counts.

## Do's and Don'ts

### Do:
- **Do** derive every new surface from book parts: cover, spine, credits, contents, index, colophon, back cover.
- **Do** set every title with the title setting (900, -0.04em, 0.92) and every volume number through the tabular-digits component.
- **Do** use 2px ink rules for structure and 1px rule (#e5e5e5) for rows.
- **Do** end any listing of the series with the blank next volume linking to Join.
- **Do** use the expo-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for lift and arrow motion, and keep motion to translation.
- **Do** give container-unit type a px floor.

### Don't:
- **Don't** introduce any hue.
- **Don't** round corners or wrap content in cards.
- **Don't** put a shadow on anything that is not a large face-out volume.
- **Don't** add small uppercase tracked labels or kickers above titles; section heads are the title alone.
- **Don't** apply tabular figures to the whole "No. 001" string.
- **Don't** set text in neutral-400 on paper; it is a leader and underline color there.
