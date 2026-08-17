import { readFile } from "node:fs/promises";

const files = ["src/App.jsx", "src/styles.scss", "package.json"];
const [app, styles, pkgRaw] = await Promise.all(files.map((file) => readFile(file, "utf8")));
const pkg = JSON.parse(pkgRaw);
const violations = [];

if (!pkg.dependencies?.["@carbon/react"] || !pkg.dependencies?.["@carbon/icons-react"]) {
  violations.push("Carbon React and Carbon Icons must be production dependencies.");
}

for (const dependency of ["tailwindcss", "bootstrap", "@mui/material", "antd", "chakra-ui", "@radix-ui/react-dialog"]) {
  if (pkg.dependencies?.[dependency] || pkg.devDependencies?.[dependency]) {
    violations.push(`Parallel UI dependency is not allowed: ${dependency}`);
  }
}

if (!app.includes('from "@carbon/react"') || !app.includes('from "@carbon/icons-react"')) {
  violations.push("Application UI must import Carbon components and icons directly.");
}

for (const nativeControl of ["<button", "<input", "<select", "<textarea", "<details", "<summary"]) {
  if (app.includes(nativeControl)) {
    violations.push(`Use the Carbon equivalent instead of ${nativeControl}.`);
  }
}

for (const required of [
  '<GlobalTheme theme="white">',
  '<SkipToContent href="#main-content"',
  'aria-expanded={isSideNavExpanded}',
  'aria-controls={MOBILE_NAV_ID}',
  'onOverlayClick={onClickSideNavExpand}',
]) {
  if (!app.includes(required)) {
    violations.push(`Canonical Carbon shell requirement is missing: ${required}`);
  }
}

if (!styles.includes('@use "@carbon/react"') || !styles.includes('@carbon/styles/scss/spacing')) {
  violations.push("Styles must load Carbon and use Carbon spacing tokens.");
}

if (!styles.includes('@carbon/styles/scss/breakpoint') || !styles.includes('breakpoint.breakpoint-down(')) {
  violations.push("Responsive rules must use Carbon breakpoint utilities.");
}

if (styles.includes('@media (')) {
  violations.push("Use Carbon breakpoint utilities instead of hand-authored media thresholds.");
}

for (const forbidden of ["border-radius:", "box-shadow:", "linear-gradient(", "radial-gradient("]) {
  if (styles.includes(forbidden)) {
    violations.push(`Non-Carbon visual treatment found: ${forbidden}`);
  }
}

if (violations.length) {
  console.error(`Carbon conformance audit failed:\n${violations.map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}

console.log("Carbon source-alignment audit passed for the wFileManager website.");
