import React from 'react';

const Tag = ({ color, text }: { color: 'yellow' | 'green' | 'blue' | 'orange' | 'dark', text: string }) => {
  const colors = {
    yellow: 'bg-accent-yellow/30 text-yellow-800 border-yellow-200',
    green: 'bg-accent-green/40 text-green-900 border-green-300',
    blue: 'bg-accent-teal/30 text-teal-900 border-teal-200',
    orange: 'bg-accent-orange/30 text-orange-900 border-orange-200',
    dark: 'bg-gray-800 text-white border-gray-700',
  };
  return (
    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${colors[color]} backdrop-blur-sm`}>
      {text}
    </span>
  );
};

export default Tag;