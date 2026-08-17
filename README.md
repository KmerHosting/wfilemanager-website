# wFileManager Website

Official website for [wFileManager](https://github.com/KmerHosting/wfilemanager), a lightweight local-first web file manager for Linux servers.

## Frontend

The website is a React/Vite application built directly on IBM Carbon Design System:

- `@carbon/react`
- `@carbon/icons-react`
- Carbon UI Shell
- Carbon Grid, Tile, Tag, Accordion, CodeSnippet, Link and Button components
- Carbon semantic tokens, typography and spacing

A repository audit rejects parallel UI systems and non-Carbon visual treatments in the application surface.

## Development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run audit:carbon
npm run build
```

## Product links

- wFileManager: https://github.com/KmerHosting/wfilemanager
- Documentation: https://kmerhosting.com/docs
- KmerHosting: https://kmerhosting.com
