## Add a Private Demo Video Page

A standalone `/demo` page you share directly with clients. Not linked from the navbar or footer — only people with the URL can find it.

---

### What we'll build

1. **New page at `/demo`** — clean, on-brand layout matching the site (dark background, Bricolage Grotesque headings, teal accent).
2. **Embedded video player** — responsive 16:9 iframe. You paste an unlisted YouTube or Vimeo share URL into a single constant in the file; the page auto-embeds it.
3. **Supporting copy** — headline ("See Moh's Automation in action"), 1–2 sentence intro, and a "Book a call" button linking to your contact section (`/#contact`).
4. **No nav/footer links to it** — the page exists only for people you send the URL to (e.g. `mohsautomation.com/demo`).
5. **SEO hidden** — add `<meta name="robots" content="noindex, nofollow">` so search engines skip it.

---

### What you'll do after

- Upload your demo to YouTube (set to **Unlisted**) or Vimeo (set to **Private / hide from Vimeo**).
- Send me the share link — I'll drop it into the page. Or you can paste it into the one clearly-marked constant yourself.

---

### Note on "private"

An unlisted link is private-by-obscurity: anyone with the URL can watch, but it won't appear in search or your channel. If you later want stronger protection (password gate, or only specific emails allowed), that's a separate build — say the word.

---

### Technical summary

- New file: `src/pages/Demo.tsx`
- New route in `src/App.tsx`: `<Route path="/demo" element={<Demo />} />` above the catch-all
- Reuse existing `Navbar` + `Footer` for consistency
- Video URL stored as a constant at the top of `Demo.tsx` for easy swapping
- `noindex` meta injected via a small `useEffect` (no extra deps)
