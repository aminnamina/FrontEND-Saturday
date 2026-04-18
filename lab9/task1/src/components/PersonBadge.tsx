import { memo } from "react";

interface Account {
  id: number;
  nick: string;
  mail: string;
}

interface Props {
  account: Account;
}

// memo = рисует заново только если пропсы изменились
export const PersonBadge = memo(function PersonBadge({ account }: Props) {
  console.log("PersonBadge render");
  return (
    <div style={{ background: "#1e293b", padding: 16, borderRadius: 12 }}>
      <h3 style={{ margin: 0, color: "#e879f9" }}>{account.nick}</h3>
      <p style={{ margin: "8px 0 0", color: "#94a3b8" }}>{account.mail}</p>
    </div>
  );
});