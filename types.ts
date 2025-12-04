export enum ProjectCategory {
  BRANDING = 'Branding',
  GRAPHIC = 'Graphic',
  OPERATION = 'Operation',
  DATAVIZ = 'Data Viz'
}

export interface StatItem {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  percentage: string;
}

export interface ChartData {
  name: string;
  before: number;
  after: number;
}

export interface ProjectBlock {
  type: 'text' | 'image' | 'stats' | 'video' | 'gallery';
  content?: string;
  src?: string;
  alt?: string;
  statsData?: StatItem[];
  chartData?: ChartData[];
  galleryImages?: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  client: string;
  year: string;
  coverImage: string;
  summary: string;
  tags: string[];
  blocks: ProjectBlock[];
}
