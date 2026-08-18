# wFileManager Website

Official website for [wFileManager](https://github.com/KmerHosting/wfilemanager), a lightweight local-first web file manager for Linux servers.

## Frontend architecture

This website is intentionally built as a Carbon-native React/Vite application. The public interface is composed from `@carbon/react`, `@carbon/icons-react`, `@carbon/themes`, Carbon UI Shell, Grid, Layer, semantic color tokens, typography, spacing, breakpoints and motion APIs.

The design contract is deliberately strict:

- Carbon components are used for interactive controls and navigation.
- Colors are bound to `--cds-*` semantic tokens instead of copied color values.
- Responsive behavior uses Carbon breakpoint Sass utilities.
- Motion uses Carbon motion durations/easing and respects reduced-motion preferences.
- `GlobalTheme` and `data-carbon-theme` are synchronized, while Sass emits the official Carbon White, G10, G90 and G100 theme maps.
- The website uses G10 for the default light experience and G90 for dark mode, avoiding the previous extreme white/G100 presentation.
- Carbon `Layer` with `withBackground` provides contextual tonal hierarchy between alternating sections in both light and dark themes.
- Product imagery is limited to the two current wFileManager captures: File Explorer and About & updates.
- A repository audit rejects parallel UI systems, raw colors, custom gradients/shadows/radii, native controls, hand-written responsive media queries and stale screenshot formats.

## Development

```bash
npm install
npm run dev
```

Full validation:

```bash
npm run check
```

## Product links

- wFileManager: https://github.com/KmerHosting/wfilemanager
- Releases: https://github.com/KmerHosting/wfilemanager/releases
- Documentation: https://kmerhosting.com/docs
- KmerHosting: https://kmerhosting.com
