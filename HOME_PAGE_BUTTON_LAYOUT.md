# Home page button layout and responsive spacing

## What changed

The Home page CTA button layout is controlled by utility classes in:

- `src/app/features/home/home.page.ts`

### Container

`<div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">`

- `grid`: uses CSS grid so each row/column is predictable.
- `grid-cols-1`: on narrow viewports, buttons stack one per row.
- `sm:grid-cols-2`: at small breakpoints, split into two columns for a balanced two-row layout:
  - About / Experience
  - Projects / Contact
- `md:grid-cols-4`: at medium and wider widths, all four buttons align in a single row.
- `gap-4`: creates even spacing between buttons both horizontally and vertically.
- `mt-10`: keeps separation from the paragraph block above.

### Button classes (same class on each button)

`w-full rounded-full border border-slate-700 bg-slate-950/10 px-6 py-4 text-center text-lg font-semibold leading-tight text-slate-300 transition hover:bg-slate-950/20 sm:text-xl`

- `w-full`: each button fills its grid cell, preventing variable row/column overlap.
- `rounded-full border border-slate-700`: visual pill shape with a subtle border.
- `bg-slate-950/10`: lightweight dark translucent background.
- `px-6 py-4`: horizontal and vertical padding keeps tap targets comfortable.
- `text-center`: keeps labels centered within each button.
- `text-lg sm:text-xl`: keeps text readable on larger screens.
- `leading-tight`: slightly compact line height for cleaner text balance.
- `text-slate-300`: muted foreground with good contrast against the dark background.
- `transition hover:bg-slate-950/20`: adds smooth hover feedback.

## Why this approach was chosen

- Prevent overlap or misalignment when wrapping by using `grid` instead of a purely wrapped flex layout.
- Preserve a consistent center-first look as widths change.
- Keep each viewport mode deterministic:
  - single stack → 2-up → 4-up.
- Maintain comfortable touch sizing and readability on mobile without breaking the large-screen alignment.

## Deployment note

This documentation file is source content and will be committed if tracked.  
Build artifact or environment files are not deployed to the live site, including common excluded paths from `.gitignore` such as:

- `/.angular`
- `/dist`
- `/node_modules`
- `.angular`
- `/.angular-cli.json`
- `/.ng/`
- and other generated files.

