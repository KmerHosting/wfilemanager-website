import { Button, CodeSnippet, Column, Grid, Tag } from "@carbon/react";
import { Launch } from "@carbon/icons-react";
import { INSTALL_COMMAND, INSTALL_STEPS, PRODUCT_VERSION } from "../content.js";

export function InstallSection() {
  return (
    <section id="install" className="wfm-band wfm-install" aria-labelledby="install-title">
      <Grid fullWidth>
        <Column sm={4} md={8} lg={6} xlg={5}>
          <div className="wfm-section-intro wfm-section-intro--inverse">
            <Tag type="green" size="md">
              Current release {PRODUCT_VERSION}
            </Tag>
            <h2 id="install-title">Install the prebuilt runtime in one command.</h2>
            <p>
              The installer checks the host, downloads the published runtime, configures systemd and waits for a
              healthy application before it finishes.
            </p>
          </div>
        </Column>
        <Column sm={4} md={8} lg={{ span: 9, offset: 7 }} xlg={{ span: 10, offset: 6 }}>
          <div className="wfm-install__command" aria-label="Installation command">
            <CodeSnippet type="multi" wrapText>
              {INSTALL_COMMAND}
            </CodeSnippet>
          </div>
          <div className="wfm-install__steps">
            {INSTALL_STEPS.map(([number, title, description]) => (
              <div className="wfm-install-step" key={number}>
                <span className="wfm-step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="wfm-install__actions">
            <Button href="https://kmerhosting.com/docs" kind="tertiary" renderIcon={Launch}>
              Installation documentation
            </Button>
          </div>
        </Column>
      </Grid>
    </section>
  );
}
