export const PRODUCT_VERSION = "0.11.7";

export const INSTALL_COMMAND =
  "curl -fsSL https://igihzeyfgwhnuiflamvn.supabase.co/storage/v1/object/public/releases.kmerhosting.com/wfilemanager/install.sh | sudo bash";

export const PRODUCT_FACTS = [
  { value: "1", label: "local administrator" },
  { value: "SQLite", label: "application data" },
  { value: "systemd", label: "service runtime" },
  { value: "MIT", label: "open-source license" },
];

export const CAPABILITIES = [
  {
    number: "01",
    title: "Browse the Linux filesystem",
    description:
      "Move through the server filesystem directly. Files stay in their normal Linux locations instead of being copied into a separate storage layer.",
  },
  {
    number: "02",
    title: "Upload and download",
    description:
      "Transfer files from the browser with visible progress and tracked operations for work that takes longer than a normal request.",
  },
  {
    number: "03",
    title: "Edit text files",
    description:
      "Open, change and save common text files without adding a separate editor service to the server.",
  },
  {
    number: "04",
    title: "Move, copy, rename and delete",
    description:
      "Perform the filesystem operations you expect from a server file manager, with destructive actions surfaced explicitly.",
  },
  {
    number: "05",
    title: "Trash and recovery",
    description:
      "Deleted items can be reviewed and restored from the Trash view before they are removed permanently.",
  },
  {
    number: "06",
    title: "Operational updates",
    description:
      "Check the installed release, inspect the available version and update using the same verified prebuilt runtime model as installation.",
  },
];

export const ARCHITECTURE = [
  ["Files", "Direct Linux filesystem access"],
  ["Application data", "Local SQLite"],
  ["Administrator", "One local account"],
  ["Runtime", "Prebuilt Linux x64 release"],
  ["Service", "systemd"],
  ["Updates", "Atomic replacement with rollback"],
];

export const FAQ = [
  ["Does wFileManager upload my files to KmerHosting?", "No. Files remain on the Linux server where wFileManager is installed."],
  ["Does the server need Bun or Node.js?", "No. Production installation uses the published prebuilt runtime."],
  ["Can I create multiple administrator accounts?", "No. wFileManager intentionally has one local administrator account named admin."],
  ["How do I recover a forgotten administrator password?", "Run the server-side reset command from a trusted shell on the host."],
  ["How are updates installed?", "The updater downloads the published runtime, validates it and performs an atomic replacement with rollback support."],
];

export const INSTALL_STEPS = [
  ["01", "Run the installer", "Execute the one-line installer as root or through sudo."],
  ["02", "Open the local interface", "The installer prints the address and one-time setup code after the service is healthy."],
  ["03", "Create the administrator", "Use the setup code to create the fixed local admin account and choose its password."],
];
