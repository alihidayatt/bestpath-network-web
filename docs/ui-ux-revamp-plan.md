Kind: service — a network infrastructure, security, consulting, and technical training business; proposed Taste page type: service, site kind: other.
Design deal: deferred to the design prototype phase, after asset review; retain the existing brand identity as the starting constraint, then record the skill-generated typography, hero, composition, and moment selections before implementation. No palette or deal has been approved yet.

# Bestpath Network — UI/UX revamp rundown

Date: 18 November 2026  
Status: proposal for review; documentation only. No application changes are included in this planning pass.

## 1. Goal and scope

Rebuild the experience around two clear needs: choosing technical training and commissioning infrastructure work. Give Bestpath a coherent, credible visual identity across the whole public website, not just a refreshed homepage.

The codebase should improve where the redesign exposes real duplication, accessibility defects, unnecessary browser work, or maintenance friction. Keep working infrastructure and business data. This is not a framework rewrite or an unrestricted cleanup project.

**Proposed main action:** “Discuss your requirements.” Training details use the more specific “Request this training.” These are proposed labels, not final approved copy; destinations must be verified before launch.

**Success means:** visitors can understand the offer, find a relevant course or capability, evaluate credible evidence, and reach the correct inquiry or resource action without searching the footer.

## 2. What the source review establishes

This is a source-based review, not a completed visual/browser audit. No build, dependency audit, interaction test, accessibility scan, or performance measurement was run in this pass.

| Finding | Evidence | Planning consequence |
| --- | --- | --- |
| The technical baseline is already modernized. | Current [dependency manifest](../package.json:5) and [implemented baseline notes](../README.md:33). | Preserve the current Next.js, React, TypeScript, and Tailwind stack; do not repeat historical migration work. |
| The older audit describes a pre-change state. | [Historical audit clarification](../README.md:43). | Keep the [original audit](revitalization-audit.md) as history, not as the current redesign backlog. Revalidate security independently before release. |
| A shared banner precedes every route's content. The component named carousel currently renders a static image, not an auto-playing carousel. | [Global layout](../app/layout.tsx:29), [banner implementation](../app/components/carousel/component.tsx:4). | Replace the global banner with page-specific introductions; do not characterize the current banner as animated. |
| The homepage is organized as repeated grey containers and nested white panels. | [Homepage composition](../app/page.tsx:11). | Replace the container stack with a deliberate narrative, consistent edges, fewer borders and shadows, and varied compositions. |
| Navigation labels follow internal categories more than visitor tasks. | [Current navigation data](../app/components/navigation/navbar/component.tsx:14). | Make training, services, work, resources, and company information easier to distinguish. |
| The mobile menu toggle is a clickable non-button element. | [Mobile menu control](../app/components/navigation/navbar/component.tsx:127). | Use a named native button and accessible menu/dialog behavior, including focus, Escape, and scroll management. |
| Multiple homepage headings and nested interactive controls need correction. | [Product sections](../app/components/contents/Our_product.tsx:25). | Establish one page heading, semantic section headings, and a single interactive element per action. |
| Vendor course listings repeat almost identical presentation. | [Cisco listing](../app/training-class/cisco-class/page.tsx:8) and corresponding vendor listings. | Introduce the smallest shared catalog/list/detail presentation that fits the existing data; preserve vendor-specific content. |
| Course details bury the inquiry instruction at the end. | [Course detail structure](../app/training-class/cisco-class/[kelas_cisco_Id]/page.tsx:40). | Surface audience, prerequisites, duration, price terms, and the inquiry action near the beginning. |
| Ebook details force a scroll on load. Server-side ID validation already exists. | [Ebook client behavior](../app/ebook/[ebookId]/EbookPageClient.tsx:12), [server validation](../app/ebook/[ebookId]/page.tsx:5). | Remove forced scrolling while retaining validation and legitimate resource destinations. |
| Real project/training images and vendor marks already exist outside the public asset folder. | [Existing image imports](../app/components/Bpn_imgs.tsx:59), [project/training composition](../app/components/contents/Our_services.tsx:19). | Audit and reuse these before acquiring new assets. Do not mistake the small public folder for a lack of photography. |
| Member detail pages include placeholders. | [Member detail placeholder](../app/teams/[memberId]/page.tsx:3). | Decide whether real profile pages are justified before expanding or linking to them. |
| Contact details are largely display text, with a full map in the shared footer. | [Footer](../app/components/footer/component.tsx:9). | Design purposeful inquiry access and assess whether every page needs an embedded map. |
| Production smoke coverage and Windows CI already exist. | [Smoke tests](../tests/smoke.test.mjs:8), [validation workflow](../.github/workflows/ci.yml:10). | Extend these instead of replacing them or claiming there are no tests. |

