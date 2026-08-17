import {
  Accordion,
  AccordionItem,
  Button,
  CodeSnippet,
  Column,
  Content,
  Grid,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Link,
  SideNav,
  SideNavItems,
  SideNavLink,
  Tag,
  Theme,
  Tile,
} from "@carbon/react";
import { Download, Launch, LogoGithub } from "@carbon/icons-react";
import explorerScreenshot from "../assets/wfilemanager-file-explorer.png";
import updatesScreenshot from "../assets/wfilemanager-about-updates.png";

const INSTALL_COMMAND =
  "curl -fsSL https://igihzeyfgwhnuiflamvn.supabase.co/storage/v1/object/public/releases.kmerhosting.com/wfilemanager/install.sh | sudo bash";

const features = [
  ["01", "Browse the real filesystem", "Navigate directories directly on the server and work with files in their normal Linux locations."],
  ["02", "Upload and download", "Transfer files with clear progress feedback for operations that take time."],
  ["03", "Edit text files", "Open and save common text files directly from the browser without a separate editor service."],
  ["04", "Copy and move", "Run larger filesystem operations as tracked background jobs instead of blocking the interface."],
  ["05", "Trash and restore", "Move files to a local trash before permanent deletion and restore them when needed."],
  ["06", "Update safely", "Install verified prebuilt releases with health checks, atomic activation and rollback."],
];

const principles = [
  ["Local-first", "Your files and application data stay on your server."],
  ["Single admin", "One local administrator account and no role system."],
  ["Prebuilt runtime", "No application compilation on the target server."],
  ["Atomic updates", "Verified releases with health checks and rollback."],
];

function Navigation() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="wFileManager website">
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? "Close navigation" : "Open navigation"}
              isActive={isSideNavExpanded}
              onClick={onClickSideNavExpand}
            />
            <HeaderName href="#top" prefix="">
              wFileManager
            </HeaderName>
            <HeaderNavigation aria-label="Primary navigation">
              <HeaderMenuItem href="#features">Features</HeaderMenuItem>
              <HeaderMenuItem href="#install">Install</HeaderMenuItem>
              <HeaderMenuItem href="https://kmerhosting.com/docs">Docs</HeaderMenuItem>
              <HeaderMenuItem href="https://github.com/KmerHosting/wfilemanager">GitHub</HeaderMenuItem>
            </HeaderNavigation>
          </Header>
          <SideNav
            aria-label="Mobile navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
            onSideNavBlur={onClickSideNavExpand}
          >
            <SideNavItems>
              <SideNavLink href="#features" onClick={onClickSideNavExpand}>
                Features
              </SideNavLink>
              <SideNavLink href="#install" onClick={onClickSideNavExpand}>
                Install
              </SideNavLink>
              <SideNavLink href="https://kmerhosting.com/docs">Documentation</SideNavLink>
              <SideNavLink href="https://github.com/KmerHosting/wfilemanager">GitHub</SideNavLink>
            </SideNavItems>
          </SideNav>
        </>
      )}
    />
  );
}

