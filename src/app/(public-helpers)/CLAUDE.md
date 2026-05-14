# CLAUDE.md - Doubly SEO Machine

Standing instructions for Claude Code. Read before creating or editing any page under `/tools/*` or `/learn/*`.

This file is about **how** to build, not **what** to build. The roadmap of specific tools and articles lives in `PROJECT_PLAN.md`. When Amit asks for a new tool or article, treat this file as the rulebook and the prompt as the spec.

---

## 1. Project context

**Product:** Doubly - iOS app for ADHD adults. Helps users start tasks (brain dump → one next step → accountability / body doubling).

**Audience reading the site:** ADHD adults in moments of overwhelm. Mobile-first. Short attention. Tired of being told they're "lazy" by productivity content.

**Site goal:** Rank for queries this audience actually types, give them real value in-browser, and convert engaged users to App Store installs.

**Conversion path:** Free tool/article delivers value first → soft CTA at the bottom invites the deeper app experience. Never the other way around.

---

## 2. Core philosophy

These principles override everything below if a conflict arises.

1. **The tool IS the answer.** A page targeting "X timer" contains a working X timer above the fold, not an article about X timers. The page satisfies the query directly.
2. **Quality bar over publishing speed.** Five excellent pages beat fifty mediocre ones. Algorithms increasingly penalize scaled-thin content.
3. **Mobile-first, always.** Most ADHD users land on mobile. Design and audit for mobile before desktop.
4. **No friction before value.** No popups, no email gates, no signup walls, no autoplay. The user gets value before being asked for anything.
5. **Honesty over hype.** No fake testimonials, no invented stats, no fake update dates, no clinical claims. Real numbers or none.
6. **Build for humans and machines simultaneously.** Same page must serve a stressed ADHD adult AND get cited by Google AI Overviews / ChatGPT / Perplexity. The techniques overlap more than they conflict.
7. **When unsure, ask:** *"Would a real ADHD adult, landing here from Google in a moment of overwhelm, find this page useful and not annoying?"* If no, fix or don't ship.

---

## 3. URL & file conventions

- Lowercase only. Hyphens, never underscores or spaces.
- No trailing slashes. No dates in URLs. No `/blog/` prefix.
- Tool pages: `/tools/[tool-name]`. Hub: `/tools`.
- Articles: `/learn/[article-slug]`. Hub: `/learn`.
- Comparison pages: `/vs/[competitor-slug]`.
- Persona pages: `/for-[persona]`.
- Never change a URL after publish without a 301 redirect.
- Reserve `/[locale]/` URL structure for future i18n but do not implement until explicitly requested.

### 3.1 Site infrastructure

- `/sitemap.xml` is a sitemap index. Each content type gets its own sitemap (`/sitemap-tools.xml`, `/sitemap-learn.xml`, etc.) so growth doesn't blow the 50K-URL or 50MB cap. Auto-generated, includes every indexable page.
- `/robots.txt` references the sitemap and follows the rules in §6.1.
- `/404` is a real, useful page: brief reassurance, search box, links back to the tools hub and the learn hub. A bad 404 increases bounce, which the helpful-content system reads as a negative signal.
- `/.well-known/apple-app-site-association` exists and is configured per §12.2.

---

## 4. How to build a free tool page

Every `/tools/[name]` page follows this skeleton, in this order. Deviations require a reason.

Before starting, identify the **search intent** of the target query and confirm a tool page is the right template:

- *Informational* ("what is body doubling") → article in `/learn/`, not a tool page.
- *Navigational* ("doubly app") → brand page.
- *Transactional* ("free pomodoro timer", "brain dump tool") → tool page. The user wants to *do* the thing now.
- *Commercial investigation* ("doubly vs goblin tools", "best adhd app 2026") → comparison page in `/vs/`.

If a query has mixed intent, the tool page wins when there's any meaningful "do" component. People searching "how to brain dump" still want a brain dump tool right there with the explanation underneath.

### 4.1 The tool itself (above the fold)

- Working, instant-load, no signup, no email wall, no popup.
- Mobile-first layout. Test at 360px width before committing.
- State persists via `localStorage` where useful. Never require an account.
- Interactive widgets must run in a Web Worker if they do heavy computation (AI calls, complex parsing). Main thread stays free.

