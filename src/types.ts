export interface EducationItem {
  id: string;
  period: string;
  statusTag: string;
  statusTagType: 'primary' | 'secondary';
  school: string;
  degree: string;
  major: string;
  rankInfo?: string;
  gpa?: string;
  weightedScore?: string;
  description: string;
  courses?: { name: string; score: number }[];
  isDark?: boolean;
}

export interface InternshipItem {
  id: string;
  company: string;
  role: string;
  period: string;
  capabilities: string[];
  points: {
    title: string;
    description: string;
    metricHighlight?: string;
  }[];
}

export interface VibeWorkItem {
  id: string;
  tag: string;
  title: string;
  summary: string;
  details: string[];
  metrics: { value: string; label: string }[];
  link: string;
  imagePlaceholderText: string;
  status: 'online' | 'internal' | 'eval';
}

export interface AIVideoItem {
  id: string;
  tag: string;
  title: string;
  category: string;
  duration: string;
  summary: string;
  highlights?: string[];
  link: string;
  coverImage?: string;
  placeholderText: string;
  embedVideoUrl?: string;
}

export interface AIToolChoice {
  category: string;
  tool: string;
  reason: string;
}

export interface ProjectItem {
  number: string;
  name: string;
  role: string;
  period: string;
  description: string;
  points: string[];
  metricsBadge: string;
  link?: string;
}

export interface GachaCard {
  id: string;
  name: string;
  type: 'skill' | 'hobby';
  level?: string;
  description: string;
  iconName: string;
  categoryTag?: string;
}
