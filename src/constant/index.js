import HeroImage from "../assets/illustration-intro.png";
import Access from "../assets/icon-access-anywhere.svg";
import Security from "../assets/icon-security.svg";
import Collaboration from "../assets/icon-collaboration.svg";
import AnyFile from "../assets/icon-any-file.svg";

export const navItems = [
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Sign In",
    path: "/signin",
  },
];

export const heroMain = [
  {
    heroImage: HeroImage,
    alt: "Hero Image",
  },
  {
    title: "All your files in one secure location, acessible anywhere.",
    subtitle:
      "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
  },
];

export const accessFiles = [
  {
    icon: Access,
    title: "Access your files, anywhere",
    subtitle:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere",
  },
  {
    icon: Security,
    title: "Security you can trust",
    subtitle:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your file.",
  },
  {
    icon: Collaboration,
    title: "Real-time collaboration",
    subtitle:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: AnyFile,
    title: "Store any type of file",
    subtitle:
      "Whether you're sharing holidays photos or work documents, Fylo has covered allowing for all file types to be securely stored and shared.",
  },
];
