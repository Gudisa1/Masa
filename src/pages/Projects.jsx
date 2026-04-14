// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Globe } from 'lucide-react';
// import { SectionHeading } from '../components/ui/SectionHeading';
// import { Card, CardContent } from '../components/ui/Card';

// const projects = [
//   {
//     title: "Fintech Dashboard App",
//     category: "Web & Mobile App",
//     description: "A comprehensive financial dashboard allowing users to track investments, analyze trends, and manage portfolios in real-time.",
//     tech: ["React", "Node.js", "Tailwind CSS", "WebSockets"],
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Healthcare Record System",
//     category: "Enterprise Software",
//     description: "Secure, HIPAA-compliant electronic health records system featuring AI-driven patient analytics and appointment scheduling.",
//     tech: ["Python", "Django", "PostgreSQL", "React"],
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "E-Commerce Mobile App",
//     category: "Mobile App Development",
//     description: "Native iOS and Android application with AR product preview, seamless checkout, and real-time inventory tracking.",
//     tech: ["React Native", "Firebase", "Redux"],
//     image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     title: "Smart Supply Chain Hub",
//     category: "Cloud & IoT",
//     description: "Cloud-based logistics platform integrating with IoT devices for real-time fleet tracking and automated warehousing.",
//     tech: ["AWS", "Vue.js", "Node.js", "Docker"],
//     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
//   }
// ];

// export default function Projects() {
//   return (
//     <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg">
//       <div className="container mx-auto px-4">
//         <SectionHeading title="Our Work" subtitle="Featured Projects" />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//           {projects.map((project, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//             >
//               <Card hover className="h-full flex flex-col group overflow-hidden border-none shadow-lg dark:shadow-none dark:border dark:border-dark-border">
//                 <div className="relative overflow-hidden aspect-video">
//                   <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
//                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
//                 </div>
//                 <CardContent className="flex-1 p-8 flex flex-col">
//                   <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wider">{project.category}</div>
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 break-words">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map(t => (
//                       <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium border border-gray-200 dark:border-dark-border">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex items-center gap-6 text-primary-600 dark:text-primary-400 pt-4 border-t border-gray-100 dark:border-dark-border mt-auto">
//                     <button className="flex items-center gap-2 hover:text-primary-800 transition-colors font-semibold">
//                       <ExternalLink className="w-5 h-5"/> Live Demo
//                     </button>
//                     <button className="flex items-center gap-2 hover:text-primary-800 transition-colors font-semibold">
//                       <Globe className="w-5 h-5"/> Case Study
//                     </button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Filter, BarChart3, Database, CheckCircle2, TrendingUp } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Field Data Collection System",
    category: "Data Collection",
    categories: ["all", "data"],
    description: "Mobile-first data collection platform enabling field agents to gather real-time agricultural and demographic data across 500+ rural locations with offline synchronization.",
    tech: ["React", "IndexedDB", "Node.js", "PostgreSQL", "AWS", "PWA"],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Training Tracker Platform",
    category: "Learning Management",
    categories: ["all", "enterprise"],
    description: "Comprehensive training management system with progress tracking, certification workflows, and automated compliance reporting for enterprise workforce development.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 3,
    title: "Fintech Analytics Dashboard",
    category: "Financial Technology",
    categories: ["all", "fintech"],
    description: "Real-time financial analytics platform with AI-powered insights, portfolio tracking, and predictive market analysis for institutional clients.",
    tech: ["React", "Node.js", "Kafka", "PostgreSQL", "Python", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 4,
    title: "Healthcare Patient Portal",
    category: "Healthcare",
    categories: ["all", "healthcare"],
    description: "HIPAA-compliant patient management system with telemedicine integration, appointment scheduling, and secure medical records access.",
    tech: ["Python", "Django", "PostgreSQL", "React", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 5,
    title: "E-Commerce Mobile App",
    category: "Mobile Commerce",
    categories: ["all", "mobile"],
    description: "Native shopping application with personalized recommendations, one-click checkout, and real-time inventory tracking for seamless customer experience.",
    tech: ["React Native", "Firebase", "Redux", "Stripe", "Node.js"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 6,
    title: "Supply Chain Tracker",
    category: "Logistics & IoT",
    categories: ["all", "enterprise"],
    description: "IoT-powered logistics platform providing real-time fleet tracking, automated warehousing, and predictive inventory management across distribution network.",
    tech: ["AWS IoT", "Vue.js", "Node.js", "TimescaleDB", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    featured: false
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "data", label: "Data Collection" },
  { id: "enterprise", label: "Enterprise" },
  { id: "fintech", label: "Fintech" },
  { id: "healthcare", label: "Healthcare" },
  { id: "mobile", label: "Mobile" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter(project => 
    selectedCategory === "all" || project.categories.includes(selectedCategory)
  );

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/10 dark:to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <SectionHeading 
              title="Solutions That Deliver Results" 
              subtitle="Our Portfolio" 
            />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
              We build enterprise solutions that solve real business challenges and drive measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Projects Delivered", icon: Award },
              { value: "15+", label: "Industries Served", icon: Database },
              { value: "98%", label: "Client Satisfaction", icon: CheckCircle2 },
              { value: "100%", label: "On-Time Delivery", icon: TrendingUp }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Highlighted case studies showcasing our technical expertise and business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-primary-200 text-sm">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-dark-bg text-gray-600 text-xs rounded">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-dark-bg text-gray-600 text-xs rounded">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <BarChart3 className="w-12 h-12 text-primary-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Solution?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100 shadow-xl">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}