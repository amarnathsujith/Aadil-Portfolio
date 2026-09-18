import { Project, BlogPost, SkillItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'instagram-reel-work-1',
    title: 'Featured Reel Showcase',
    subtitle: 'Short-form visual & motion experience',
    category: 'ui/ux',
    tags: ['Motion Design', 'Instagram Reel', 'Video Content', 'Visual Design'],
    description: 'An engaging short-form video creation featuring dynamic motion graphics, rhythmic pacing, and modern aesthetic presentation.',
    client: 'Instagram Reel Project',
    year: '2026',
    thumbnailType: 'instagram-reel',
    coverImage: '/reel-thumbnail-1.jpg',
    link: 'https://www.instagram.com/reel/DYryHAYOAyV/?stkn=MXZydjg4Mnk3dnJqZw%3D%3D&wa_logging_event=video_play_open',
    metrics: [
      { label: 'Platform', value: 'Instagram' },
      { label: 'Format', value: '9:16 Video' },
      { label: 'Engagement', value: 'High' }
    ],
    caseStudy: {
      overview: 'A visual motion design project produced for social media storytelling and digital branding.',
      challenge: 'Capturing viewer attention within the first 3 seconds while maintaining a clean, high-impact aesthetic aligned with modern portfolio standards.',
      designApproach: [
        'Curated color grading and sharp vertical composition designed for mobile viewports.',
        'Seamless transitions matched to audio rhythm and visual cues.',
        'Custom overlay branding and clean typography for viewer retention.'
      ],
      codeHighlights: [
        'Integrated directly into portfolio with video preview playback overlay.',
        'Direct call-to-action linking seamlessly to original Instagram Reel content.',
        'Optimized responsive thumbnail image rendering.'
      ],
      techStack: ['Instagram Video', 'Motion Graphics', 'Video Editing', 'React'],
      designTools: ['Premiere Pro', 'After Effects', 'Figma']
    }
  },
  {
    id: 'instagram-reel-work-2',
    title: 'Creative Reel Edition',
    subtitle: 'Cinematic reel & motion storytelling',
    category: 'ui/ux',
    tags: ['Reel', 'Creative Direction', 'Motion', 'Instagram Content'],
    description: 'A second featured creative reel highlighting cinematic cuts, high-energy rhythm, and visual aesthetic storytelling.',
    client: 'Instagram Reel Project',
    year: '2026',
    thumbnailType: 'instagram-reel',
    coverImage: '/reel-thumbnail-2.jpg',
    link: 'https://www.instagram.com/reel/Dc6e7tEOr19/?stkn=b2x3cnRndzd5ZGdo',
    metrics: [
      { label: 'Platform', value: 'Instagram' },
      { label: 'Type', value: 'Creative Reel' },
      { label: 'Reach', value: 'Trending' }
    ],
    caseStudy: {
      overview: 'A creative reel showcase focusing on cinematic visuals, brand aesthetics, and engaging pacing.',
      challenge: 'Delivering an immersive visual experience with crisp editing and dynamic audio-visual synchronization.',
      designApproach: [
        'Cinematic framing optimized for high-density mobile displays.',
        'Custom color grading highlights giving a distinct visual identity.',
        'Rhythmic beat-matched cuts for maximum viewer retention.'
      ],
      codeHighlights: [
        'Embedded thumbnail card with custom play interaction.',
        'Direct link button connecting viewers directly to Instagram.',
        'Seamless integration with portfolio filtering system.'
      ],
      techStack: ['Instagram Reel', 'Video Editing', 'Motion Graphics', 'UI Design'],
      designTools: ['After Effects', 'Premiere Pro', 'Lightroom']
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why every frontend developer should master visual hierarchy',
    excerpt: 'Understanding typography scales, negative space, and optical alignment makes your code look ten times more professional without redesigning the architecture.',
    date: 'Aug 24, 2025',
    readTime: '4 min read',
    category: 'Design & Code',
    likes: 428
  },
  {
    id: '2',
    title: 'The secret to silky 60fps web animations with CSS and Motion',
    excerpt: 'Why transform and opacity are your best friends, how the browser compositor works, and avoiding layout thrashing in modern SPAs.',
    date: 'Jun 12, 2025',
    readTime: '6 min read',
    category: 'Frontend Engineering',
    likes: 612
  },
  {
    id: '3',
    title: 'Building a lean design system with Tailwind CSS and tokens',
    excerpt: 'How to structure semantic design tokens that bridge the gap between Figma variables and production Tailwind utility classes.',
    date: 'Apr 05, 2025',
    readTime: '5 min read',
    category: 'Design Systems',
    likes: 389
  }
];

export const DESIGN_SKILLS: SkillItem[] = [
  { name: 'UI / UX Design', level: 95, category: 'design' },
  { name: 'Design Systems & Tokens', level: 92, category: 'design' },
  { name: 'Wireframing & Prototyping', level: 90, category: 'design' },
  { name: 'Typography & Layout', level: 94, category: 'design' },
  { name: 'User Research & Testing', level: 85, category: 'design' }
];

export const CODE_SKILLS: SkillItem[] = [
  { name: 'HTML5 / Semantic Web', level: 98, category: 'code' },
  { name: 'Modern CSS & Tailwind', level: 96, category: 'code' },
  { name: 'JavaScript & TypeScript', level: 92, category: 'code' },
  { name: 'React 19 & Next.js', level: 94, category: 'code' },
  { name: 'Performance & 60fps Animation', level: 88, category: 'code' }
];
