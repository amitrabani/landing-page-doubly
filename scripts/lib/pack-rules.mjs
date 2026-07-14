// Shared parity rules for the localized /tools + /learn content packs.
//
// English (content/tools-i18n/en/*.json) is the source of truth. A localized
// pack must mirror en's structure exactly and keep every link href, slug, and
// bold marker byte-for-byte identical — translators localize TEXT, never
// targets. These rules are used by two entry points:
//
//   scripts/check-tools-content.mjs  — repo-wide gate (npm run check:tools-content)
//   scripts/check-pack.mjs           — one pack (npm run check:pack -- <locale> <slug>)
//
// Keeping them here means the per-pack check a translator runs is exactly the
// check CI runs; they cannot drift apart.

export function linkHrefs(str) {
  const hrefs = [];
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(str)) !== null) hrefs.push(m[1]);
  return hrefs;
}

// Walk two parallel values; collect structural + link + emptiness problems.
export function compare(en, loc, trail, problems) {
  const kind = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v);
  if (kind(en) !== kind(loc)) {
    problems.push(`${trail}: expected ${kind(en)}, got ${kind(loc)}`);
    return;
  }
  if (en === null) return;
  if (Array.isArray(en)) {
    if (en.length !== loc.length) {
      problems.push(`${trail}: array length ${loc.length} != en's ${en.length}`);
    }
    const n = Math.min(en.length, loc.length);
    for (let i = 0; i < n; i++) compare(en[i], loc[i], `${trail}[${i}]`, problems);
    return;
  }
  if (typeof en === 'object') {
    // Treat a null-valued key as equivalent to an absent one. The section
    // objects are a discriminated union: a `steps` section legitimately carries
    // only `steps`, and whether the unused `paragraphs`/`faqs` are `null` or
    // omitted is cosmetic (the renderer reads only the payload matching `kind`).
    for (const key of Object.keys(en)) {
      if (!(key in loc)) {
        if (en[key] !== null) problems.push(`${trail}.${key}: MISSING`);
        continue;
      }
      if (en[key] === null && loc[key] === null) continue;
      compare(en[key], loc[key], `${trail}.${key}`, problems);
    }
    for (const key of Object.keys(loc)) {
      if (!(key in en) && loc[key] !== null) {
        problems.push(`${trail}.${key}: EXTRA (not in en)`);
      }
    }
    return;
  }
  if (typeof en === 'string') {
    // slug and href-bearing identity fields must stay identical to en. This
    // also covers _index.cards[i].slug, which the hub uses to build tool links.
    if (trail.endsWith('.slug')) {
      if (en !== loc) problems.push(`${trail}: slug changed ("${loc}" != "${en}")`);
      return;
    }
    if (loc.trim() === '' && en.trim() !== '') {
      problems.push(`${trail}: empty string (en is non-empty)`);
    }
    const enHrefs = linkHrefs(en);
    const locHrefs = linkHrefs(loc);
    if (enHrefs.length !== locHrefs.length) {
      problems.push(`${trail}: has ${locHrefs.length} link(s), en has ${enHrefs.length}`);
    } else {
      for (let i = 0; i < enHrefs.length; i++) {
        if (enHrefs[i] !== locHrefs[i]) {
          problems.push(`${trail}: link href changed ("${locHrefs[i]}" != en's "${enHrefs[i]}")`);
        }
      }
    }
    // Bold/em marker balance should survive translation.
    const bold = (s) => (s.match(/\*\*/g) || []).length;
    if (bold(en) !== bold(loc)) {
      problems.push(`${trail}: ${bold(loc)} '**' markers != en's ${bold(en)}`);
    }
  }
}