### 4.2 H1 with keyword match

One H1 per page. Contains the primary keyword in natural language. No keyword stuffing.

### 4.3 Answer capsule (50–60 words, immediately after H1)

A direct, self-contained answer to the implicit question of the page. No preamble. No "in today's world." Written so a generative engine could quote it verbatim and a reader could understand the tool's value in two breaths.

Pattern: *what it is → who it's for → how it works in one sentence → what to do next.*

### 4.4 Short intro

One to two sentences expanding on the capsule. Use the target keyword and one or two semantic variants naturally.

### 4.5 "How to use" section (H2)

Three to five numbered steps. This targets the "how to" longtail variants of the keyword.

Where a short demo video exists, embed it here (YouTube or self-hosted). Apply `VideoObject` schema per §7.3. Embedded video lifts dwell time (a known ranking signal), captures multi-modal AEO signals, and lets the video itself rank in Google Video carousels - three wins from one embed.

### 4.6 "Why this works for ADHD brains" section (H2)

The on-brand differentiator. Explain the cognitive or behavioral mechanism the tool addresses. Cite at least one authoritative source. Plain language, no clinical claims, no diagnosis language.

### 4.7 FAQ (H2 with H3 per question)

Four to six questions. Mine "people also ask" for the primary keyword. Each answer is two to four sentences, leading with the direct answer. Wrap in FAQPage JSON-LD schema.

### 4.8 Related tools (H2)

Three to five internal links to other tools. Prefer thematically adjacent ones. Anchor text describes the linked tool, never "click here."

### 4.9 Soft app CTA

Headline pattern: *"Want this in your pocket? Doubly is built for ADHD brains."* Two to three sentences explaining what the app does that the web tool doesn't. App Store badge. No popup. No interstitial. No email capture.

### 4.10 Footer

Standard site footer.

---

## 5. How to build an article

Every `/learn/[slug]` page follows this skeleton.

### 5.1 H1 matching the target query

In natural language. One H1 per page.

### 5.2 Answer capsule (50–60 words)

Same rules as §4.3. Above the fold. This is what AI Overviews and featured snippets pull.

### 5.3 TL;DR section (optional, for longer articles)

Three to five bullets summarizing key takeaways.

### 5.4 Body

Substantial. Avoid filler. H2/H3 hierarchy maps to "people also ask" plus semantic siblings of the target query. Short paragraphs (one to three sentences). Generous whitespace. Visual chunking.

### 5.5 Citations and evidence (mandatory)

- At least one citation to a peer-reviewed source or recognized authority (ADHD research organization, government health body, major mental-health publication) per article.
- At least one direct quotation from an expert per longer piece.
- At least one statistic per couple hundred words where the topic admits it.
- Link out to authoritative sources. Outbound links to trustworthy domains increase, not decrease, the page's trust signal.

### 5.6 Internal links

At least three contextual links to relevant tools. At least two links to sibling articles. Descriptive anchor text, never generic.

### 5.7 Author bio block

Real name. Real photo. First-person framing of experience with ADHD where applicable. Links to verifiable third-party profiles. Apply `Person` schema. If medically reviewed, attribute the reviewer with credentials and link to their bio.

### 5.8 Soft CTA

Same pattern as tool pages.

---

## 6. How to write for AI search visibility (GEO / AEO)

Generative engines (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude) decide what to cite based on signals overlapping with classical SEO but not identical. Apply these on every page:

- **Answer-first structure.** The most important sentence is the first sentence after the H1. Generative engines lift these.
- **Citation density.** At least one citation to an authoritative source per page. Replicated study finding: citations dramatically increase the odds a page gets quoted by an LLM.
- **Statistics.** Concrete numbers, with citations, anywhere a topic admits them. LLMs preferentially cite content with hard data.
- **Quotations.** Direct expert quotations get pulled verbatim. Wrap them in `<blockquote>` and `Quotation` schema.
- **Datemark every page.** Honest `datePublished` and `dateModified` in Article schema. Never fake a recent update date - algorithms detect this.
- **Conversational sub-headers.** Frame H2s and H3s as questions where natural. Aligns with how users phrase queries to AI assistants.
- **Semantic clarity over keyword density.** Write like an expert explaining to a smart non-expert. Avoid stuffing. Avoid synonyms-for-the-sake-of-synonyms.
- **Brand naming consistency.** Always "Doubly" in copy. Never alternate to "Doubly app," "Use Doubly," "doubly.com" in body text. Consistency builds entity recognition in LLM training data.

