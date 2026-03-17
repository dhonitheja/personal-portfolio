'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Zap, 
  Shield, 
  Code2, 
  Terminal,
  ChevronRight,
  TrendingUp,
  Brain,
  Briefcase,
  Calendar
} from 'lucide-react';

const experience = [
  {
    role: "Full Stack AI Engineer",
    company: "Freelance / Open Source",
    period: "2024 - Present",
    description: "Architecting autonomous AI agents and premium FinTech platforms. Specialized in high-performance Java/Python backends and Next.js frontends.",
    highlights: ["Built Wealthix AI", "Developed Agentic Audit Engines", "Scaled AI Directories"]
  },
  {
    role: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2023 - 2024",
    description: "Focused on building responsive web applications and integrating secure payment gateways like Stripe and Plaid.",
    highlights: ["Payment Integration", "UX/UI Optimization", "API Microservices"]
  }
];

const projects = [
  {
    title: "Wealthix: AI Financial Intelligence",
    description: "A high-performance financial intelligence platform merging traditional banking with Google Gemini 1.5. Synthesizes real-time footprints into actionable wealth insights.",
    image: "/media/wealthix_demo.webp",
    tags: ["Next.js 14", "Java 23", "FastAPI", "Gemini 1.5", "Plaid"],
    link: "https://github.com/dhonitheja/AI-Powered-Financial-Intelligence-Platform",
    externalLink: "#",
    category: "Full Stack / AI",
    features: [
      "Gemini 1.5 Assistant (Jass)",
      "Automated EMI Hub",
      "Real-time Plaid Sync",
      "Risk Scoring Engine"
    ]
  },
  {
    title: "AI Directory Pro",
    description: "A premium directory showcasing 300+ vetted AI tools. Built for speed and discoverability, helping users find the right AI solution for any workflow.",
    image: "/projects/ai_directory.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "React"],
    link: "https://github.com/dhonitheja/ai-directory-pro",
    externalLink: "https://ai-directory-pro-frontend.vercel.app/",
    category: "Web Application / Directory",
    features: [
      "300+ Hand-picked Tools",
      "Dynamic Filtering System",
      "Premium UX/UI Design",
      "Fast Content Discovery"
    ]
  },
  {
    title: "AI Financial Co-Pilot: Dispute Engine",
    description: "An agentic audit engine using Claude 3.5 Sonnet to detect 'Credit Chaos' and automate fee reversals. Leverages the RBI Account Aggregator framework for forensic transaction auditing.",
    image: "/projects/dispute_engine.png",
    tags: ["Claude 3.5", "Vertex AI", "Next.js 16", "Antigravity"],
    link: "https://github.com/dhonitheja/AI-Financial-Co-Pilot-Automated-Dispute-Engine",
    externalLink: "#",
    category: "Agentic AI / Fintech",
    features: [
      "Forensic Transaction Auditing",
      "One-tap Automated Disputes",
      "Spending Velocity Guardrails",
      "5yr Historical MoM Engine"
    ]
  }
];

const techStack = {
  "Frontend": ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Java 23", "Spring Boot", "FastAPI", "Python", "Node.js"],
  "AI & Data": ["Google Gemini 1.5", "PostgreSQL", "Plaid API", "Stripe"],
  "DevOps": ["Docker", "Git/GitHub", "Vercel", "RESTful APIs"]
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-glow" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-x-0 border-t-0 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold text-gradient">Portfolio.</span>
          <div className="flex gap-8 text-sm font-medium text-slate-300">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-indigo-400 mb-6 inline-block">
              Full Stack Engineer & AI Specialist
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Building the future of <br />
              <span className="text-gradient">Intelligent Systems.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Crafting premium digital experiences where elegant design meets technical excellence. Specialized in high-performance Full Stack applications and AI integrations.
            </p>
            <div className="flex gap-4">
              <a href="#work" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 glass glass-hover rounded-xl font-semibold transition-all">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Screenshot / Wealthix Spotlight */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
              <p className="text-slate-400 text-lg">Spotlighting my latest innovations.</p>
            </div>
          </div>

          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center p-8 rounded-3xl glass glass-hover">
                <div className="space-y-6">
                  <span className="text-sm font-bold uppercase tracking-widest text-indigo-400">
                    {project.category}
                  </span>
                  <h3 className="text-4xl font-bold">{project.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300">
                        <Zap size={16} className="text-indigo-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-slate-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6">
                    <a href={project.link} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 rounded-xl font-medium transition-all hover:bg-indigo-600">
                      View Code <Github size={18} />
                    </a>
                    {project.externalLink && project.externalLink !== '#' && (
                      <a href={project.externalLink} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20">
                        Live Demo <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform group-hover:scale-[1.02]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="flex gap-4">
                      {/* Additional mini screenshots or icons */}
                      <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                        <Brain className="text-white" size={24} />
                      </div>
                      <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                        <TrendingUp className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Engineering with <span className="text-gradient">Purpose.</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                I'm a Full Stack Engineer passionate about the intersection of human-centric design and autonomous intelligence. My work focuses on building tools that empower users through data synthesis and agentic workflows.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Whether it's auditing complex financial transactions or building high-speed directory platforms, I strive for technical excellence and premium user experiences in every line of code.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-indigo-400 mb-2">15+</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Projects Completed</span>
              </div>
              <div className="p-6 rounded-2xl glass flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-purple-400 mb-2">3+</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">AI Stacks</span>
              </div>
              <div className="p-6 rounded-2xl glass flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-pink-400 mb-2">99%</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Client Satisfaction</span>
              </div>
              <div className="p-6 rounded-2xl glass flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-green-400 mb-2">24/7</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Agile Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Professional Journey</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl glass glass-hover relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                        <Briefcase className="text-indigo-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{exp.role}</h4>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 max-w-2xl text-lg">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.highlights.map((h, i) => (
                        <span key={i} className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                          <Zap size={14} className="text-indigo-400" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start md:items-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                      <Calendar size={18} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Technical Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([title, skills], idx) => (
              <div key={idx} className="p-8 rounded-2xl glass text-left h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                  {idx === 0 && <Globe className="text-indigo-400" />}
                  {idx === 1 && <Terminal className="text-indigo-400" />}
                  {idx === 2 && <Cpu className="text-indigo-400" />}
                  {idx === 3 && <Zap className="text-indigo-400" />}
                </div>
                <h4 className="text-xl font-bold mb-4">{title}</h4>
                <div className="space-y-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-400">
                      <ChevronRight size={14} className="text-indigo-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-indigo-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">Premium</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Quality Standard</div>
              </div>
              <div className="h-px md:h-16 w-16 md:w-px bg-white/20" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">AI-First</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Architectures</div>
              </div>
              <div className="h-px md:h-16 w-16 md:w-px bg-white/20" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">Modern</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">React Stacks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to collaborate?</h2>
          <p className="text-xl text-slate-400 mb-12">I'm currently looking for new opportunities and interesting projects.</p>
          <a href="mailto:dhonitheja007@gmail.com" className="text-3xl md:text-5xl font-bold text-gradient hover:opacity-80 transition-opacity underline decoration-indigo-500 underline-offset-8">
            dhonitheja007@gmail.com
          </a>
          
          <div className="flex justify-center gap-8 mt-20">
            <a href="https://github.com/dhonitheja" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            {/* Add LinkedIn, Twitter etc */}
          </div>
          <p className="mt-12 text-slate-500 text-sm">
            © 2026 Developed by Antigravity AI Agent. Built with Next.js & Passion.
          </p>
        </div>
      </footer>
    </main>
  );
}
