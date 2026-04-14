// import React from 'react';
// import { SectionHeading } from '../components/ui/SectionHeading';
// import { Code, Smartphone, Rocket, Shield, MonitorPlay, Zap, Bot, Wrench } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

// const services = [
//   { icon: <Code className="w-8 h-8"/>, title: "Custom Software", desc: "Tailored software solutions designed to meet your specific business needs and scale with your growth. End-to-end architecture and implementation." },
//   { icon: <Smartphone className="w-8 h-8"/>, title: "Mobile Apps", desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android platforms." },
//   { icon: <MonitorPlay className="w-8 h-8"/>, title: "UI/UX Design", desc: "Intuitive, user-centered designs that drive engagement and improve conversion rates through extensive user research and prototyping." },
//   { icon: <Rocket className="w-8 h-8"/>, title: "Cloud & DevOps", desc: "Scalable cloud infrastructure and automated deployment pipelines for faster delivery on AWS, Azure, or GCP." },
//   { icon: <Bot className="w-8 h-8"/>, title: "AI & Automation", desc: "Intelligent systems and workflow automation using LLMs, predictive modeling, and generative AI to boost operational efficiency." },
//   { icon: <Shield className="w-8 h-8"/>, title: "Cybersecurity", desc: "Comprehensive security assessments, penetration testing, and implementation to protect your digital assets from emerging threats." },
//   { icon: <Zap className="w-8 h-8"/>, title: "QA & Testing", desc: "Rigorous automated and manual testing methodologies to ensure flawless software performance before production deployment." },
//   { icon: <Wrench className="w-8 h-8"/>, title: "Maintenance", desc: "Ongoing technical support, system upgrades, monitoring, and SLA-backed responses to keep your applications running smoothly." },
// ];

// export default function Services() {
//   return (
//     <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-dark-card text-center">
//       <div className="container mx-auto px-4">
//         <SectionHeading title="Our Comprehensive Services" subtitle="Detailed Offerings" />
//         <p className="text-xl text-gray-600 dark:text-gray-400 mt-8 max-w-3xl mx-auto mb-16 font-light">
//           We provide end-to-end technology solutions tailored to your unique requirements. Explore our specialized offerings designed to accelerate your digital journey.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
//           {services.map((service, idx) => (
//             <Card key={idx} hover className="h-full flex flex-col md:flex-row items-center md:items-start p-6">
//               <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 md:mb-0 md:mr-6 shadow-sm">
//                 {service.icon}
//               </div>
//               <div>
//                 <CardHeader className="p-0 mb-3 text-center md:text-left">
//                   <CardTitle>{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-0 text-center md:text-left">
//                   {service.desc}
//                 </CardContent>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Code, Smartphone, Rocket, Shield, MonitorPlay, Zap, Bot, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  { 
    icon: <Code className="w-6 h-6" />, 
    title: "Custom Software", 
    desc: "Tailored enterprise software solutions designed to meet your specific business needs and scale with your growth.",
    features: ["End-to-end architecture", "Microservices & APIs", "Legacy system integration"]
  },
  { 
    icon: <Smartphone className="w-6 h-6" />, 
    title: "Mobile Apps", 
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.",
    features: ["iOS & Android native", "React Native / Flutter", "App Store deployment"]
  },
  { 
    icon: <MonitorPlay className="w-6 h-6" />, 
    title: "UI/UX Design", 
    desc: "Intuitive, user-centered designs that drive engagement and improve conversion rates.",
    features: ["User research & testing", "Interactive prototyping", "Design systems"]
  },
  { 
    icon: <Rocket className="w-6 h-6" />, 
    title: "Cloud & DevOps", 
    desc: "Scalable cloud infrastructure and automated deployment pipelines for faster, reliable delivery.",
    features: ["AWS / Azure / GCP", "CI/CD pipelines", "Infrastructure as code"]
  },
  { 
    icon: <Bot className="w-6 h-6" />, 
    title: "AI & Automation", 
    desc: "Intelligent systems using LLMs, predictive modeling, and generative AI to boost efficiency.",
    features: ["Custom LLM integration", "Predictive analytics", "Workflow automation"]
  },
  { 
    icon: <Shield className="w-6 h-6" />, 
    title: "Cybersecurity", 
    desc: "Comprehensive security assessments and implementation to protect your digital assets.",
    features: ["Penetration testing", "Security audits", "Compliance (SOC2/GDPR)"]
  },
  { 
    icon: <Zap className="w-6 h-6" />, 
    title: "QA & Testing", 
    desc: "Rigorous automated and manual testing to ensure flawless software performance.",
    features: ["Automated testing", "Performance testing", "Security testing"]
  },
  { 
    icon: <Wrench className="w-6 h-6" />, 
    title: "Maintenance & Support", 
    desc: "Ongoing technical support, monitoring, and upgrades to keep your systems running smoothly.",
    features: ["24/7 monitoring", "SLA-backed support", "Proactive maintenance"]
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Services() {
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
              title="Comprehensive Technology Solutions" 
              subtitle="Our Services" 
            />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 mb-8 leading-relaxed">
              From concept to deployment and beyond, we deliver end-to-end software solutions 
              that drive measurable business outcomes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2 group">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800">
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionHeading 
              title="Our Development Process" 
              subtitle="How We Deliver Excellence" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, requirements, and technical constraints." },
              { step: "02", title: "Planning", desc: "Architecture design, technology selection, and sprint planning." },
              { step: "03", title: "Development", desc: "Agile development with regular demos and feedback loops." },
              { step: "04", title: "Launch & Support", desc: "Deployment, monitoring, and continuous improvement." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl font-bold text-primary-200 dark:text-primary-800 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your vision into reality?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss how our expertise can help you achieve your technical goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-100 shadow-xl">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn About Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}