### 6.1 `llms.txt` and `robots.txt`

- Maintain a `/llms.txt` at root: a curated index of the highest-value pages with one-line descriptions. Do **not** mirror every page as `.md` - that dilutes signal and wastes crawl budget.
- In `robots.txt`, explicitly allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot. Block only if there's a specific reason. Audit boilerplate `robots.txt` files before deploying.

---

## 7. How to apply schema markup

Every page ships JSON-LD schema. Cross-link entities by `@id` so the graph is connected, not a pile of unrelated blocks.

### 7.1 Site-level entities (declared once in root layout)

- `Organization` - name, logo, `sameAs` array linking to every verifiable brand profile (Twitter/X, LinkedIn, App Store, GitHub, Crunchbase, Product Hunt). The `sameAs` array is the single biggest entity-recognition lever for LLMs and Knowledge Graph.
- `WebSite` - with `potentialAction` for site search if implemented.
- `MobileApplication` (subtype of `SoftwareApplication`) - for the iOS app, with `applicationCategory`, `operatingSystem`, `offers`, real `aggregateRating` pulled from App Store, `screenshot` URLs, `downloadUrl` to App Store.

### 7.2 Per-page schema

- Tool pages: `SoftwareApplication` for the widget itself + `HowTo` for the use steps + `FAQPage` for the FAQ.
- Article pages: `Article` or `TechArticle` + `FAQPage` if applicable + `Person` for author + `Person` for medical reviewer if applicable.
- Comparison pages: `Article` + multiple `SoftwareApplication` entities.
- All pages: `BreadcrumbList`.

### 7.3 Multi-modal schema

- `ImageObject` on every meaningful diagram, chart, or screenshot - with `caption`, `contentUrl`, and license info where applicable.
- `VideoObject` on every embedded video - with `name`, `description`, `uploadDate`, `thumbnailUrl`, `contentUrl`. Video also ranks independently in Google Video and gets pulled by Gemini/ChatGPT vision.
- `Quotation` schema on every expert quote, with `creator` referencing a `Person` entity.
- `AudioObject` if podcast clips are embedded.

### 7.4 Schema rules

- Use `@id` URIs for every entity. Reference other entities via `@id`, never inline duplication.
- Validate every new page in Google's Rich Results Test before publishing.
- Apply `Speakable` schema to answer capsules where the content suits voice readout.
- **Never invent `aggregateRating` or `reviewCount`.** Manual penalty risk. Pull real data from App Store or omit.

---

## 8. How to handle internal linking

- Every tool links to three to five other tools in its "Related tools" section.
- Every article links to at least two tools in body content (contextual, not just at the end) and at least two sibling articles.
- The `/tools` hub links to every tool. The `/learn` hub links to every article.
- The homepage features the top tools in a dedicated section.
- Anchor text is descriptive and matches the target page's primary keyword. Never "click here," "read more," "this article."
- Breadcrumbs on every tool and article page, with `BreadcrumbList` schema.
- New pages are linked from at least two existing pages before publishing - orphan pages waste authority.

---

## 9. How to write meta data

For every page:

- **Title tag:** 50–60 characters. Primary keyword early. Ends with `| Doubly`.
- **Meta description:** 140–160 characters. Contains keyword and a benefit. Reads naturally, not stuffed.
- **Canonical URL:** absolute, HTTPS, no query parameters.
- **Open Graph:** `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`. OG title and description distinct from `<title>` and meta description - written for social sharing context.
- **Twitter Card:** `summary_large_image` with title, description, image.
- **Per-article:** `article:author`, `article:published_time`, `article:modified_time`, `article:section`.

Custom OG image per article. Use a template so every share looks branded.

---

## 10. How to optimize performance (Core Web Vitals)

