// import React from 'react';
// import { motion } from 'framer-motion';
// import { SectionHeading } from '../components/ui/SectionHeading';
// import { Target, Lightbulb, Users } from 'lucide-react';

// export default function About() {
//   return (
//     <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-dark-card">
//       <div className="container mx-auto px-4">
        
//         {/* Intro */}
//         <div className="max-w-4xl mx-auto text-center mb-24">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             <SectionHeading title="About Masa Technology PLC" subtitle="Our Story" />
//             <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light mt-8">
//               We are a forward-thinking software development company dedicated to transforming complex challenges into elegant, scalable digital solutions. With a passion for innovation and a commitment to excellence, Masa Technology empowers businesses globally.
//             </p>
//           </motion.div>
//         </div>

//         {/* Mission, Vision, Values */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { icon: <Target className="w-10 h-10"/>, title: "Our Mission", desc: "To provide enterprise-grade technology solutions that accelerate digital transformation and foster sustainable growth for our clients." },
//             { icon: <Lightbulb className="w-10 h-10"/>, title: "Our Vision", desc: "To be the leading global technology partner known for engineering excellence, ethical AI, and unparalleled customer success." },
//             { icon: <Users className="w-10 h-10"/>, title: "Core Values", desc: "Integrity, Innovation, Collaboration, and Customer-Centricity. We believe in building software that makes a real impact." },
//           ].map((item, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="p-10 rounded-3xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 text-center hover:shadow-lg transition-transform hover:-translate-y-2 duration-300"
//             >
//               <div className="w-20 h-20 mx-auto rounded-2xl bg-white dark:bg-dark-bg text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 shadow-sm">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
//               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
        
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  HeartHandshake, 
  Zap,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function About() {
  const coreValues = [
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "Excellence First", 
      desc: "We don't just write code; we engineer solutions that stand the test of time and scale."
    },
    { 
      icon: <HeartHandshake className="w-6 h-6" />, 
      title: "True Partnership", 
      desc: "Your success is our success. We work as an extension of your team, not just a vendor."
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Integrity & Trust", 
      desc: "Transparent communication, ethical practices, and reliable delivery are non-negotiable."
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Continuous Innovation", 
      desc: "We stay ahead of the technology curve to bring you future-ready solutions."
    }
  ];

  const milestones = [
    { year: "2019", title: "Founded", desc: "Established with a vision to bridge the technology gap in East Africa." },
    { year: "2021", title: "Enterprise Expansion", desc: "Expanded services to include AI, cloud architecture, and enterprise solutions." },
    { year: "2023", title: "Global Reach", desc: "Serving clients across 4 continents with a team of 25+ engineers." },
    { year: "2024", title: "Innovation Hub", desc: "Launched dedicated R&D division for emerging technologies and AI research." }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/10 dark:to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <SectionHeading title="About Masa Technology PLC" subtitle="Our Story" />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
              We are a forward-thinking technology company dedicated to transforming complex challenges 
              into elegant, scalable digital solutions that drive real business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-100 dark:border-primary-800/30">
                <div className="w-14 h-14 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary-200 dark:shadow-none">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance efficiency, and create lasting value for our clients and their stakeholders.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/30">
                <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200 dark:shadow-none">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To become Africa's most trusted technology partner, recognized globally for 
                  engineering excellence, innovation, and transformative digital solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50 dark:bg-dark-card/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Engineering Excellence Since 2019
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Masa Technology PLC was founded with a clear mission: to deliver world-class 
                  software solutions that help businesses thrive in the digital age. What started 
                  as a small team of passionate engineers has grown into a full-service technology 
                  consultancy serving clients across Africa, Europe, and North America.
                </p>
                <p>
                  We specialize in custom software development, cloud architecture, AI integration, 
                  and enterprise mobility solutions. Our team combines deep technical expertise with 
                  industry knowledge to deliver solutions that are not just functional, but transformative.
                </p>
                <p>
                  With a 98% client retention rate and a portfolio of successful enterprise deployments, 
                  we've earned a reputation for reliability, innovation, and exceptional service delivery.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">15+ Industries Served</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">25+ Expert Engineers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">4 Global Offices</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Masa Technology Team"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white dark:bg-dark-card rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
     

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Partner With Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What sets Masa Technology apart from other development firms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "Global Standards", desc: "We follow international best practices in development, security, and project management." },
              { icon: <Clock className="w-8 h-8" />, title: "On-Time Delivery", desc: "100% track record of delivering projects within agreed timelines and budgets." },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Scalable Solutions", desc: "We build with growth in mind, ensuring your solution scales with your business." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
            <Users className="w-12 h-12 text-primary-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Partner with Masa Technology and experience the difference of working with a team that truly cares about your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100 shadow-xl">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}