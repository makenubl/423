import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Lock, Zap, Smartphone, Fingerprint, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900"
    >
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
        
        {/* Animated dots */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-400/30 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-rose-400/30 rounded-full animate-ping delay-1000"></div>
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-6 hover:bg-teal-500/20 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
              Next-Gen Authentication
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">Authentication,</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-amber-400 to-rose-400 animate-gradient">
                Reinvented.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              SAM (Seamless Authentication Module) is the patented, zero-interaction alternative to OTPs — securing devices and users with invisible, frictionless trust.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
              <Button 
                variant="secondary" 
                size="lg"
                className="group bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300"
              >
                Explore Features
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-teal-500/30 text-white hover:bg-teal-500/10 transform hover:scale-105 transition-all duration-300"
              >
                Request a Demo
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="p-2 rounded-lg bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                  <Shield className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Secure</h3>
                  <p className="text-sm text-gray-400">Bank-grade security</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-amber-500/30 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="p-2 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <Lock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Private</h3>
                  <p className="text-sm text-gray-400">Zero data collection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-rose-500/30 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="p-2 rounded-lg bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors">
                  <Zap className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Fast</h3>
                  <p className="text-sm text-gray-400">Instant verification</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Device Mockup */}
          <div className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Device Frame */}
            <div className="relative z-10 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] transform hover:scale-105 transition-transform duration-300">
              <div className="relative bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 rounded-[2.5rem] p-2 sm:p-2.5 md:p-3 shadow-2xl border border-violet-500/30">
                {/* Device Screen */}
                <div className="relative bg-gradient-to-br from-slate-100/95 via-white/90 to-slate-100/95 rounded-[2rem] overflow-hidden aspect-[9/19.5] p-2 sm:p-2.5 md:p-3">
                  {/* Screen Background Effects */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400/20 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-teal-400/10 via-amber-400/5 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                  </div>

                  {/* Screen Content */}
                  <div className="relative h-full flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-teal-500 to-amber-500 flex items-center justify-center animate-pulse shadow-lg shadow-teal-500/30">
                        <Fingerprint className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-gray-900 font-medium text-xs sm:text-sm md:text-base">Authentication</h3>
                      <p className="text-gray-600/90 text-[10px] sm:text-xs mt-0.5">Successfully Verified</p>
                    </div>
                    <div className="relative w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px]">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full blur-sm opacity-50"></div>
                      <div className="relative h-0.5 sm:h-1 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full shadow-lg shadow-teal-500/30"></div>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs text-gray-600/90">
                      <div className="relative">
                        <div className="absolute inset-0 bg-teal-400 rounded-full blur-sm opacity-50"></div>
                        <CheckCircle2 className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-500" />
                      </div>
                      <span>Secure Connection</span>
                    </div>
                  </div>
                </div>
                
                {/* Device Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-3 sm:h-4 bg-gradient-to-b from-slate-800 to-gray-900 rounded-b-3xl"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-amber-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            {/* Security Badge */}
            <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 bg-gradient-to-br from-slate-800/95 to-gray-900/95 backdrop-blur-sm p-2 sm:p-2.5 rounded-lg shadow-lg border border-violet-500/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-teal-200">85%+ Success Rate</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-teal-500/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;