## 3. Audience and user journeys

These are working audience hypotheses inferred from the current offers, not validated customer research.

| Audience | Main questions | Proposed journey |
| --- | --- | --- |
| Engineer or certification learner | Is this the right vendor, level, syllabus, format, and price? | Training catalog → vendor/topic → course detail → training inquiry. |
| Corporate training organizer | Can you teach our team, and what scope fits our requirements? | Training → relevant course or corporate option → requirements inquiry. |
| Infrastructure buyer / IT decision-maker | What can you deliver, what evidence exists, and how do we start? | Home → service overview → relevant work evidence → project inquiry. |
| Resource reader | Is this book relevant, free or paid, and where do I access it? | Resources → ebook detail → preview, download, or verified purchase destination. |

Do not add accounts, a learning management system, an ecommerce checkout, or a scheduling backend merely to make these journeys look complete.

## 4. Proposed information architecture

Use visitor-facing labels while initially preserving current public URLs.

- **Home:** the offer, training and services entry points, selected work, people, and inquiry access.
- **Training:** all vendors, course discovery, vendor listings, and course details. Distinguish available offers from past training events.
- **Services:** explain the verified infrastructure, security, consulting, implementation, and maintenance scope. Start with a homepage section; a dedicated page is optional and requires sufficient approved content.
- **Work:** existing training events and implementation evidence. A consolidated work index or case-study pages are optional additions, not assumed routes.
- **Resources:** ebooks, with existing free/paid distinctions and destinations intact.
- **Company:** team, business partners, cooperating vendors, and clients, with clear relationship labels.
- **Inquiry:** a consistent primary action with a verified destination, not a vague instruction to find contact details elsewhere.

**Routing safeguards:** inventory all current business URLs and homepage anchors, preserve them where possible, and document redirects before changing any URL. Do not merge dynamic vendor routes just to make the folder structure look cleaner. Existing internal component routes must remain unavailable.

## 5. Visual direction and Taste Skill use

### Proposed direction: an engineering service company with visible work

- Start from the existing logo and teal identity; verify the actual brand colors and contrast before creating tokens.
- Favor light flat backgrounds, strong readable typography, generous but purposeful space, aligned edges, and restrained surface changes.
- Lead with real training, implementation, equipment, and team photography. Review resolution, crop, privacy, usage rights, and relevance before selection.
- Use authentic vendor marks in their own colors. Distinguish a technology taught from a verified partnership or accreditation.
- Avoid generic SaaS dashboards, invented customer results, decorative network globes, excessive card nesting, gradients, glass effects, and repeated logo walls.
- Treat the business as a service site under Taste, despite its technical subject. No shader effects or WebGL are proposed.

### Motion and responsive behavior

- One hero entrance on load and one skill-dealt photo/type moment per page, two only for a long page with enough material.
- Restrained button press, link underline, linked-card lift, and image zoom feedback.
- No auto-rotating content, forced navigation scrolling, scroll-jacking, or section-by-section reveal effects.
- Reduced-motion users receive the complete resting experience, never hidden content.
- Plan marketing sections as one or two screens at 1440 × 900; tablet and phone content must grow without clipping. Do not pad a sparse course catalog or syllabus into empty screens merely to match a marketing composition; document any checker waiver with its reason.
- Keep left and right content edges equal; verify at 1440, 1024, 820, 768, 390, and 320 widths.
- No image captions in the proposed Taste composition. Essential course names, project facts, and people information remain semantic content rather than being embedded in or dependent on images. Photography credits belong in one footer line.

### Design decisions deliberately not finalized yet