Tool pages are JavaScript-heavy by definition, which makes Interaction to Next Paint (INP) the biggest technical risk for Doubly. Budget aggressively.

### 10.1 Per-page budgets

- LCP: under two seconds on mobile.
- INP: under two hundred milliseconds.
- CLS: under 0.05.
- JavaScript bundle: under 150KB minified per page, under 300KB total including dependencies.
- Lighthouse Performance audit: 90 or above on mobile.

### 10.2 How to hit them

- Server-render or static-generate all content. Tool interactivity is client-side. Surrounding content is not.
- Code-split by route. Do not ship one tool's code on another tool's page.
- Lazy-hydrate widgets via `IntersectionObserver` - initialize on visibility.
- Break long tasks into chunks under fifty milliseconds. Use `scheduler.yield()` or `setTimeout(0)` to yield to the main thread.
- Run AI calls and heavy parsing in a Web Worker. Main thread stays responsive.
- Event handlers under fifty milliseconds. If logic exceeds that, off-load.
- Defer non-critical scripts (analytics, A/B testing) with `async`/`defer` and `requestIdleCallback`.
- Passive event listeners: `{passive: true}` for touch, scroll, wheel.
- Images: AVIF first, WebP fallback. Explicit `width` and `height`. `loading="lazy"` below the fold. `fetchpriority="high"` on the hero LCP image.
- Image filenames are descriptive and keyword-aligned (`brain-dump-tool-adhd.avif`, not `IMG_2734.avif`). Alt text is a descriptive sentence including the primary keyword once, never stuffed.
- Self-host fonts via `next/font` or equivalent. No render-blocking external font requests.
- No marketing scripts above the fold render.

### 10.3 Measurement

- Lighthouse audit on every new page before publishing.
- Field data via `web-vitals.js` piped to analytics. Lab numbers lie, field numbers don't.
- Microsoft Clarity for INP field data and session replay of slow interactions.

---

## 11. How to handle E-E-A-T for an ADHD-adjacent product

ADHD productivity content is YMYL-adjacent. The trust bar is higher than for general productivity content. Algorithms expect to see signals that a real, accountable, knowledgeable human stands behind every claim.

### 11.1 Experience

- First-person founder framing where authentic. Phrases like "in my testing," "after six months of using," "I built this because" are scored positively.
- Original screenshots and visual evidence. Stock photos signal generic AI-spam.
- Lived-experience case studies, anonymized, with consent.

### 11.2 Expertise (without clinical credentials)

- Frame the founder as builder plus ADHD-haver, not as clinician. Never claim diagnostic or treatment authority.
- Cite peer-reviewed studies with DOI or PubMed links.
- Engage a clinical advisor (ADHD-specialist therapist or psychiatrist) to medically review pieces that discuss mechanisms or symptoms. Display reviewer credentials and link to a bio. This is the single biggest YMYL trust unlock for a non-clinician founder.
- Maintain a Scientific Advisory page listing named advisors with credentials and `Person` schema.

### 11.3 Authoritativeness

- Built primarily off-page through backlinks from recognized authorities in ADHD and mental health. On-page, ensure author bios link to verifiable third-party profiles.

### 11.4 Trustworthiness

- HTTPS everywhere.
- Visible Privacy, Terms, Support, Contact links in the footer.
- Real contact information.
- Honest publish and update dates.
- No popups, no clickbait, no dark patterns, no fake urgency.

### 11.5 Writing for ADHD readers

This is the audience. Copy that ignores how they process text fails them and tanks engagement metrics that the helpful-content system reads.

- **Reading level: Grade 6–8.** Run drafts through a readability check. Short sentences. Cut every "in order to," "due to the fact that," "it is important to note."
- **Paragraphs: one to three sentences each.** Walls of text trigger bounce.
- **Strong visual hierarchy.** H2 every 200–300 words. H3 inside long H2 sections. Generous whitespace between sections.
- **Front-load every section.** The first sentence of every paragraph carries the point. Skim-readability is non-negotiable.
- **Bullets and numbered lists** where the content is a list. Prose for everything else. Do not bullet-spam.
- **Active voice. Concrete verbs. No corporate hedging.**
- **No shame language.** Never "stop being lazy," "fix your brain," "discipline yourself." Always supportive, never patronizing.
- **Respect `prefers-reduced-motion`.** Disable animations for users who request it.
- **Offer dark mode** site-wide. Many ADHD users explicitly prefer it.
- **No autoplay video or audio. No motion that loops indefinitely above the fold.**
- **Color contrast: WCAG AA minimum, AAA preferred.** Text must remain readable for users with co-occurring visual processing differences.

