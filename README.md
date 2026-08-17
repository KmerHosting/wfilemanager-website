# wFileManager Website

Official website for [wFileManager](https://github.com/KmerHosting/wfilemanager), a lightweight local-first web file manager for Linux servers.

## Frontend architecture

This website is intentionally built as a Carbon-native React/Vite application. The public interface is composed from `@carbon/react`, `@carbon/icons-react`, Carbon UI Shell, Grid, themes, semantic color tokens, typography, spacing, breakpoints and motion APIs.

The design contract is deliberately strict:

- Carbon components are used for interactive controls and navigation.
- Colors are bound to `--cds-*` semantic tokens instead of copied color values.
- Responsive behavior uses Carbon breakpoint Sass utilities.
- Motion uses Carbon motion durations/easing and respects reduced-motion preferences.
- The global theme toggles between Carbon White and G100, with scoped Carbon theme zones for contrast.
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
