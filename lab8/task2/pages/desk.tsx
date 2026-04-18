import { GetServerSideProps } from "next";
import { Member, Notice } from "@/types";
import { currentMember, getNotices, getMetrics } from "@/lib/source";

interface OfficeProps {
  member: Member;
  notices: Notice[];
  hits: number;
  unique: number;
  exitRate: string;
  snapshot: string;
}

export default function Office({ member, notices, hits, unique, exitRate, snapshot }: OfficeProps) {
  const fresh = notices.filter(n => !n.viewed).length;

  return (
    <div style={{
      maxWidth: 960,
      margin: "0 auto",
      padding: "40px 24px",
      fontFamily: "'Segoe UI', sans-serif",
      background: "#0d1117",
      minHeight: "100vh",
      color: "#c9d1d9"
    }}>
      <header style={{ marginBottom: 40 }}>
        <h1 style={{ color: "#f0883e", fontSize: 36, margin: 0 }}>Office</h1>
        <p style={{ color: "#8b949e", margin: "8px 0 0 0" }}>
          {member.alias} &bull; {member.clearance}
        </p>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
        marginBottom: 40
      }}>
        {[
          { label: "Page Hits", val: hits },
          { label: "Uniques", val: unique },
          { label: "Exit Rate", val: `${exitRate}%` },
        ].map(item => (
          <div key={item.label} style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: 12,
            padding: 24,
            textAlign: "center"
          }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#f0883e" }}>{item.val}</div>
            <div style={{ color: "#8b949e", fontSize: 14, marginTop: 4 }}>{item.label}</div>
          </div>
        ))}
      </section>

      <section style={{
        background: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 12,
        padding: 24
      }}>
        <h2 style={{ color: "#f0883e", marginTop: 0 }}>Notices ({fresh} unread)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {notices.map(n => (
            <div key={n.nid} style={{
              padding: 14,
              borderRadius: 8,
              background: n.viewed ? "transparent" : "rgba(240,136,62,0.1)",
              borderLeft: `4px solid ${
                n.level === "done" ? "#3fb950" : n.level === "warn" ? "#d29922" : "#58a6ff"
              }`
            }}>
              <strong style={{ color: "#c9d1d9" }}>{n.level}</strong>
              <span style={{ color: "#8b949e", marginLeft: 8 }}>{n.msg}</span>
              <span style={{ color: "#484f58", fontSize: 12, marginLeft: 12 }}>{n.time}</span>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 40, color: "#484f58", fontSize: 13 }}>
        Snapshot: {snapshot}
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const member = currentMember();
  const notices = await getNotices(member.uid);
  const metrics = await getMetrics(member.uid);

  return {
    props: {
      member,
      notices,
      hits: metrics.hits,
      unique: metrics.unique,
      exitRate: metrics.exitRate,
      snapshot: new Date().toISOString(),
    },
  };
};