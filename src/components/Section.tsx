import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  fullHeight = false,
  bgColor = 'bg-white'
}) => {
  return (
    <section 
      id={id}
      className={`${bgColor} ${fullHeight ? 'min-h-screen' : 'py-20'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;