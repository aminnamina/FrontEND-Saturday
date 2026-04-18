import { GetServerSideProps } from "next";

interface LiveProps {
  now: string;
}

export default function AboutLive({ now }: LiveProps) {
  return (
    <main style={{
      maxWidth: 700,
      margin: "80px auto",
      textAlign: "center",
      fontFamily: "sans-serif",
      color: "#495057"
    }}>
      <h1 style={{ color: "#f0883e" }}>About (Live)</h1>
      <p>Fresh every request.</p>
      <p style={{ color: "#adb5bd", marginTop: 20 }}>{now}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      now: new Date().toISOString(),
    },
  };
};