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
  shortName: string;
  platform: string;
  privacy: string;
  status: "Live" | "Beta";
  mark: string;
  icon: LucideIcon;
}

export const productivityTools: ProductivityTool[] = [
  {
    name: "CloakPDF",
    shortName: "PDF",
    slug: "pdf",
    description:
      "Edit, annotate, redact, reorganise, and export PDFs in a browser-native private workbench.",
    href: "https://pdf.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakpdf",
    platform: "Web · PWA",
    privacy: "Files stay local",
    status: "Live",
    mark: "https://pdf.cloakyard.com/cloakpdf-mark.svg",
    icon: FileText,
  },
  {
    name: "CloakResume",
    shortName: "Resume",
    slug: "resume",
    description:
      "Build, tailor, review, and export an ATS-friendly résumé without uploading your career history.",
    href: "https://resume.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakresume",
    platform: "Web · PWA",
    privacy: "Drafts stay local",
    status: "Live",
    mark: "https://resume.cloakyard.com/cloakresume-mark.svg",
    icon: PanelsTopLeft,
  },
  {
    name: "CloakIMG",
    shortName: "IMG",
    slug: "img",
    description:
      "A focused photo editor with private retouching, metadata removal, and optional on-device AI.",
    href: "https://img.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakimg",
    platform: "Web · PWA",
    privacy: "Pixels stay local",
    status: "Live",
    mark: "https://img.cloakyard.com/cloakimg-mark.svg",
    icon: ImageIcon,
  },
  {
    name: "CloakDrop",
    shortName: "Drop",
    slug: "drop",
    description:
      "A native macOS download manager with adaptive range transfers, safe resume, and local provenance.",
    href: "https://drop.cloakyard.com",
    repo: "https://github.com/cloakyard/cloakdrop",
    platform: "macOS · Native",
    privacy: "Zero telemetry",
    status: "Beta",
    mark: "https://drop.cloakyard.com/cloakdrop-mark.svg",
    icon: Download,
  },
];

export const experiments: YardProject[] = [
  {
    name: "KERR",
    slug: "kerr",
    description:
      "A relativistic black-hole visualiser scored by a generative cinematic piece, running entirely in the browser.",
    href: "https://kerr.cloakyard.com",
    repo: "https://github.com/cloakyard/kerr",
  },
];

export const allTools = [...productivityTools, ...experiments];
