import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Column,
  Content,
  GlobalTheme,
  Grid,
  Layer,
  Link,
  SkipToContent,
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
  Tag,
} from "@carbon/react";
import { Download, Launch, LogoGithub } from "@carbon/icons-react";
import { InstallSection } from "./components/InstallSection.jsx";
import { ProductShot } from "./components/ProductShot.jsx";
import { SiteFooter } from "./components/SiteFooter.jsx";
import { SiteHeader } from "./components/SiteHeader.jsx";
import {
  ARCHITECTURE,
  CAPABILITIES,
  FAQ,
  PRODUCT_FACTS,
  PRODUCT_VERSION,
} from "./content.js";

const HERO_SCREENSHOT = "https://i9x6ydbcdo.ufs.sh/f/CUIaGkT8792AtzrPvR2gvE2d3BZCY65rShHDN8URIqu0yi7T";
const PRODUCT_SCREENSHOT = "https://i9x6ydbcdo.ufs.sh/f/CUIaGkT8792AxXpZKMDLXUT3oGYItAMD0sfm6RrbQCke5xyH";
const THEME_STORAGE_KEY = "wfilemanager-website-theme";
const LIGHT_THEME = "g10";
const DARK_THEME = "g90";

function getInitialTheme() {
  if (typeof window === "undefined") return LIGHT_THEME;

  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === LIGHT_THEME || saved === DARK_THEME) return saved;

  // Migrate the previous extreme white/g100 preference to the softer
  // Carbon gray theme pair without breaking existing visitors.
  if (saved === "white") return LIGHT_THEME;
  if (saved === "g100") return DARK_THEME;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK_THEME : LIGHT_THEME;
}

function Hero() {
  return (
    <section id="top" className="wfm-hero" aria-labelledby="hero-title">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={6} xlg={6}>
          <div className="wfm-hero__copy">
            <Tag type="blue" size="md">
              Version {PRODUCT_VERSION}
            </Tag>
            <h1 id="hero-title">Manage Linux files without moving them somewhere else.</h1>
            <p className="wfm-hero__lead">
              wFileManager works directly with the filesystem already on your server. Browse, edit, upload, move,
              recover and update from a focused local web interface.
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
                View source
              </Button>
            </div>
            <p className="wfm-hero__meta">Open source · Local-first · Single administrator · Ubuntu 20.04+</p>
          </div>
        </Column>
        <Column sm={4} md={8} lg={10} xlg={10}>
          <ProductShot
            src={HERO_SCREENSHOT}
            alt="wFileManager File Explorer showing Linux directories and file controls"
            caption="File Explorer — the real Linux filesystem, managed from the browser."
            eager
          />
        </Column>
      </Grid>
    </section>
  );
}

function ProductFacts() {
  return (
    <Layer as="section" withBackground className="wfm-facts" aria-label="Product facts">
      <Grid fullWidth condensed>
        {PRODUCT_FACTS.map(({ value, label }) => (
          <Column sm={2} md={2} lg={4} key={label}>
            <div className="wfm-fact">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </Column>
        ))}
      </Grid>
    </Layer>
  );
}

