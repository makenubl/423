import React from 'react';
import { Shield, Lock, Zap, Code } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const capabilities = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Zero-Trust Security",
    description: "Military-grade encryption and continuous authentication for maximum protection.",
    color: "bg-gradient-to-br from-teal-600 to-teal-800"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Frictionless Authentication",
    description: "No codes, no taps, no delays — just instant, secure access.",
    color: "bg-gradient-to-br from-amber-600 to-amber-800"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Sub-second authentication with zero user interaction required.",
    color: "bg-gradient-to-br from-teal-600 to-amber-600"
  }
];

const KeyCapabilities = () => {
  return (
    <Section id="capabilities" bgColor="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Key Capabilities" 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className={`absolute inset-0 ${capability.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-16 h-16 ${capability.color} rounded-xl flex items-center justify-center mb-6`}>
                  {React.cloneElement(capability.icon, { className: "text-white" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default KeyCapabilities;