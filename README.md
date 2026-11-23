# Battlemon static showcase

Static HTML/CSS/JavaScript, local artwork, real A22 Android captures, a standalone privacy page, and an HTML5 LAN demonstration video. No backend, analytics, external fonts, cookie banner, or third-party video embed is used.

Preview with XAMPP at `http://localhost/battlesite/`.

Intended public URLs:

- Home: https://markusoft.github.io/battlemon/
- Privacy: https://markusoft.github.io/battlemon/privacy/
- Foreground-service evidence: https://markusoft.github.io/battlemon/review/
- Direct video: https://markusoft.github.io/battlemon/assets/lan-host-demo.mp4

Publish **only this folder's contents** to the `markusoft/battlemon` GitHub repository root, then configure GitHub Pages for `main` / root. Do not publish the game repository, signing material, local app data, APKs, or billing credentials. Relative URLs support GitHub Pages repository subpaths.

The site deliberately says "Preparing for Google Play". Replace that availability text with the actual public listing URL once available; do not invent a store badge or link to an unpublished listing. Full is a one-time unlock within the public Free app, not another download.

Source of truth for privacy copy: `../battlemon/battledroid/play-store/privacy-policy.txt`. Keep the app's bundled policy and `privacy/index.html` synchronized. Screenshots are sample game states rendered by the actual native Android app; paid features are identified in captions. No tablet screenshots are claimed.

The website can be deployed independently of the Android release. Publishing this folder does not submit an AAB to Google Play.
