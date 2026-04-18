import { Story, Editor } from "@/types";

const crew: Editor[] = [
  { handle: "ed1", name: "Mike Build", bio: "Fullstack dev", pic: "/crew/mike.jpg" },
  { handle: "ed2", name: "Lisa Deploy", bio: "DevOps guru", pic: "/crew/lisa.jpg" },
];

const archive: Story[] = [
  {
    slug: "alpha",
    headline: "Intro to Next",
    text: "Next.js gives you the best developer experience...",
    editorCode: "ed1",
    released: "2026-05-01",
    topics: ["framework", "ssr"],
    duration: 4,
  },
  {
    slug: "beta",
    headline: "Static vs Dynamic",
    text: "When to choose SSG over SSR...",
    editorCode: "ed2",
    released: "2026-05-05",
    topics: ["architecture", "rendering"],
    duration: 7,
  },
];

export async function loadArchive(): Promise<Story[]> {
  return archive;
}

export async function loadStory(slug: string): Promise<Story | undefined> {
  return archive.find(s => s.slug === slug);
}

export async function loadEditor(handle: string): Promise<Editor | undefined> {
  return crew.find(e => e.handle === handle);
}