<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project structure

- **Single-page landing (by design):** all home sections live in `src/routes/index.tsx`,
  composed from section components in `src/components/`. In-page navigation uses hash
  anchors on purpose (the user requested one scrolling page). Future package listings,
  destination pages and booking flows are separate route files under `src/routes/`.
- **Contact form:** Phase 1 has no backend persistence — the form validates client-side,
  then hands off to WhatsApp with a prefilled enquiry message and shows a confirmation
  state. If persistence is added later, keep the WhatsApp handoff for continuity.
- **Brand contact details:** only the two real numbers in `src/lib/site.ts`
  (+91 8129847487 primary, +91 7736851656 secondary). Never introduce placeholder
  numbers, invented reviews, achievements or package prices.
- **Design tokens:** all colors/fonts live in `src/styles.css` (oklch tokens + @theme
  inline). No hardcoded color utilities in components — including the WhatsApp green,
  which is the `--color-whatsapp` token.
