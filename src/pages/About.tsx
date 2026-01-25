import { motion } from 'framer-motion';
import Section from '../components/Section';
import profilePhoto from '../assets/2973A697-BA36-4DB0-83C6-ACB3539E4A92.jpeg';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Angular'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Oracle SQL'] },
  { category: 'Blockchain', items: ['Solidity', 'Rust','Hardhat', 'ethers.js', 'Alchemy'] },
  { category: 'AI/ML', items: ['Bedrock', 'RAG Architecture', 'Prompt Engineering', 'Claude'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Azure DevOps'] },
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
              Full-stack developer with 3+ years of experience in digital solutions consulting,
              delivering end-to-end projects across a variety of tech stacks.
            </p>
          </div>
        </motion.div>

        {/* Photo placeholder and bio */}
        <Section className="!py-0 mb-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="James Worth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 prose prose-lg dark:prose-invert">
              <p>
                I work in digital solutions consulting, where I'm responsible for developing
                and shipping applications from concept through to production. I own the complete
                development lifecycle—from initial architecture to deployment and beyond.
              </p>
              <p>
                My approach emphasizes modern AI-assisted development workflows, allowing me
                to move faster without sacrificing code quality. I'm particularly passionate
                about blockchain technology and its potential to reshape how we build applications.
              </p>
              <p>
                Outside of client work, I explore emerging technologies through personal projects
                in mobile development and Web3, constantly expanding my technical toolkit.
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
