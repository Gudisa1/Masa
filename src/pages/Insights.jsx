import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardContent } from '../components/ui/Card';
import { Calendar, User } from 'lucide-react';

const articles = [
  {
    title: "The Future of AI in Enterprise Software",
    excerpt: "How artificial intelligence is reshaping the landscape of B2B applications and automating complex workflows.",
    date: "March 15, 2024",
    author: "Sara Tadesse",
    category: "AI & Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Why React Server Components Change Everything",
    excerpt: "A deep dive into the performance benefits and architectural shifts brought by RSCs in modern web development.",
    date: "February 28, 2024",
    author: "Hanna Worku",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Building Resilient Cloud Infrastructures",
    excerpt: "Best practices for designing high-availability systems on AWS that can withstand regional outages.",
    date: "January 14, 2024",
    author: "Abebe Kebede",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Insights() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <SectionHeading title="Latest Insights" subtitle="Tech Blog" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card hover className="h-full flex flex-col cursor-pointer group border-none shadow-sm pb-2">
                <div className="overflow-hidden aspect-video">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-4 mt-2">
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-1">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-dark-border text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {article.date}</span>
                    </div>
                    <span className="flex items-center gap-1"><User className="w-4 h-4"/> {article.author}</span>
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
