import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '2',
    title: 'Void Identity System',
    slug: 'void-identity',
    category: ProjectCategory.BRANDING,
    client: 'Music Festival',
    year: '2024',
    coverImage: 'https://picsum.photos/seed/void/800/800',
    summary: 'Immersive brand identity for an underground electronic music festival.',
    tags: ['Identity', 'Motion', 'Print'],
    blocks: [
      {
        type: 'text',
        content: 'We utilized kinetic typography to represent the chaotic energy of the festival. The logo is dynamic, changing based on the BPM of the music.'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/poster/1200/800',
        alt: 'Festival Posters'
      },
      {
        type: 'gallery',
        galleryImages: [
          'https://picsum.photos/seed/ticket/600/600',
          'https://picsum.photos/seed/wristband/600/600'
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Hyper Kinetic',
    slug: 'hyper-kinetic',
    category: ProjectCategory.GRAPHIC,
    client: 'Self-Initiated',
    year: '2022',
    coverImage: 'https://picsum.photos/seed/kinetic/600/800',
    summary: 'Exploration of type distortion and WebGL fluid simulations.',
    tags: ['WebGL', 'Typography', 'Experimental'],
    blocks: [
      {
        type: 'image',
        src: 'https://picsum.photos/seed/type3d/1200/600',
        alt: '3D Type Render'
      }
    ]
  },
  {
    id: '1',
    title: 'Neon Growth Engine',
    slug: 'neon-growth',
    category: ProjectCategory.OPERATION,
    client: 'FinTech Startup',
    year: '2023',
    coverImage: 'https://picsum.photos/seed/neon/800/600',
    summary: 'A complete overhaul of the user acquisition funnel combining acid aesthetics with rigorous A/B testing.',
    tags: ['CRO', 'UI/UX', 'Growth Hacking'],
    blocks: [
      {
        type: 'text',
        content: 'The challenge was to reduce the bounce rate on the landing page while establishing a distinct brand voice. We moved away from corporate blues to a high-contrast acid palette.'
      },
      {
        type: 'stats',
        statsData: [
          { label: 'Conversion Rate', value: '4.5%', trend: 'up', percentage: '+120%' },
          { label: 'CAC Reduction', value: '$12', trend: 'down', percentage: '-35%' },
          { label: 'Retention (D30)', value: '60%', trend: 'up', percentage: '+15%' },
        ],
        chartData: [
          { name: 'Jan', before: 200, after: 350 },
          { name: 'Feb', before: 210, after: 420 },
          { name: 'Mar', before: 230, after: 550 },
          { name: 'Apr', before: 250, after: 680 },
          { name: 'May', before: 280, after: 890 },
        ]
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/dashboard/1200/800',
        alt: 'Dashboard UI Design'
      }
    ]
  },
  {
    id: '3',
    title: 'Data Stream Viz',
    slug: 'data-stream',
    category: ProjectCategory.DATAVIZ,
    client: 'EcoAnalytics',
    year: '2023',
    coverImage: 'https://picsum.photos/seed/data/800/600',
    summary: 'Real-time dashboard visualizing carbon output for smart cities.',
    tags: ['D3.js', 'Dashboard', 'Big Data'],
    blocks: [
      {
        type: 'text',
        content: 'Turning complex datasets into actionable insights. The dashboard is designed to be displayed on large control room screens.'
      },
       {
        type: 'stats',
        statsData: [
          { label: 'Data Points', value: '1.2M', trend: 'neutral', percentage: 'Daily' },
          { label: 'Processing Speed', value: '20ms', trend: 'up', percentage: 'Real-time' },
        ],
        chartData: [
            { name: 'Q1', before: 40, after: 80 },
            { name: 'Q2', before: 30, after: 95 },
            { name: 'Q3', before: 50, after: 90 },
            { name: 'Q4', before: 60, after: 110 },
        ]
      }
    ]
  }
];

export const SKILLS = [
  { name: 'Visual Design', level: 90 },
  { name: 'Data Analysis', level: 85 },
  { name: 'Frontend Dev', level: 70 },
  { name: 'Brand Strategy', level: 80 },
  { name: 'A/B Testing', level: 95 },
];