import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Code, Smartphone, Rocket, Shield, MonitorPlay, Zap, Bot, Wrench } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const services = [
  { icon: <Code className="w-8 h-8"/>, title: "Custom Software", desc: "Tailored software solutions designed to meet your specific business needs and scale with your growth. End-to-end architecture and implementation." },
  { icon: <Smartphone className="w-8 h-8"/>, title: "Mobile Apps", desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android platforms." },
  { icon: <MonitorPlay className="w-8 h-8"/>, title: "UI/UX Design", desc: "Intuitive, user-centered designs that drive engagement and improve conversion rates through extensive user research and prototyping." },
  { icon: <Rocket className="w-8 h-8"/>, title: "Cloud & DevOps", desc: "Scalable cloud infrastructure and automated deployment pipelines for faster delivery on AWS, Azure, or GCP." },
  { icon: <Bot className="w-8 h-8"/>, title: "AI & Automation", desc: "Intelligent systems and workflow automation using LLMs, predictive modeling, and generative AI to boost operational efficiency." },
  { icon: <Shield className="w-8 h-8"/>, title: "Cybersecurity", desc: "Comprehensive security assessments, penetration testing, and implementation to protect your digital assets from emerging threats." },
  { icon: <Zap className="w-8 h-8"/>, title: "QA & Testing", desc: "Rigorous automated and manual testing methodologies to ensure flawless software performance before production deployment." },
  { icon: <Wrench className="w-8 h-8"/>, title: "Maintenance", desc: "Ongoing technical support, system upgrades, monitoring, and SLA-backed responses to keep your applications running smoothly." },
];

export default function Services() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-dark-card text-center">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Comprehensive Services" subtitle="Detailed Offerings" />
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-8 max-w-3xl mx-auto mb-16 font-light">
          We provide end-to-end technology solutions tailored to your unique requirements. Explore our specialized offerings designed to accelerate your digital journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {services.map((service, idx) => (
            <Card key={idx} hover className="h-full flex flex-col md:flex-row items-center md:items-start p-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 md:mb-0 md:mr-6 shadow-sm">
                {service.icon}
              </div>
              <div>
                <CardHeader className="p-0 mb-3 text-center md:text-left">
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-center md:text-left">
                  {service.desc}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
