import { access, readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(path)));
    else files.push(path);
  }
  return files;
}

const srcFiles = (await collectFiles("src")).filter((file) => [".jsx", ".js", ".scss"].includes(extname(file)));
const sources = Object.fromEntries(await Promise.all(srcFiles.map(async (file) => [file, await readFile(file, "utf8")])));
const joinedSource = Object.values(sources).join("\n");
const styles = sources["src/styles.scss"] || "";
const pkg = JSON.parse(await readFile("package.json", "utf8"));
const violations = [];

for (const dependency of ["@carbon/react", "@carbon/icons-react"]) {
  if (!pkg.dependencies?.[dependency]) violations.push(`Missing production dependency: ${dependency}`);
}

for (const dependency of [
  "tailwindcss",
  "bootstrap",
  "@mui/material",
  "antd",
  "@chakra-ui/react",
  "@radix-ui/react-dialog",
]) {
  if (pkg.dependencies?.[dependency] || pkg.devDependencies?.[dependency]) {
    violations.push(`Parallel UI dependency is not allowed: ${dependency}`);
  }
}

for (const [file, source] of Object.entries(sources)) {
  if (!file.endsWith(".jsx")) continue;
  for (const nativeControl of ["<button", "<input", "<select", "<textarea", "<details", "<summary", "<table"]) {
    if (source.includes(nativeControl)) violations.push(`${file}: use the Carbon equivalent instead of ${nativeControl}.`);
  }
}

for (const required of [
  '<GlobalTheme theme="white">',
  '<SkipToContent href="#main-content"',
  "<HeaderContainer",
  "<HeaderMenuButton",
  "aria-expanded={isSideNavExpanded}",
  "aria-controls={MOBILE_NAV_ID}",
  "onOverlayClick={onClickSideNavExpand}",
  '<Theme theme="g100">',
  "<Grid fullWidth",
  "<CodeSnippet",
  "<StructuredListWrapper",
  "<Accordion",
]) {
  if (!joinedSource.includes(required)) violations.push(`Canonical Carbon requirement is missing: ${required}`);
}

for (const requiredUse of [
  '@use "@carbon/react"',
  '@carbon/styles/scss/breakpoint',
  '@carbon/styles/scss/motion',
  '@carbon/styles/scss/spacing',
  '@carbon/styles/scss/type',
  "motion.motion(",
  "breakpoint.breakpoint-down(",
  "type.type-style(",
  "var(--cds-",
]) {
  if (!styles.includes(requiredUse)) violations.push(`Carbon style foundation is missing: ${requiredUse}`);
}

const rawColorPattern = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(/;
if (rawColorPattern.test(styles)) violations.push("Use Carbon semantic color tokens instead of raw color values.");

for (const forbidden of ["border-radius:", "box-shadow:", "linear-gradient(", "radial-gradient(", "cubic-bezier("]) {
  if (styles.includes(forbidden)) violations.push(`Non-token visual treatment found: ${forbidden}`);
}

const mediaQueries = styles.match(/@media\s*\([^)]*\)/g) || [];
for (const query of mediaQueries) {
  if (!query.includes("prefers-reduced-motion")) {
    violations.push(`Responsive CSS must use Carbon breakpoint utilities instead of ${query}.`);
  }
}

const productImages = [
  {
    sourceRef: '"/wfilemanager-file-explorer.svg"',
    file: "public/wfilemanager-file-explorer.svg",
  },
  {
    sourceRef: '"/wfilemanager-about-updates.svg"',
    file: "public/wfilemanager-about-updates.svg",
  },
];

for (const image of productImages) {
  if (!joinedSource.includes(image.sourceRef)) {
    violations.push(`Product imagery must reference the stable public asset ${image.sourceRef}.`);
  }

  try {
    await access(image.file);
  } catch {
    violations.push(`Missing product screenshot asset: ${image.file}.`);
  }
}

if (violations.length) {
  console.error(`Carbon conformance audit failed:\n${violations.map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}

console.log(`Carbon conformance audit passed across ${srcFiles.length} source files.`);
