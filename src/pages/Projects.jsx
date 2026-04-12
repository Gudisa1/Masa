import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardContent } from '../components/ui/Card';

const projects = [
  {
    title: "Fintech Dashboard App",
    category: "Web & Mobile App",
    description: "A comprehensive financial dashboard allowing users to track investments, analyze trends, and manage portfolios in real-time.",
    tech: ["React", "Node.js", "Tailwind CSS", "WebSockets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Healthcare Record System",
    category: "Enterprise Software",
    description: "Secure, HIPAA-compliant electronic health records system featuring AI-driven patient analytics and appointment scheduling.",
    tech: ["Python", "Django", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "E-Commerce Mobile App",
    category: "Mobile App Development",
    description: "Native iOS and Android application with AR product preview, seamless checkout, and real-time inventory tracking.",
    tech: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Smart Supply Chain Hub",
    category: "Cloud & IoT",
    description: "Cloud-based logistics platform integrating with IoT devices for real-time fleet tracking and automated warehousing.",
    tech: ["AWS", "Vue.js", "Node.js", "Docker"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Projects() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Work" subtitle="Featured Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card hover className="h-full flex flex-col group overflow-hidden border-none shadow-lg dark:shadow-none dark:border dark:border-dark-border">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="flex-1 p-8 flex flex-col">
                  <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wider">{project.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 break-words">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium border border-gray-200 dark:border-dark-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 text-primary-600 dark:text-primary-400 pt-4 border-t border-gray-100 dark:border-dark-border mt-auto">
                    <button className="flex items-center gap-2 hover:text-primary-800 transition-colors font-semibold">
                      <ExternalLink className="w-5 h-5"/> Live Demo
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary-800 transition-colors font-semibold">
                      <Globe className="w-5 h-5"/> Case Study
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