function Capabilities() {
  return (
    <section id="features" className="wfm-band" aria-labelledby="features-title">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={5}>
          <div className="wfm-section-intro wfm-section-intro--sticky">
            <p className="wfm-section-label">Core capabilities</p>
            <h2 id="features-title">A small tool for the file work you do every day.</h2>
            <p>
              The interface stays close to Linux filesystem concepts instead of turning the server into a separate
              storage product.
            </p>
            <Link href="https://kmerhosting.com/docs">Read the documentation</Link>
          </div>
        </Column>
        <Column sm={4} md={8} lg={{ span: 10, offset: 6 }}>
          <div className="wfm-capabilities">
            {CAPABILITIES.map(({ number, title, description }) => (
              <article className="wfm-capability" key={number}>
                <span className="wfm-capability__number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Column>
      </Grid>
    </section>
  );
}

function ProductSection() {
  return (
    <Layer as="section" withBackground id="product" className="wfm-band wfm-product" aria-labelledby="product-title">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={10}>
          <ProductShot
            src={PRODUCT_SCREENSHOT}
            alt="wFileManager About and updates screen showing release status"
            caption="Updates remain visible, verified and recoverable."
          />
        </Column>
        <Column sm={4} md={8} lg={6}>
          <div className="wfm-section-intro wfm-product__copy">
            <p className="wfm-section-label">Local by design</p>
            <h2 id="product-title">Your files stay on the server. So does the application data.</h2>
            <p>
              There is no hosted account backend and no extra object-storage layer between the interface and the
              files you are managing. Application state lives in local SQLite.
            </p>
            <div className="wfm-product__links">
              <Button
                href={`https://github.com/KmerHosting/wfilemanager/releases/tag/v${PRODUCT_VERSION}`}
                kind="ghost"
                renderIcon={Launch}
              >
                Release {PRODUCT_VERSION}
              </Button>
            </div>
          </div>
        </Column>
      </Grid>
    </Layer>
  );
}

function Architecture() {
  return (
    <Layer
      as="section"
      withBackground
      id="architecture"
      className="wfm-band wfm-architecture"
      aria-labelledby="architecture-title"
    >
      <Grid fullWidth>
        <Column sm={4} md={8} lg={6}>
          <div className="wfm-section-intro">
            <p className="wfm-section-label">Architecture</p>
            <h2 id="architecture-title">Intentionally uncomplicated.</h2>
            <p>
              wFileManager is designed to be understandable on a single Linux server: one account, one local
              database, one service and verified prebuilt releases.
            </p>
          </div>
        </Column>
        <Column sm={4} md={8} lg={{ span: 9, offset: 7 }}>
          <StructuredListWrapper className="wfm-architecture-list" aria-label="wFileManager architecture">
            <StructuredListHead>
              <StructuredListRow head>
                <StructuredListCell head>Area</StructuredListCell>
                <StructuredListCell head>Implementation</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              {ARCHITECTURE.map(([area, implementation]) => (
                <StructuredListRow key={area}>
                  <StructuredListCell>{area}</StructuredListCell>
                  <StructuredListCell>{implementation}</StructuredListCell>
                </StructuredListRow>
              ))}
            </StructuredListBody>
          </StructuredListWrapper>
        </Column>
      </Grid>
    </Layer>
  );
}

function Faq() {
  return (
    <section className="wfm-band wfm-faq" aria-labelledby="faq-title">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={5}>
          <div className="wfm-section-intro">
            <p className="wfm-section-label">FAQ</p>
            <h2 id="faq-title">Before you install.</h2>
          </div>
        </Column>
        <Column sm={4} md={8} lg={{ span: 10, offset: 6 }}>
          <Accordion align="start">
            {FAQ.map(([question, answer]) => (
              <AccordionItem title={question} key={question}>
                <p>{answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </Column>
      </Grid>
    </section>
  );
}

function FinalCta() {
  return (
    <Layer as="section" withBackground className="wfm-final-cta" aria-labelledby="cta-title">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={9}>
          <h2 id="cta-title">Put a focused file manager on your Linux server.</h2>
          <p>No hosted account. No remote storage layer. No server-side application compilation.</p>
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
    </Layer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-carbon-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === DARK_THEME ? LIGHT_THEME : DARK_THEME));

  return (
    <GlobalTheme theme={theme}>
      <SkipToContent href="#main-content" />
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <Content id="main-content" className="wfm-site-content">
        <Hero />
        <ProductFacts />
        <Capabilities />
        <ProductSection />
        <InstallSection />
        <Architecture />
        <Faq />
        <FinalCta />
        <SiteFooter />
      </Content>
    </GlobalTheme>
  );
}
