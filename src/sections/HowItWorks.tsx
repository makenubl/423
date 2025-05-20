import React from 'react';
import { Code2, Key, Zap, Rocket } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const HowItWorks = () => {
  const steps = [
    {
      icon: Code2,
      title: 'Install SDK',
      description: 'Add SAM SDK to your Android project with a single line in your build.gradle file.',
      code: `implementation 'com.sam:auth-sdk:1.0.0'`,
      color: 'teal'
    },
    {
      icon: Key,
      title: 'Add License',
      description: 'Configure your license key in your Android application.',
      code: `SAM.initialize(this, {
  licenseKey: "your-license-key"
});`,
      color: 'amber'
    },
    {
      icon: Zap,
      title: 'Test & Verify',
      description: 'Run tests to ensure SAM is working correctly on your Android device.',
      code: `SAM.verify(context, {
  userId: "test-user"
});`,
      color: 'rose'
    },
    {
      icon: Rocket,
      title: 'Go Live',
      description: 'Deploy to production and start using SAM in your live Android app.',
      code: `SAM.updateConfig({
  environment: "production"
});`,
      color: 'violet'
    }
  ];

  return (
    <Section id="how-it-works" bgColor="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionTitle
          title="How SAM Works in Your Android App"
          centered={true}
          className="mb-16"
          textColor="text-gray-900"
        />
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Integrate SAM into your Android application in minutes. Our lightweight SDK makes it easy to add secure authentication to your app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Card Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-100 to-white rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              
              {/* Card Content */}
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-teal-500/30 transition-all duration-300 shadow-sm">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${step.color}-500/10 flex items-center justify-center mb-4`}>
                  <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>

                {/* Code Block */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-lg blur opacity-50"></div>
                  <pre className="relative bg-gray-50/50 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-700 font-mono">{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Android Features */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Android-Specific Features</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              'Biometric Authentication',
              'Device Fingerprinting',
              'Background Verification',
              'Offline Support',
              'Battery Efficient',
              'Material Design UI'
            ].map((feature) => (
              <div
                key={feature}
                className="px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:border-teal-500/30 transition-colors shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;