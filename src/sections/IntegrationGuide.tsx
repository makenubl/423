import React from 'react';
import { Code2, Key, Zap, Rocket } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const IntegrationGuide = () => {
  const steps = [
    {
      icon: Code2,
      title: 'Install SDK',
      description: 'One-line installation to get started.',
      code: `npm install @sam/auth-sdk`,
      color: 'teal'
    },
    {
      icon: Key,
      title: 'Add License',
      description: 'Configure your license key to activate SAM.',
      code: `const auth = new SAM({
  licenseKey: 'your-license-key'
});`,
      color: 'amber'
    },
    {
      icon: Zap,
      title: 'Test & Verify',
      description: 'Run tests to ensure everything works.',
      code: `await auth.verify({
  userId: 'test-user'
});`,
      color: 'rose'
    },
    {
      icon: Rocket,
      title: 'Go Live',
      description: 'Deploy to production and start using SAM.',
      code: `auth.updateConfig({
  environment: 'production'
});`,
      color: 'violet'
    }
  ];

  return (
    <Section id="integration-guide" bgColor="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionTitle
          title="Quick Integration"
          centered={true}
          className="mb-16"
          textColor="text-white"
        />
        <p className="text-center text-gray-400 mb-16">
          Get started in minutes with our simple integration process
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-teal-500/30 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${step.color}-500/10 flex items-center justify-center mb-4`}>
                  <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>

                {/* Code Block */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg blur opacity-50"></div>
                  <pre className="relative bg-gray-800/50 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300 font-mono">{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Link */}
        <div className="mt-16 text-center">
          <a
            href="https://docs.sam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>View Full Documentation</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default IntegrationGuide; 