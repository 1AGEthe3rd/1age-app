# 1AGE App — Distribution Build 012
Founder direction: the original 1age.com entrance is the app interface. Preserve the existing dial, Earth, search, Enter and controls. 1age.app is the official distribution/version/support destination, not another walkable platform. This isolated preview links to the original website, reports platforms as not released, and never advertises nonexistent binaries. No native package is included.

## Proposed native architecture
Reuse the approved entrance and navigation behavior as the canonical UI. Evaluate Godot native scene integration versus a hybrid native shell with packaged web assets and native 3D rendering, based on actual iPhone performance, renderer compatibility and navigation parity. Do not ship a remote-only website wrapper. Pin reviewed source versions; maintain one Page identity and server-side authorizations; add native lifecycle, safe areas, controller/touch, secure credential storage, offline/error handling and accessible controls. No platform implementation or package identifier is selected yet.

## Release gate (not passed)
- Establish verified publisher identity, developer accounts, signing certificates/keys and unique bundle/package IDs. Never commit signing secrets.
- Produce reproducible iOS and Android native builds; verify current store SDK/target API requirements at release. Apple currently requires Xcode 26 or later with iOS 26 SDK or later; minimum deployment target iOS 13 or later as of September 9, 2026. Android target API must follow Play's current deadline.
- Verify guest exploration, core working features, navigation, controller/touch, cold start, low memory, network loss and performance on physical devices. No placeholder features in submission. Provide real screenshots and reviewer demo access.
- Audit data collection, third-party SDKs, privacy policy, Apple privacy disclosures and Google Data safety; provide actual account deletion and support flows. Request only necessary permissions.
- Digital subscriptions, credits and virtual goods must use permitted store billing or applicable regional exceptions; physical goods follow separate rules. Do not enable external web checkout, crypto transactions, regulated financial features or paid member access in native release until policy/legal review and server-side integration. Enforce at backend as well as UI, including linked embedded experiences. Preserve browser services independently.
- Social/UGC features require operational moderation, report/block controls, age ratings and appropriate age gating. Restrict noncompliant content and experiences; no unrestricted browser escape to bypass store review.
- TestFlight and Google Play internal/closed testing, including account-specific prerequisites; only publish approved listings and signed releases. Desktop downloads need signed release verification and a separate approved delivery design.
- Store listing copy, age ratings, rights, regional availability, privacy/support URLs, review notes and real functionality must be verified. Approval is not guaranteed.
Sources reviewed 2026-11-26:
https://developer.apple.com/app-store/review/guidelines/
https://developer.apple.com/news/upcoming-requirements/
https://developer.apple.com/app-store/submitting/
https://developer.apple.com/help/app-review/before-submitting-for-review/complete-review/
https://support.google.com/googleplay/android-developer/answer/11926878
https://support.google.com/googleplay/android-developer/answer/14151465
https://support.google.com/googleplay/android-developer/answer/10144311
https://support.google.com/googleplay/android-developer/answer/18265346

## Preview validation
Run node --test distribution/releases.test.mjs in a checked-out branch. Tests cover disabled planned downloads and restricted listing destinations. Browser, device and actual native compilation remain pending. Do not merge or publish without approval. Production index, 1age.com, DNS and all other applications are untouched.
