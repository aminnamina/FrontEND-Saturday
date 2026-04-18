import { Member, Notice } from "@/types";

export function currentMember(): Member {
  return {
    uid: "m-101",
    alias: "Demo Person",
    mail: "demo@site.com",
    avatar: "/avatars/default.jpg",
    clearance: "user",
  };
}

export async function getNotices(uid: string): Promise<Notice[]> {
  await new Promise(r => setTimeout(r, 80));
  return [
    { nid: "a", level: "info", msg: "System check complete", viewed: false, time: "2026-04-20" },
    { nid: "b", level: "done", msg: "Backup finished", viewed: true, time: "2026-04-19" },
  ];
}

export async function getMetrics(uid: string) {
  await new Promise(r => setTimeout(r, 80));
  return {
    hits: Math.floor(Math.random() * 8000),
    unique: Math.floor(Math.random() * 2000),
    exitRate: (Math.random() * 40 + 10).toFixed(1),
  };
}