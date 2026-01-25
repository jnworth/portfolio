import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';
import TokenDashboard from '../components/TokenDashboard';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project not found
          </h1>
          <Link to="/projects" className="text-primary-600 dark:text-primary-400 hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>

          {/* Header */}
          <div className="mb-8">
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
              project.category === 'blockchain' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
              project.category === 'mobile' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
              project.category === 'ai' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
              'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
            }`}>
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>

          {/* Live Dashboard for defi-swap project */}
          {project.id === 'defi-swap' ? (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Live Token Feed</h2>
              </div>
              <TokenDashboard />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl mb-12 flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-600">Project screenshot</span>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2>Overview</h2>
            <p>{project.longDescription}</p>

            <h2>Technologies Used</h2>
            <div className="flex flex-wrap gap-2 not-prose">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.id === 'defi-swap' ? (
              <>
                <h2>Security Checks</h2>
                <ul>
                  <li><strong>Liquidity Verification</strong> - Ensures minimum ETH liquidity in the pair</li>
                  <li><strong>Honeypot Detection</strong> - Simulates buy and sell to detect if selling is blocked</li>
                  <li><strong>Tax Analysis</strong> - Calculates buy/sell taxes via on-chain simulation</li>
                  <li><strong>LP Burn Check</strong> - Verifies if liquidity provider tokens are burned</li>
                  <li><strong>Owner Analysis</strong> - Checks token holdings of contract owner/deployer</li>
                </ul>

                <h2>Technical Highlights</h2>
                <p>
                  All security checks run on-chain in parallel using Promise.all(), completing in under 300ms.
                  No external API dependencies means the bot can analyze tokens the moment they're created,
                  before third-party services have indexed them. The live dashboard above updates automatically
                  via a GitHub Gist integration.
                </p>
              </>
            ) : (
              <>
                <h2>Key Features</h2>
                <ul>
                  <li>Feature placeholder - describe a key feature of the project</li>
                  <li>Feature placeholder - describe another key feature</li>
                  <li>Feature placeholder - describe technical challenges solved</li>
                </ul>

                <h2>Technical Highlights</h2>
                <p>
                  Add details about the technical implementation, architecture decisions,
                  performance optimizations, or unique solutions you developed.
                </p>
              </>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
