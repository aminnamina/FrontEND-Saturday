export interface Member {
  uid: string;
  alias: string;
  mail: string;
  avatar: string;
  clearance: "admin" | "user";
}

export interface Notice {
  nid: string;
  level: "info" | "warn" | "done";
  msg: string;
  viewed: boolean;
  time: string;
}