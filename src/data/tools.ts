import {
  Download,
  FileText,
  Image as ImageIcon,
  PanelsTopLeft,
  type LucideIcon,
} from "lucide-react";

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
  icon: LucideIcon;
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
    icon: FileText,
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
    icon: PanelsTopLeft,
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
    icon: ImageIcon,
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
    icon: Download,
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
