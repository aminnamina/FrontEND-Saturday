import { GetStaticPaths, GetStaticProps } from "next";
import { Story, Editor } from "@/types";
import { loadArchive, loadStory, loadEditor } from "@/lib/core";

interface ReadProps {
  story: Story;
  editor: Editor;
}

export default function Read({ story, editor }: ReadProps) {
  return (
    <article style={{
      maxWidth: 680,
      margin: "48px auto",
      padding: "0 24px",
      fontFamily: "system-ui, sans-serif",
      lineHeight: 1.6,
      color: "#212529"
    }}>
      <h1 style={{ fontSize: 36, color: "#1b4332", marginBottom: 12 }}>{story.headline}</h1>
      <p style={{ color: "#6c757d", marginBottom: 32 }}>
        Written by <strong>{editor.name}</strong> &bull; {story.duration} min read
      </p>
      <div style={{
        background: "#fff",
        padding: 32,
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }}>
        {story.text}
      </div>
      <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
        {story.topics.map(tag => (
          <span key={tag} style={{
            background: "#2d6a4f",
            color: "#fff",
            padding: "6px 14px",
            borderRadius: 20,
            fontSize: 13
          }}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = await loadArchive();
  return {
    paths: stories.map(s => ({ params: { slug: s.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const story = await loadStory(params?.slug as string);
  if (!story) return { notFound: true };
  const editor = await loadEditor(story.editorCode);
  return {
    props: { story, editor },
    revalidate: 60,
  };
};