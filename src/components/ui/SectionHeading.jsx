import React from 'react';

export function SectionHeading({ title, subtitle, centered = true, className = "" }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-primary-500 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
