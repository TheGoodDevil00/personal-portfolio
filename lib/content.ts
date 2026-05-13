import fs from "fs/promises";
import path from "path";

/* ─── TypeScript Interfaces ─────────────────── */

export interface About {
  name: string;
  tagline: string;
  bio: string;
  location: string;
  availableForWork: boolean;
  skills: string[];
  social: Partial<{
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  }>;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  videoSrc: string;
  videoPoster: string;
  githubUrl: string;
  demoUrl: string | null;
  featured?: boolean;
  year?: number;
}

export interface ResumeExperience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Resume {
  meta: {
    name: string;
    title: string;
    email: string;
    phone?: string;
    location: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
  summary: string;
  experience: ResumeExperience[];
  education: Array<{
    institution: string;
    degree: string;
    location: string;
    startDate: string;
    endDate: string;
    notes?: string;
  }>;
  skills: Record<string, string[]>;
  projects?: Array<{ name: string; url: string; description: string }>;
  certifications?: Array<{ name: string; issuer: string; year: string }>;
}

/* ─── Content Loaders ───────────────────────── */

const contentDir = path.join(process.cwd(), "content");

export async function getAbout(): Promise<About> {
  const raw = await fs.readFile(path.join(contentDir, "about.json"), "utf-8");
  return JSON.parse(raw) as About;
}

export async function getProjects(): Promise<Project[]> {
  const raw = await fs.readFile(path.join(contentDir, "projects.json"), "utf-8");
  return JSON.parse(raw) as Project[];
}

export async function getResume(): Promise<Resume> {
  const raw = await fs.readFile(path.join(contentDir, "resume.json"), "utf-8");
  return JSON.parse(raw) as Resume;
}