Before building the prototype, use Taste's deal tools and record the actual hero, type pairing, palette/brand token output, navigation, footer, closing composition, and moments. Read the required copy, system, layout, motion, and selected asset references before their implementation. Do not run the finish gate for this documentation-only pass; arm it against a browser-accessible page when implementation begins.

The installed skill's demo-contact rules conflict with this existing business site's real contacts. Preserve the current source data. Before public release, explicitly resolve this mismatch with the owner: use non-production demonstration destinations only in a clearly scoped prototype, or approve and document narrowly justified checker waivers for verified production contacts. Never silently replace working business contact channels with dummy addresses.

## 6. Content direction

**Voice card:** technical and direct; exact without being cold; confident without unsupported claims; use existing domain terms consistently; explain the work and the next step; no forced jokes, superlatives, or invented statistics.

Before final copy, create a fact sheet covering the offers, intended buyers, approved differentiators, people/credentials, project scope, course terms, pricing, and inquiry channels. Source code is evidence of what the site currently says, not proof that a commercial claim is current.

- Confirm the preferred public brand spelling; the current site varies it.
- Decide English-first versus Indonesian-first. Current material mixes the two; do not add a multilingual system unless the business needs one.
- Review course titles, prerequisites, duration, minimum attendance, tax treatment, and pricing for accuracy. Preserve values until a business owner approves changes.
- Verify client-logo permissions, certifications, customer relationships, and project publication approval.
- Never infer delivery guarantees, pass rates, customer counts, availability, or response-time promises from photographs.
- List missing facts as editorial tasks in planning notes, not as fabricated public copy.

## 7. Page-by-page rundown

| Page family | Planned experience | Important constraint |
| --- | --- | --- |
| Home | Clear category and buyer; training/services entry points; selected work; process; people; inquiry close. | First screen explains the offer and exposes an action; no large generic banner before the actual introduction. |
| Training catalog | Browse vendors and courses; useful title/topic search and vendor/level filters if data quality supports them; result count, reset, and empty state. | Reuse current data; URL-backed filter state is preferred so back navigation and sharing work. No external search service. |
| Vendor listing | Consistent course cards/rows exposing the facts needed to choose, not only a badge and “Detail.” | Unavailable state must be visible without hover and must not imply an unverified schedule. |
| Course detail | Title, audience, level, duration, verified pricing/terms, direct inquiry; overview, prerequisites, goals, and readable syllabus below. | Mobile action placement must not obscure content; never invent dates or enrollment functionality. |
| Training events / work | Selected authentic photographs and approved project context; clear distinction between completed work and purchasable training. | Dedicated case studies only when real scope and publishable facts exist. |
| Ebook catalog/detail | Discoverable titles, authors, covers, free/paid labels, summaries, and precise preview/download/purchase actions. | Preserve external destinations after checking them; do not imply an on-site transaction. No forced scroll on arrival. |
| Team | Genuine portraits, names, roles, and approved credentials in a coherent layout. | Keep profile links only when substantive profile content exists; decide legacy placeholder handling before removal. |
| Partners/vendors/clients | Clear relationship explanations and properly proportioned authentic marks. | Do not imply endorsement, current partnership, or certification from an asset filename. |
| Inquiry/footer | Consistent inquiry action, useful navigation, verified contact links, and a map only where helpful. | A new form requires an approved delivery path, privacy handling, validation, abuse protection, and genuine success/error behavior. Otherwise use verified existing channels. |
| Loading/error/not-found | Shared visual language, accessible progress/status where needed, helpful recovery links. | Preserve framework missing-ID handling and existing test expectations. |

### Homepage screen outline — provisional content sequence

Final section identifiers and dealt recipes are selected during prototype design.

| Screen | One idea | Real visual / kind | Desktop budget |
| --- | --- | --- | --- |
| Hero | Network services and training, with an understandable next step. | Strong existing implementation or training photograph / use. | 1 screen; hero alone. |
| Offers | Help visitors choose training or infrastructure work. | Relevant distinct photographs / use. | 1 screen; 2 only if approved copy requires it. |
| Selected work | Show what Bestpath has actually done. | Approved project photographs / work. | 1–2 screens; suitable photo moment location. |
| Delivery process | Explain the verified planning, implementation, and maintenance process. | Distinct work-in-progress photograph / use; at most one still diagram if it genuinely helps. | 1 screen. |
| People and credibility | Show the practitioners behind the work. | Authentic team photography / people. | 1 screen; merge short proof into this section. |
| Inquiry close | Give visitors a specific next action. | Skill-dealt type closing composition / type. | 1 screen including the planned close/footer rhythm. |

