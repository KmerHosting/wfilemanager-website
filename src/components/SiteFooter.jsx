import { Column, Grid, Link } from "@carbon/react";

export function SiteFooter() {
  return (
    <footer className="wfm-footer">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={8}>
          <div className="wfm-footer__brand">
            <h2>wFileManager</h2>
            <p>A small, self-hosted web file manager for Linux servers.</p>
          </div>
        </Column>

        <Column sm={2} md={4} lg={{ span: 3, offset: 10 }}>
          <nav className="wfm-footer__group" aria-label="Product links">
            <strong>Product</strong>
            <Link href="#install">Install</Link>
            <Link href="https://kmerhosting.com/docs/products/wfilemanager">Documentation</Link>
            <Link href="https://github.com/KmerHosting/wfilemanager/releases">Releases</Link>
          </nav>
        </Column>

        <Column sm={2} md={4} lg={{ span: 3, offset: 13 }}>
          <nav className="wfm-footer__group" aria-label="Project links">
            <strong>Project</strong>
            <Link href="https://github.com/KmerHosting/wfilemanager">GitHub</Link>
            <Link href="https://kmerhosting.com">KmerHosting</Link>
          </nav>
        </Column>

        <Column sm={4} md={8} lg={16}>
          <div className="wfm-footer__bottom">
            <p>© {new Date().getFullYear()} KmerHosting.</p>
          </div>
        </Column>
      </Grid>
    </footer>
  );
}
