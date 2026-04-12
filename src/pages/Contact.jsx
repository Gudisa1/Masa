import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Contact Us" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's build something great.</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm"><MapPin className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Our Office</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Bole Road, Tower 2, 4th Floor<br/>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm"><Phone className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">+251 911 234 567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-dark-card rounded-xl text-primary-600 shadow-sm"><Mail className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">hello@masatech.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-lg dark:shadow-none border border-gray-100 dark:border-dark-border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" placeholder="John" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all" placeholder="john@company.com" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg focus:ring-2 focus:ring-primary-500 focus:outline-none dark:text-white transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
