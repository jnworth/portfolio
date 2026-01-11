import { motion } from 'framer-motion';
import Section from '../components/Section';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React Native'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { category: 'Blockchain', items: ['Solidity', 'Hardhat', 'ethers.js', 'The Graph', 'IPFS'] },
  { category: 'AI/ML', items: ['LangChain', 'OpenAI API', 'TensorFlow', 'RAG', 'Prompt Engineering'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Terraform'] },
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I'm a senior full-stack developer with over 8 years of experience building
              scalable web applications, mobile apps, and blockchain solutions.
            </p>
          </div>
        </motion.div>

        {/* Photo placeholder and bio */}
        <Section className="!py-0 mb-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-600">Photo</span>
              </div>
            </div>

            <div className="md:col-span-2 prose prose-lg dark:prose-invert">
              <p>
                My journey in software development started with a curiosity about how things work.
                Today, I specialize in building full-stack applications that leverage cutting-edge
                technologies to solve real-world problems.
              </p>
              <p>
                I'm particularly passionate about the intersection of blockchain technology and
                traditional software development, as well as integrating AI capabilities to create
                more intelligent and user-friendly applications.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects,
                exploring new technologies, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section className="!py-0 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* AI Workflow */}
        <Section className="!py-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            My AI Development Workflow
          </h2>

          <div className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                I leverage AI tools throughout my development process to increase productivity
                and code quality. Here's how I integrate AI into my workflow:
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose mt-6">
                {[
                  {
                    title: 'Code Generation',
                    description: 'Using AI assistants for boilerplate, repetitive patterns, and exploring solutions',
                  },
                  {
                    title: 'Code Review',
                    description: 'AI-powered analysis for security vulnerabilities and optimization opportunities',
                  },
                  {
                    title: 'Documentation',
                    description: 'Generating and maintaining comprehensive documentation with AI assistance',
                  },
                  {
                    title: 'Testing',
                    description: 'AI-assisted test generation and edge case identification',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
