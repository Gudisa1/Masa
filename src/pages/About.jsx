import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-dark-card">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SectionHeading title="About Masa Technology PLC" subtitle="Our Story" />
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light mt-8">
              We are a forward-thinking software development company dedicated to transforming complex challenges into elegant, scalable digital solutions. With a passion for innovation and a commitment to excellence, Masa Technology empowers businesses globally.
            </p>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Target className="w-10 h-10"/>, title: "Our Mission", desc: "To provide enterprise-grade technology solutions that accelerate digital transformation and foster sustainable growth for our clients." },
            { icon: <Lightbulb className="w-10 h-10"/>, title: "Our Vision", desc: "To be the leading global technology partner known for engineering excellence, ethical AI, and unparalleled customer success." },
            { icon: <Users className="w-10 h-10"/>, title: "Core Values", desc: "Integrity, Innovation, Collaboration, and Customer-Centricity. We believe in building software that makes a real impact." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 text-center hover:shadow-lg transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white dark:bg-dark-bg text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
