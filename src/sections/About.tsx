import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const features = [
  "Patented authentication technology",
  "Zero-trust security architecture",
  "Frictionless user experience",
  "Enterprise-grade reliability"
];

const About = () => {
  return (
    <Section id="about" bgColor="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-50 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-teal-100">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Future of Authentication
              </h2>
              <p className="text-gray-600 mb-8">
                SAM (Seamless Authentication Module) is a revolutionary authentication solution that combines military-grade security with unprecedented ease of use. Our patented technology eliminates the need for passwords, codes, and complex authentication steps while maintaining the highest security standards.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-teal-600 flex-shrink-0 mt-1 mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <SectionTitle title="About SAM" />
            <div className="space-y-6">
              <p className="text-gray-600">
                SAM is designed for organizations that demand both security and simplicity. Our solution eliminates the traditional trade-off between security and user experience, providing a seamless authentication process that users love and security teams trust.
              </p>
              <p className="text-gray-600">
                Built on patented technology and backed by years of research, SAM represents the next generation of authentication. We're helping organizations worldwide move beyond passwords and OTPs to a future where security is invisible yet impenetrable.
              </p>
              <p className="text-gray-600">
                Join the growing list of enterprises that have transformed their authentication experience with SAM. Experience the perfect balance of security and simplicity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;