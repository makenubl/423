import React from 'react';
import { CheckCircle2, Shield, Lock, Zap, Code, DollarSign, Building2 } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Patented Technology",
    description: "You're protected with a verified, exclusive IP-backed product."
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "OTP Replacement",
    description: "Cut SMS/email costs, stop phishing vectors, and reduce friction."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Truly Frictionless UX",
    description: "No clicks, no codes, no confusion — just instant trust."
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Developer Friendly",
    description: "Easy SDKs, minimal setup, seamless backend integration."
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Cost-Effective",
    description: "No recurring OTP infrastructure, no user education overhead."
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Enterprise-Ready",
    description: "Proven at scale with support for compliance, audit, and SLA needs."
  }
];

const WhyChoose = () => {
  return (
    <section id="why-sam" className="relative py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-600/20 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-600/20 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-500/20 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
            Why Choose SAM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Security Without Sacrifice
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            SAM delivers enterprise-grade security with consumer-grade simplicity, all backed by patented technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                  {React.cloneElement(reason.icon, { className: "text-teal-400" })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-br from-teal-500/10 to-amber-500/10 rounded-2xl p-8 border border-teal-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-300 mb-6">
                SAM combines military-grade encryption with seamless user experience, making it the perfect choice for organizations that demand both security and simplicity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span>
                  Zero-trust architecture
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span>
                  End-to-end encryption
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span>
                  Compliance ready
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/10">
                    <Shield className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Security Score</h4>
                    <p className="text-teal-400 text-2xl font-bold">99.9%</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-amber-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;