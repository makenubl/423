import React from 'react';
import { Shield, Headphones, BookOpen, Clock } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const services = [
  {
    icon: <Shield className="w-8 h-8 text-teal-600" />,
    title: "Enterprise Security",
    description: "Military-grade encryption and zero-trust architecture for your most sensitive data."
  },
  {
    icon: <Headphones className="w-8 h-8 text-teal-600" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring for your authentication infrastructure."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-teal-600" />,
    title: "Comprehensive Training",
    description: "Expert-led training sessions to help your team master SAM's capabilities."
  },
  {
    icon: <Clock className="w-8 h-8 text-teal-600" />,
    title: "Rapid Deployment",
    description: "Quick setup and integration with your existing systems and workflows."
  }
];

const Services = () => {
  return (
    <Section id="services" bgColor="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all hover:shadow-lg hover:border-teal-200"
            >
              <div className="w-16 h-16 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;