---

## 12. How to integrate with the iOS app

Every page on usedoubly.com is part of the install funnel. Treat the app and the web as one product.

### 12.1 Smart App Banner

Site-wide meta tag:
```html
<meta name="apple-itunes-app" content="app-id=APP_ID, app-argument=https://usedoubly.com/[current-path]">
```
On iOS Safari this renders Apple's native banner, which converts far better than any HTML CTA. Keep `app-argument` pointed at the current path so deep links work.

### 12.2 Universal Links

- Maintain `apple-app-site-association` at `/.well-known/`. Configure path patterns the app should intercept.
- Every tool page deep-links into the corresponding in-app feature with a clear source parameter for attribution.

### 12.3 App Store badge

- Use Apple's official SVG badge. Correct size (typically 160×54). Present at the bottom of every tool page and on dedicated app pages.
- Soft CTA copy first, badge second. Never lead with the badge.

### 12.4 ASO ↔ web SEO crossover

- Branded search defense: a minimal paid budget on the brand keyword in Google Ads is justified.
- Custom Product Pages (CPPs) on App Store Connect, one per major traffic source, mirroring the angle the source visitor saw on the web.

---

## 13. How to handle analytics and tracking

### 13.1 Required from day one

- Google Search Console verified for the domain. Submit sitemaps. Inspect new URLs.
- Bing Webmaster Tools verified. Submit sitemap. (Powers Bing, DuckDuckGo, ChatGPT Search.)
- Microsoft Clarity for session replay, heatmaps, INP field data. Free, no limits.
- Privacy-friendly analytics (Plausible, Fathom, Umami, or equivalent). Track page views, scroll depth, App Store CTA clicks as conversion events.
- `web-vitals.js` RUM piped to analytics for real-user performance.

### 13.2 AI-referral tracking

