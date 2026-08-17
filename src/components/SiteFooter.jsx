import { Column, Grid, Link } from "@carbon/react";

export function SiteFooter() {
  return (
    <footer className="wfm-footer">
      <Grid fullWidth>
        <Column sm={4} md={4} lg={8}>
          <h2>wFileManager</h2>
          <p>Local-first file management for Linux servers.</p>
        </Column>
        <Column sm={4} md={4} lg={{ span: 8, offset: 8 }}>
          <nav className="wfm-footer__links" aria-label="Footer navigation">
            <Link href="https://github.com/KmerHosting/wfilemanager">GitHub</Link>
            <Link href="https://github.com/KmerHosting/wfilemanager/releases">Releases</Link>
            <Link href="https://kmerhosting.com/docs">Documentation</Link>
            <Link href="https://kmerhosting.com">KmerHosting</Link>
          </nav>
          <p>© {new Date().getFullYear()} KmerHosting LLC.</p>
        </Column>
      </Grid>
    </footer>
  );
}
