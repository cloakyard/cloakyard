export interface YardProject {
  name: string;
  slug: string;
  description: string;
  href: string;
  repo: string;
}

export interface ProductivityTool extends YardProject {
  platform: string;
  privacy: string;
  status: "Live" | "Beta";
  logo: string;
}

export const productivityTools: ProductivityTool[] = [
  {
    name: "CloakPDF",
    slug: "pdf",
    description: "A clear space for every page. Edit, annotate, redact and organise your PDFs.",
    href: "https://pdf.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakpdf",
    platform: "Web · PWA",
    privacy: "Files stay local",
    status: "Live",
    logo: "/brands/cloakpdf-mark.svg",
  },
  {
    name: "CloakResume",
    slug: "resume",
    description:
      "Your experience, beautifully told. Build, tailor and export an ATS-friendly résumé.",
    href: "https://resume.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakresume",
    platform: "Web · PWA",
    privacy: "Drafts stay local",
    status: "Live",
    logo: "/brands/cloakresume-mark.svg",
  },
  {
    name: "CloakIMG",
    slug: "img",
    description: "Make a little more of your images. Edit, retouch and remove metadata, privately.",
    href: "https://img.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakimg",
    platform: "Web · PWA",
    privacy: "Pixels stay local",
    status: "Live",
    logo: "/brands/cloakimg-mark.svg",
  },
  {
    name: "CloakDrop",
    slug: "drop",
    description:
      "Downloads that feel at home on Mac. Start, pause and safely pick up where you left off.",
    href: "https://drop.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakdrop",
    platform: "macOS · Native",
    privacy: "Zero telemetry",
    status: "Beta",
    logo: "/brands/cloakdrop-mark.svg",
  },
  {
    name: "CloakRoll",
    slug: "roll",
    description:
      "Your memories, in your hands. Back up original iPhone photos and videos to your Mac over USB.",
    href: "https://roll.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakroll",
    platform: "macOS 26+ · Apple silicon",
    privacy: "Originals stay yours",
    status: "Beta",
    logo: "/brands/cloakroll-mark.svg",
  },
];

export const experiments: YardProject[] = [
  {
    name: "KERR",
    slug: "kerr",
    description:
      "A black hole, a generative score, and a change of perspective. Explore it in your browser.",
    href: "https://kerr.cloakyard.com",
    repo: "https://github.com/cloakyard/kerr",
  },
];
