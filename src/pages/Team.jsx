import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Mail, Globe } from 'lucide-react';

const team = [
  { name: "Abebe Kebede", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", bio: "Visionary leader with 15+ years of software engineering experience." },
  { name: "Sara Tadesse", role: "CTO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", bio: "Tech enthusiast driving architectural decisions and AI innovations." },
  { name: "Dawit Alemu", role: "Lead Designer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", bio: "Award-winning creative shaping intuitive and beautiful user experiences." },
  { name: "Hanna Worku", role: "Head of Engineering", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400", bio: "Full-stack expert orchestrating scalable cloud deployments." },
];

export default function Team() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <SectionHeading title="Meet Our Experts" subtitle="The Team" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-dark-border text-center pb-8 group"
            >
              <div className="overflow-hidden mb-6 aspect-square">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="px-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-3">{member.bio}</p>
                <div className="flex justify-center gap-4 text-gray-400">
                  <button className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><Mail className="w-5 h-5"/></button>
                  <button className="hover:text-blue-500 transition-colors"><Globe className="w-5 h-5"/></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