If the approved facts do not support a section, merge or remove it instead of adding filler. Keep ebooks discoverable in navigation and resources rather than forcing every offer into a full homepage section.

## 8. Codebase work — improve only what supports the revamp

### Keep and reuse

- The current framework, typed route handling, server-side missing-ID checks, image optimization, existing course/ebook content, and asset imports.
- Existing Headless UI for interactions where it fits, and current icon packages for interface symbols; no additional UI framework by default.
- Existing production smoke tests and Windows validation workflow.
- The current stylesheet/Tailwind setup until there is a concrete compatibility or maintenance reason to change it.

### Targeted changes

1. **Shared site shell:** retain a small global shell for navigation, main content, and footer. Place hero and breadcrumbs according to page needs, not above every route by default. Add skip navigation and proper landmarks.
2. **Design tokens:** centralize approved colors, spacing, typography, content width, radii, focus, and motion settings in the [global stylesheet](../app/globals.css:1) and existing styling configuration. Avoid a parallel bespoke design-system package.
3. **Small shared components:** extract repeated page introductions, action styles, course listing/detail presentation, and resource cards only where real repeated usage justifies them. Preserve separate components where content or behavior differs.
4. **Course content:** compare vendor data shapes before proposing a common type. Keep stable IDs, vendor-specific fields, syllabus content, and pricing intact. Avoid a generic schema engine or mandatory CMS migration.
5. **Server/browser boundaries:** render static content on the server; keep browser interactivity local to menus and discovery controls. Rework the existing [ebook client component](../app/ebook/[ebookId]/EbookPageClient.tsx:12) rather than adding a competing implementation.
6. **Asset handling:** audit the large [image collection](../app/components/Bpn_imgs.tsx:1) and individual wrappers for genuine duplication. Consolidate touched usage incrementally only where it reduces complexity; do not relocate every asset in one sweep.
7. **Semantics and accessibility:** correct nested actions, heading hierarchy, input labels, menu state, focus behavior, unavailable states, touch targets, and contrast.
8. **Metadata and routing:** add meaningful page-specific metadata, canonical URLs, sitemap/robots as needed, breadcrumb labels, and approved social previews. Confirm the real canonical domain; preserve dynamic not-found behavior and account for streaming response semantics.
9. **States and resilience:** remove forced scrolling, standardize necessary loading/recovery views, and make external-link behavior clear. Do not add artificial loading delays or fake confirmations.
10. **Repository hygiene:** consider unused backup components and source archives only after checking references and intent. Keep this a separate bounded cleanup, not a prerequisite for every visual change.

**Out of scope by default:** framework or Tailwind major migration, state-management library, database, CMS, user accounts, LMS, payments, custom backend, broad renaming, and speculative service abstractions.

## 9. Phased delivery and review gates

| Phase | Work | Exit condition |
| --- | --- | --- |
| 0 — Baseline and inventory | Capture route/anchor/action inventory; run existing checks; inspect current pages in browser; record screenshots; audit content and asset rights; reconfirm dependency findings. | Known baseline, regression checklist, and prioritized verified findings. |
| 1 — UX and content decisions | Confirm audience priority, language, primary inquiry destination, navigation labels, URL preservation, page inventory, and fact sheet. | Approved sitemap, journeys, content responsibilities, and prototype scope. |
| 2 — Design system and vertical slice | Record Taste deals; build responsive shell, homepage, one vendor listing, and one course detail. Include focus, motion reduction, loading, and empty-state behavior. | Desktop/tablet/mobile prototype demonstrates both marketing and practical course discovery; visual direction approved before rolling out all pages. |
| 3 — Core conversion rollout | Complete training catalog, all vendor listings/details, inquiry access, and shared components justified by the vertical slice. | Existing course content preserved; discovery and inquiry journeys work across vendors. |
| 4 — Remaining public pages | Redesign ebooks, events/work, team, relationship pages, footer/map, and recovery states. Resolve team placeholders and optional new pages through explicit decisions. | Every agreed public route receives the same system; external resources and contacts verified. |
| 5 — Validation and release | Run technical checks, sequential Taste browser checks, screenshots, accessibility/interaction review, performance review, metadata/link checks, and staging acceptance. | Release criteria below met, waivers documented, known-good artifact and rollback prepared. |

