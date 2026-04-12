import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Rocket, Shield, MonitorPlay, Zap, Bot, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardTitle, CardHeader } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const services = [
    { icon: <Code className="w-8 h-8"/>, title: "Custom Software", desc: "Tailored software solutions designed to meet your specific business needs and scale with your growth." },
    { icon: <Smartphone className="w-8 h-8"/>, title: "Mobile Apps", desc: "Native and cross-platform mobile applications that deliver exceptional user experiences." },
    { icon: <MonitorPlay className="w-8 h-8"/>, title: "UI/UX Design", desc: "Intuitive, user-centered designs that drive engagement and improve conversion rates." },
    { icon: <Rocket className="w-8 h-8"/>, title: "Cloud & DevOps", desc: "Scalable cloud infrastructure and automated deployment pipelines for faster delivery." },
    { icon: <Bot className="w-8 h-8"/>, title: "AI & Automation", desc: "Intelligent systems and workflow automation to boost efficiency and optimize operations." },
    { icon: <Shield className="w-8 h-8"/>, title: "Cybersecurity", desc: "Comprehensive security assessments and implementation to protect your digital assets." },
    { icon: <Zap className="w-8 h-8"/>, title: "QA & Testing", desc: "Rigorous automated and manual testing to ensure flawless software performance." },
    { icon: <Wrench className="w-8 h-8"/>, title: "Maintenance", desc: "Ongoing technical support and system upgrades to keep your applications running smoothly." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary-50 dark:bg-dark-bg transition-colors duration-300">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-400/20 dark:bg-primary-900/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-400/10 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial" animate="animate" variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Innovating the Future of Tech
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight"
            >
              Building digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
                excellence together
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Masa Technology PLC delivers enterprise-grade software development, AI integration, and cloud architecture to accelerate your business.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2 group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm dark:bg-dark-bg/50">
                  View Our Portfolio
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card/50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Tech Experts' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary-600 dark:text-primary-400">{stat.number}</div>
                <div className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Expertise" 
            subtitle="What We Do" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {service.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white dark:bg-dark-card/50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="How We Work With You" 
            subtitle="Engagement Models" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card hover className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <CardHeader>
                <CardTitle>Extended Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Augment your existing workforce with our top-tier engineers. We seamlessly integrate into your processes to speed up development.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Complete control</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Direct communication</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Flexible scaling</li>
                </ul>
              </CardContent>
            </Card>

            <Card hover className="relative overflow-hidden group bg-primary-50 dark:bg-primary-900/10 border-primary-100 dark:border-primary-900/30">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <CardHeader>
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">Popular</div>
                <CardTitle>Managed Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>An autonomous, cross-functional team that handles end-to-end development while you focus on core business strategy.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div> Dedicated Manager</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div> Guaranteed timelines</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div> Quality assured</li>
                </ul>
              </CardContent>
            </Card>

            <Card hover className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <CardHeader>
                <CardTitle>Custom Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Got a unique idea? We deliver tailored software products built from scratch based on a fixed-price or time-and-materials model.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Full discovery</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> E2E architecture</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div> Transparent pricing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to transform your business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how Masa Technology PLC can help you achieve your technical goals and competitive edge.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-900 border border-white hover:bg-gray-50 hover:-translate-y-1 transition-all w-full sm:w-auto text-lg px-8 py-4 h-auto shadow-xl">
                Schedule a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
