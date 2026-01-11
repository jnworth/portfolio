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
    title: 'DeFi Token Swap',
    description: 'Decentralized exchange for ERC-20 token swaps with liquidity pools.',
    longDescription: `A fully functional decentralized exchange built on Ethereum. Features include automated market making (AMM),
    liquidity provision with LP tokens, and gas-optimized smart contracts. The frontend provides real-time price quotes
    and seamless wallet integration.`,
    category: 'blockchain',
    technologies: ['Solidity', 'Hardhat', 'React', 'ethers.js', 'The Graph'],
    imageUrl: '/placeholder-blockchain.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'fitness-tracker',
    title: 'FitSync Mobile',
    description: 'Cross-platform fitness tracking app with AI-powered workout recommendations.',
    longDescription: `A React Native fitness application that syncs with wearable devices to track workouts,
    nutrition, and sleep patterns. Features an AI coach that provides personalized workout plans based on
    user goals and historical performance data.`,
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'TensorFlow Lite'],
    imageUrl: '/placeholder-mobile.jpg',
    githubUrl: 'https://github.com',
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