function App() {
  return (
    <Theme theme="white">
      <Navigation />
      <Content id="main-content" className="wfm-site-content">
        <section id="top" className="wfm-hero" aria-labelledby="hero-title">
          <Grid fullWidth>
            <Column sm={4} md={8} lg={6} xlg={5}>
              <div className="wfm-hero__copy">
                <Tag type="blue" size="md">
                  wFileManager 0.11.5
                </Tag>
                <h1 id="hero-title">File management for Linux servers, without the complexity.</h1>
                <p className="wfm-hero__lead">
                  Browse, edit, upload, move and recover files through a focused web interface. One local
                  administrator, SQLite application data and no hosted backend.
                </p>
                <div className="wfm-actions">
                  <Button href="#install" renderIcon={Download}>
                    Install wFileManager
                  </Button>
                  <Button
                    href="https://github.com/KmerHosting/wfilemanager"
                    kind="tertiary"
                    renderIcon={LogoGithub}
                  >
                    View on GitHub
                  </Button>
                </div>
                <div className="wfm-meta" aria-label="Product information">
                  <span>Open source</span>
                  <span>MIT licensed</span>
                  <span>Ubuntu 20.04+</span>
                  <span>Local SQLite</span>
                </div>
              </div>
            </Column>
            <Column sm={4} md={8} lg={{ span: 10, offset: 6 }} xlg={{ span: 11, offset: 5 }}>
              <div className="wfm-product-shot">
                <img src={explorerScreenshot} alt="wFileManager File Explorer interface" />
              </div>
            </Column>
          </Grid>
        </section>

        <section className="wfm-proof" aria-label="wFileManager principles">
          <Grid fullWidth condensed>
            {principles.map(([title, description]) => (
              <Column sm={4} md={4} lg={4} key={title}>
                <Tile className="wfm-proof-tile">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </Tile>
              </Column>
            ))}
          </Grid>
        </section>

        <section className="wfm-section" id="features" aria-labelledby="features-title">
          <Grid fullWidth>
            <Column sm={4} md={8} lg={8}>
              <div className="wfm-section-heading">
                <p className="wfm-eyebrow">Core capabilities</p>
                <h2 id="features-title">Everything needed for day-to-day file management.</h2>
                <p>Focused on direct Linux filesystem operations without adding another storage layer.</p>
              </div>
            </Column>
          </Grid>
          <Grid fullWidth condensed className="wfm-feature-grid">
            {features.map(([number, title, description]) => (
              <Column sm={4} md={4} lg={8} key={number}>
                <Tile className="wfm-feature-tile">
                  <span className="wfm-feature-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Tile>
              </Column>
            ))}
          </Grid>
        </section>

        <Theme theme="g100">
          <section className="wfm-section wfm-install" id="install" aria-labelledby="install-title">
            <Grid fullWidth>
              <Column sm={4} md={8} lg={7}>
                <div className="wfm-section-heading">
                  <p className="wfm-eyebrow">Installation</p>
                  <h2 id="install-title">One command. Prebuilt runtime.</h2>
                  <p>
                    The installer validates the server, downloads the published runtime, configures systemd and
                    performs a health check. The server does not compile the application.
                  </p>
                </div>
                <ol className="wfm-install-steps">
                  <li><span>01</span> Run the command as root or with sudo.</li>
                  <li><span>02</span> Open the displayed server URL.</li>
                  <li><span>03</span> Enter the first-run setup code.</li>
                  <li><span>04</span> Choose the administrator password.</li>
                </ol>
              </Column>
              <Column sm={4} md={8} lg={{ span: 8, offset: 8 }}>
                <Tile className="wfm-command-tile">
                  <div className="wfm-command-tile__header">
                    <h3>Install wFileManager</h3>
                    <Tag type="green">Ubuntu</Tag>
                  </div>
                  <CodeSnippet type="multi" wrapText>
                    {INSTALL_COMMAND}
                  </CodeSnippet>
                  <p>Copy the command, run it on the Linux server, then follow the setup URL.</p>
                </Tile>
              </Column>
            </Grid>
          </section>
        </Theme>

        <section className="wfm-section" aria-labelledby="architecture-title">
          <Grid fullWidth>
            <Column sm={4} md={8} lg={7}>
              <div className="wfm-section-heading">
                <p className="wfm-eyebrow">Architecture</p>
                <h2 id="architecture-title">Simple by design.</h2>
                <p>
                  wFileManager avoids the infrastructure normally attached to control panels. There is no hosted
                  account service and no application build on the target server.
                </p>
              </div>
            </Column>
            <Column sm={4} md={8} lg={{ span: 8, offset: 8 }}>
              <Tile className="wfm-definition-tile">
                <dl>
                  <div><dt>Account</dt><dd>Single local administrator</dd></div>
                  <div><dt>Database</dt><dd>SQLite on the server</dd></div>
                  <div><dt>Runtime</dt><dd>Prebuilt Node.js application</dd></div>
                  <div><dt>Service</dt><dd>systemd</dd></div>
                  <div><dt>Updates</dt><dd>SHA-256 + atomic activation</dd></div>
                  <div><dt>License</dt><dd>MIT</dd></div>
                </dl>
              </Tile>
            </Column>
          </Grid>
        </section>

        <section className="wfm-showcase" aria-labelledby="showcase-title">
          <Grid fullWidth>
            <Column sm={4} md={8} lg={6}>
              <div className="wfm-section-heading">
                <p className="wfm-eyebrow">Operations</p>
                <h2 id="showcase-title">Updates stay visible and recoverable.</h2>
                <p>
                  The application checks published releases, reports update state and retains rollback support after
                  activation.
                </p>
                <Button
                  href="https://github.com/KmerHosting/wfilemanager/releases/tag/v0.11.5"
                  kind="ghost"
                  renderIcon={Launch}
                >
                  View 0.11.5 release
                </Button>
              </div>
            </Column>
            <Column sm={4} md={8} lg={{ span: 10, offset: 6 }}>
              <div className="wfm-product-shot wfm-product-shot--flat">
                <img src={updatesScreenshot} alt="wFileManager About and updates interface" loading="lazy" />
              </div>
            </Column>
          </Grid>
        </section>

        <section className="wfm-section" aria-labelledby="faq-title">
          <Grid fullWidth>
            <Column sm={4} md={8} lg={6}>
              <div className="wfm-section-heading">
                <p className="wfm-eyebrow">FAQ</p>
                <h2 id="faq-title">Common questions.</h2>
              </div>
            </Column>
            <Column sm={4} md={8} lg={{ span: 10, offset: 6 }}>
              <Accordion align="start">
                <AccordionItem title="Does wFileManager require a domain?">
                  <p>No. It can run directly on the server IP and port 1973. A domain and HTTPS reverse proxy are optional.</p>
                </AccordionItem>
                <AccordionItem title="Where is application data stored?">
                  <p>Application data is stored locally in SQLite. Files remain in their normal locations on the Linux filesystem.</p>
                </AccordionItem>
                <AccordionItem title="Does it support multiple users?">
                  <p>No. wFileManager intentionally uses one local administrator account.</p>
                </AccordionItem>
                <AccordionItem title="How do I reset the administrator password?">
                  <p>Run <code>sudo wfilemanager-reset-admin-password</code> from a trusted server shell.</p>
                </AccordionItem>
              </Accordion>
            </Column>
          </Grid>
        </section>

        <section className="wfm-cta" aria-labelledby="cta-title">
          <Grid fullWidth>
            <Column sm={4} md={8} lg={10}>
              <h2 id="cta-title">Manage your server files from the browser.</h2>
              <p>Open source, local-first and intentionally small.</p>
            </Column>
            <Column sm={4} md={8} lg={{ span: 6, offset: 10 }}>
              <div className="wfm-actions wfm-actions--end">
                <Button href="#install">Install now</Button>
                <Button href="https://kmerhosting.com/docs" kind="tertiary" renderIcon={Launch}>
                  Documentation
                </Button>
              </div>
            </Column>
          </Grid>
        </section>

        <footer className="wfm-footer">
          <Grid fullWidth>
            <Column sm={4} md={4} lg={8}>
              <h2>wFileManager</h2>
              <p>A lightweight web file manager for Linux servers.</p>
            </Column>
            <Column sm={4} md={4} lg={{ span: 8, offset: 8 }}>
              <div className="wfm-footer__links">
                <Link href="https://github.com/KmerHosting/wfilemanager">GitHub</Link>
                <Link href="https://kmerhosting.com/docs">Documentation</Link>
                <Link href="https://kmerhosting.com">KmerHosting</Link>
              </div>
              <p>© {new Date().getFullYear()} KmerHosting LLC.</p>
            </Column>
          </Grid>
        </footer>
      </Content>
    </Theme>
  );
}

export default App;
