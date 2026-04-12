import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const jobs = [
  { title: "Senior React Developer", type: "Full-time", location: "Remote / Addis Ababa" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote" },
  { title: "UX/UI Designer", type: "Contract", location: "Hybrid" },
  { title: "Project Manager", type: "Full-time", location: "Addis Ababa" },
];

export default function Careers() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeading title="Join the Tech Revolution" subtitle="Careers" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At Masa Technology, we are always looking for passionate, driven individuals to join our growing team. We offer competitive benefits, remote flexibility, and the chance to work on world-changing projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card hover className="flex flex-col sm:flex-row items-center justify-between p-6 group cursor-pointer border-transparent hover:border-primary-200 dark:hover:border-primary-900 shadow-sm border border-gray-100 dark:border-dark-border">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    <span className="bg-gray-100 dark:bg-dark-bg px-2 py-1 rounded">{job.type}</span>
                    <span className="bg-gray-100 dark:bg-dark-bg px-2 py-1 rounded">{job.location}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto">Apply Now</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
