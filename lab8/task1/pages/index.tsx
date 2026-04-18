import { GetStaticProps } from "next";
import Link from "next/link";
import { Story } from "@/types";
import { loadArchive } from "@/lib/core";

interface FeedProps {
  stories: Story[];
}

export default function Feed({ stories }: FeedProps) {
  return (
    <main style={{
      maxWidth: 720,
      margin: "48px auto",
      padding: "0 24px",
      fontFamily: "system-ui, sans-serif",
      background: "#f6f7f9",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: 42, color: "#2d6a4f", marginBottom: 8 }}>Dev Journal</h1>
      <p style={{ color: "#6c757d", marginBottom: 32 }}>Fresh stories every minute</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {stories.map(story => (
          <article key={story.slug} style={{
            background: "#fff",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
          }}>
            <Link href={`/read/${story.slug}`} style={{ textDecoration: "none", color: "#1b4332" }}>
              <h2 style={{ margin: "0 0 8px 0", fontSize: 24 }}>{story.headline}</h2>
            </Link>
            <p style={{ margin: 0, color: "#6c757d", fontSize: 14 }}>
              {story.duration} min &bull; {story.released}
            </p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              {story.topics.map(tag => (
                <span key={tag} style={{
                  background: "#d8f3dc",
                  color: "#2d6a4f",
                  padding: "4px 10px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const stories = await loadArchive();
  return {
    props: { stories },
    revalidate: 60,
  };
};