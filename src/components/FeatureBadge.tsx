import React from 'react';
type FeatureBadgeProps = {
  icon: React.ReactNode;
  text: string;
};
export function FeatureBadge({
  icon,
  text
}: FeatureBadgeProps) {
  return <span className="bg-white/80 backdrop-blur-sm text-gray-800 px-4 py-2.5 rounded-full flex items-center text-sm font-serif hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100">
      <span className="w-4 h-4 mr-2 text-amber-600">{icon}</span>
      {text}
    </span>;
}