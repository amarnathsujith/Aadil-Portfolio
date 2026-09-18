export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ui/ux' | 'code' | 'hybrid';
  tags: string[];
  description: string;
  client?: string;
  year: string;
  thumbnailType: 'scoreboard' | 'interior-feed' | 'map-search' | 'design-system' | 'instagram-reel';
  coverImage?: string;
  link?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    challenge: string;
    designApproach: string[];
    codeHighlights: string[];
    techStack: string[];
    designTools: string[];
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  likes: number;
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'design' | 'code';
  iconName?: string;
}
