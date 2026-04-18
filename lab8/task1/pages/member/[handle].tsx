import { GetServerSideProps } from "next";
import { Editor } from "@/types";
import { loadEditor } from "@/lib/core";

interface MemberProps {
  person: Editor;
  renderedAt: string;
}

export default function Member({ person, renderedAt }: MemberProps) {
  return (
    <main style={{
      maxWidth: 600,
      margin: "60px auto",
      padding: 40,
      background: "#fff",
      borderRadius: 20,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      fontFamily: "system-ui, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#1b4332" }}>{person.name}</h1>
      <p style={{ color: "#6c757d" }}>{person.bio}</p>
      <p style={{ color: "#adb5bd", fontSize: 12, marginTop: 32 }}>Rendered: {renderedAt}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const person = await loadEditor(params?.handle as string);
  if (!person) return { notFound: true };
  return {
    props: {
      person,
      renderedAt: new Date().toISOString(),
    },
  };
};