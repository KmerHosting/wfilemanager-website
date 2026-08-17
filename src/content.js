export const PRODUCT_VERSION = "0.11.5";

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
    title: "Copy and move safely",
    description:
      "Run larger filesystem operations as background jobs so the interface stays responsive while the server does the work.",
  },
  {
    number: "05",
    title: "Trash and restore",
    description:
      "Move files to a local trash before permanent deletion and restore them when a mistake needs to be reversed.",
  },
  {
    number: "06",
    title: "Update with rollback",
    description:
      "Install verified prebuilt releases with health checks, atomic activation and a rollback path if a new version does not become healthy.",
  },
];

export const INSTALL_STEPS = [
  ["01", "Run the installer", "Use root or sudo on a supported Ubuntu server."],
  ["02", "Open the setup URL", "The installer prints the address and first-run setup code."],
  ["03", "Create the administrator password", "Finish setup locally; no hosted account service is required."],
];

export const ARCHITECTURE = [
  ["Account model", "Single local administrator"],
  ["Application data", "SQLite on the server"],
  ["Managed files", "Normal Linux filesystem paths"],
  ["Runtime", "Prebuilt Node.js application"],
  ["Service manager", "systemd"],
  ["Update verification", "SHA-256 + health check + atomic activation"],
  ["License", "MIT"],
];

export const FAQ = [
  [
    "Does wFileManager require a domain?",
    "No. It can run directly on the server IP and port 1973. A domain and HTTPS reverse proxy are optional.",
  ],
  [
    "Where is application data stored?",
    "Application data is stored locally in SQLite. Managed files remain in their normal locations on the Linux filesystem.",
  ],
  [
    "Does it support multiple users?",
    "No. wFileManager intentionally uses one local administrator account.",
  ],
  [
    "How do I reset the administrator password?",
    "Run sudo wfilemanager-reset-admin-password from a trusted shell on the server.",
  ],
];