Treat traffic from `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `copilot.microsoft.com`, `you.com`, `phind.com` as a distinct channel. Configure a custom segment or channel grouping. Watch growth over time.

### 13.3 New page ritual

After publishing, within 24 hours:
1. Submit the URL to Google Search Console (URL Inspection → Request Indexing).
2. Submit to Bing via IndexNow.
3. Verify the page appears in the sitemap.
4. Verify Rich Results Test passes for all schema.
5. Verify Lighthouse mobile Performance score is at or above 90.

### 13.4 Iteration ritual

Thirty days after publish, review:
- Impressions vs clicks in Search Console.
- Top queries the page is ranking for.
- Average position.
- Session replay sample for confused-click points.
- AI-referral traffic to the page.

Decision tree: impressions but no clicks → rewrite title and meta. Clicks but high bounce → improve the tool or intro. Zero impressions after 60 days → check indexing and re-evaluate the keyword target.

---

## 14. How to maintain content quality and avoid penalties

Algorithm updates increasingly target scaled-thin content, fake authority, and AI-spam. Defensive practices:

- Ship few, ship great. Cap publishing velocity to two to four substantive pages per week on a new domain. More than that triggers spam-pattern detection.
- Every page must give standalone value. If a visitor arriving from a search engine with no context wouldn't find the page useful, do not publish.
- Minimum unique surrounding copy: a few hundred words on tool pages, substantially more on articles. No thin templates with one swapped keyword.
- AI-assisted drafting is permitted. AI-spam is not. Human review and rewrite every page before publish. No exceptions.
- Avoid every form of cloaking, doorway pages, link buying, hidden text, parasite SEO, and scaled machine translation.
- Never invent ratings, review counts, user counts, or testimonials.
- Never claim to diagnose, treat, or cure ADHD or any condition. Phrases like "may help with," "designed for ADHD brains," "supports executive function" are acceptable. "Treats ADHD" is not.
- Update existing pages periodically (a portion each quarter) rather than letting them go stale. Honest update dates only.

### 14.1 Stigma and language rules

- "Person with ADHD" or "ADHD brain" or "ADHD adult," never "sufferer," "afflicted," "victim."
- No stigmatizing imagery (head-in-hands, "sad-looking person").
- No shame-based copy. No "stop being lazy." No "fix your brain."

### 14.2 Social proof rules

Real social proof helps both UX and trust signals. Fake-looking social proof now actively hurts ranking.

- Live "X people used this today" counters must reflect real backend events. If real numbers are too small to display, omit the counter.
- Testimonials use real names with documented consent and apply `Review` schema with `author.@type: Person`.
- App Store rating widget pulls live from Apple's RSS feed, not hardcoded.
- "Featured in" press logos only after real press coverage exists.
- Never round up, never invent counts, never display rating data that doesn't validate against the App Store source.

### 14.3 Responding to algorithm updates

- Do not react inside the first fourteen days of a confirmed Google core update. Rollouts take two weeks, and many initial drops recover.
- Use third-party rank trackers for real-time signal. Search Console lags by days.
- If a drop persists after rollout completes, the recovery playbook is the same as the quality playbook: more first-person experience signals, more original data, more visible authorship, real expert review, fewer thin pages. Mental-health-adjacent recovery typically takes six to twelve months. Do not panic-edit dozens of pages in one week.

---

## 15. How to handle distribution (the off-site half of SEO)

On-page work alone will not rank a new domain in a competitive niche. Distribution work is a permanent part of the job, not a one-time push.

### 15.1 Reactive PR

Maintain a daily ritual of monitoring reactive-PR platforms (HARO/Featured, Qwoted, Source of Sources, journalist request hashtags on X). Respond within hours, not days. Pitch concise expert insight plus a short bio. One follow-up only.

### 15.2 Niche outreach

When a piece is publish-ready, identify pages on authority sites in the ADHD and mental-health niche that would benefit from linking to it. Email the author with specifics: what their article covers, what value the Doubly page adds, why their readers benefit. Never paid placement.

### 15.3 Unlinked-mention reclamation

Weekly: search for brand mentions of "Doubly" or "usedoubly" without backlinks. Email a thank-you plus link request.

### 15.4 Community presence

- Founder-led, not brand-led. Personal accounts, real face, real name. Brand accounts get filtered as promotional.
- Nine-to-one ratio: nine genuinely useful contributions for every one promotional mention. Never reverse this.
- Reddit, TikTok, podcast guesting, Twitter/X, Indie Hackers - every appearance is a brand-mention in indexable text and audio that LLMs eventually train on.

### 15.5 First-party data studies

Periodically publish analyses of anonymized aggregate user behavior. These earn editorial backlinks no other tactic can match and become the foundation of "10x content" pieces.

---

## 16. Definition of "done" for any new page

A page ships when every box is checked:

- [ ] URL follows conventions in §3.
- [ ] Template structure from §4 (tool) or §5 (article) is followed.
- [ ] Answer capsule is present, 50–60 words, immediately after H1.
- [ ] At least one citation to an authoritative source is present.
- [ ] Meta title, meta description, canonical, Open Graph, and Twitter Card tags are all present (§9).
- [ ] JSON-LD schema validates in Google Rich Results Test (§7).
- [ ] At least three internal links out, at least two internal links in from existing pages (§8).
- [ ] App Store CTA present at the bottom (§4.9).
- [ ] Lighthouse mobile Performance score is 90 or above (§10).
- [ ] No popups, no email gates, no autoplay, no clickbait (§2, §14).
- [ ] Human-reviewed end-to-end before publish (§14).
- [ ] Smart App Banner meta tag present (§12.1).
- [ ] Added to sitemap and submitted to Search Console (§13.3).
- [ ] Analytics events fire correctly on App Store CTA click (§13.1).

If any box is unchecked, the page is not ready.

---

## 17. When in doubt

Re-read §2. The philosophy beats every individual rule.

Ask Amit before deviating from any rule. Ask before introducing a new pattern, framework, or third-party dependency. Ask before scaling content velocity above two to four pages per week. Ask before publishing anything that makes a clinical claim. Ask if a page might not pass the §2 closing test.
