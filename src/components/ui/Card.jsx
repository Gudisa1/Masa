import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Card({ className, children, hover = false, ...props }) {
  const hoverStyles = hover ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1" : "";
  return (
    <div 
      className={cn("bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm overflow-hidden", hoverStyles, className)} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return <div className={cn("p-6 pb-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }) {
  return <h3 className={cn("font-bold text-xl tracking-tight text-gray-900 dark:text-white", className)} {...props}>{children}</h3>;
}

export function CardContent({ className, children, ...props }) {
  return <div className={cn("p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed", className)} {...props}>{children}</div>;
}
