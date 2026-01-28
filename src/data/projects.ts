import tokenDashboardImg from '../assets/token-dashboard.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'blockchain' | 'mobile' | 'ai' | 'web';
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'defi-swap',
    title: 'DeFi Token Sniper',
    description: 'Real-time bot that monitors Uniswap V2 for new token pairs and runs on-chain security checks to detect honeypots, high taxes, and rug pulls.',
    longDescription: `A cryptocurrency sniping bot that monitors Ethereum mainnet for new Uniswap V2 trading pairs in real-time.
    When a new WETH pair is created, the bot runs parallel on-chain security checks including liquidity verification,
    LP burn status, owner/deployer token holdings, and buy/sell tax simulation to detect honeypots. All checks complete
    in under 300ms with no external API dependencies.`,
    category: 'blockchain',
    technologies: ['Node.js', 'ethers.js', 'WebSocket', 'Uniswap V2', 'TypeScript'],
    imageUrl: tokenDashboardImg,
    githubUrl: 'https://github.com/jnworth/sniperbot',
    featured: true,
  },
  {
    id: 'stache',
    title: 'Stache Bookmarking App',
    description: 'iOS app with Share Extension that lets users save and organize URLs from social media into collections called "Staches."',
    longDescription: `A Flutter mobile app with a native iOS Share Extension for saving and organizing URLs from social media platforms.
    Share content directly from Instagram, TikTok, YouTube, Pinterest, or any website into custom collections called "Staches."
    Features automatic metadata extraction using official oEmbed APIs and Apple's LPLinkMetadata for rich link previews.
    Uses App Group for seamless data sharing between the main app and Share Extension with Stream-based reactive state management.`,
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'Swift', 'iOS Share Extension', 'App Groups'],
    imageUrl: '/placeholder-mobile.jpg',
    featured: true,
  },
  {
    id: 'code-assistant',
    title: 'AI Code Review Assistant',
    description: 'LLM-powered code review tool that integrates with GitHub PRs.',
    longDescription: `An AI-powered development tool that automatically reviews pull requests, suggesting improvements
    for code quality, security vulnerabilities, and performance optimizations. Built with a custom fine-tuned model
    and integrates seamlessly into existing CI/CD pipelines.`,
    category: 'ai',
    technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'GitHub API'],
    imageUrl: '/placeholder-ai.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'iwr-library',
    title: 'IWR Project Assistance Library',
    description: 'Document management system for U.S. Army Corps of Engineers water resources projects with secure file storage and metadata cataloging.',
    longDescription: `A full-stack web application built for the U.S. Army Corps of Engineers to manage and distribute
    project assistance documents for integrated water resources initiatives. Features secure document upload and retrieval
    via AWS S3, comprehensive metadata cataloging with Oracle Database, and role-based access control for internal users.
    Hosted on AWS GovCloud (EC2) to meet federal security requirements. Serving as primary developer responsible for
    new feature development and ongoing maintenance.`,
    category: 'web',
    technologies: ['Angular', 'Node.js', 'AWS S3', 'Oracle Database', 'AWS GovCloud'],
    imageUrl: '/placeholder-web.jpg',
    liveUrl: 'https://publibrary.sec.usace.army.mil/',
    featured: true,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter((project) => project.category === category);
};
