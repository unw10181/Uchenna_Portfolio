export type Project = {
  title: string;
  subtitle: string;
  stack: string[];
  live: string;
  fe: string;
  be?: string;
  image: string;
  accent: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
  rank: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};