Use small reviewable changes per page family. Do not combine broad data normalization, route changes, dependency migrations, and all visual work into one unreviewable change.

## 10. Acceptance criteria

### Functional and data integrity

- Every inventoried public route and important existing anchor still works, or has an explicitly approved redirect/replacement.
- All nine vendor families, valid detail IDs, invalid IDs, ebooks, relationships, and approved team journeys are covered.
- Course prices, durations, minimum attendance, tax notes, vendor identities, and ebook free/paid status match owner-approved records.
- Inquiry, preview, purchase, and download actions reach verified destinations. No fabricated submission or enrollment success.
- Production smoke coverage is retained and updated when a deliberate asset or route change invalidates an old assertion.

### Accessibility and interaction

- Target WCAG 2.2 AA; automated checks support, but do not replace, keyboard and assistive-technology review.
- One meaningful page heading; coherent sections and landmarks; named controls, useful alt text, visible focus, and a working skip link.
- Mobile menu is keyboard accessible, handles Escape and focus return, and does not leak background interaction when modal.
- Controls target 44-pixel touch areas; no hover-only essential information or nested interactive elements.
- Reduced motion leaves all content readable. No action bar hides focused controls or page content.

### Responsive and visual quality

- Inspect rendered pages at widths 1440, 1024, 820, 768, 390, and 320; check landscape and zoom where relevant.
- No broken visuals, horizontal overflow, clipped text, overlaps, or inconsistent content edges.
- Marketing section rhythm follows Taste's one/two-screen plan; content-heavy exceptions have documented reasons, not concealed failures.
- Use actual selected imagery, not empty frames, and report every licensed stand-in plus the intended client replacement.

### Technical and release quality

- Existing lint, type checking, production build, and smoke suite pass; no new unresolved hydration/runtime errors.
- Re-run production and full dependency audits; do not present historical audit results as current verification. Preserve documented tooling-risk follow-up until resolved.
- Measure Core Web Vitals where data exists: aim for LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds, and CLS ≤ 0.1 at the 75th percentile. Lab tests are diagnostics, not a claim of field compliance.
- Appropriately size images, prioritize only the true hero asset, lazy-load below-fold media, and avoid expanding browser bundles for static content.
- Run Taste copy, consistency, layout, screenshot, performance, and finish-gate scripts against representative built pages and then all applicable redesigned routes, one browser process at a time. Record the actual gate result, warnings, waivers, and open failures; no pass is claimed now.
- Verify canonical URLs and metadata, production contact configuration, staging acceptance, and rollback before deployment.

## 11. Decisions needed before implementation

These do not block the planning notes; they are decisions for Phase 1.

1. Is the first business priority training inquiries, infrastructure projects, or a deliberately balanced homepage?
2. Should the public experience be English-first or Indonesian-first? Is bilingual support a real requirement?
3. Which inquiry channel is authoritative, and is a new form actually required?
4. Which existing logo variant, brand spelling, photographs, credentials, and client relationships are approved for publication?
5. Are course pricing and terms current, and who owns ongoing updates?
6. Should individual team profiles and dedicated service/case-study pages exist, given the content currently available?
7. What production hosting/domain constraints must remain unchanged, and how should the Taste demo-contact restrictions be resolved for a real business release?

## 12. Recommended starting point

Approve the goals and route coverage first. Then complete the baseline and content inventory, followed by one responsive vertical slice: shared shell, homepage, vendor listing, and course detail. That validates the visual identity and a real inquiry journey before the rest of the website is rebuilt.

**Planning outcome:** a full-site redesign with focused maintainability improvements, preserving the modernized technical foundation and existing business content. Application implementation and browser validation remain future phases.
