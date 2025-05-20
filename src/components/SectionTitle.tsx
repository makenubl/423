import React from 'react';

interface SectionTitleProps {
  title: string;
  centered?: boolean;
  className?: string;
  textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  centered = false,
  className = '',
  textColor = 'text-gray-900'
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
        {title}
      </h2>
      <div className={`h-1.5 w-20 bg-teal-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;