import React, { useEffect, useState } from 'react';
import { FeatureBadge } from './FeatureBadge';
import { ChevronDownIcon } from 'lucide-react';
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Main heading with staggered animations */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="leading-tight mb-10">
            {/* First line */}
            <div className="mb-6 animate-fadeInUp">
              <span className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gray-800 italic">
                Benvenuti a
              </span>
            </div>
            {/* Main brand name */}
            <div className="mb-6 animate-fadeInUp-delay-1">
              <span className="font-script text-7xl sm:text-8xl lg:text-9xl text-gray-800">
                Nonna's Table
              </span>
            </div>
            {/* Established badge */}
            <div className="flex justify-center mb-6 animate-fadeInUp-delay-1">
              <span className="font-serif text-sm uppercase tracking-wider bg-gray-900 text-white px-4 py-2 rounded-full">
                EST. 1962
              </span>
            </div>
            {/* Tagline */}
            <div className="flex flex-wrap justify-center items-baseline gap-3 animate-fadeInUp-delay-2">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-800">
                Where tradition meets{' '}
                <span className="italic text-gradient font-bold">taste</span>
              </span>
            </div>
          </h1>
          {/* Subtitle */}
          <p className="font-serif text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp-delay-2">
            Four generations of authentic Italian recipes, served with passion
            in an atmosphere that feels like home. From handmade pasta to
            wood-fired pizzas, every dish tells a story of tradition and love.
          </p>
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp-delay-3">
            <FeatureBadge icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>} text="Fresh Daily" />
            <FeatureBadge icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" stroke="currentColor" strokeWidth="2" />
                </svg>} text="Wood-fired Oven" />
            <FeatureBadge icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                </svg>} text="Award-winning" />
            <FeatureBadge icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 16.7909 14.2091 15 12 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" />
                  <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 3.13A4 4 0 0118 7A4 4 0 0116 10.87" stroke="currentColor" strokeWidth="2" />
                  <path d="M22 21V19C22 16.7909 20.2091 15 18 15C17.5 15 17 15.1 16.5 15.2" stroke="currentColor" strokeWidth="2" />
                </svg>} text="Family Recipes" />
          </div>
          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp-delay-3">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full flex items-center hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-serif text-lg group">
              Book a Table
              <span className="ml-3 bg-white text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                3
              </span>
            </button>
            <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-serif text-lg">
              View Menu
            </button>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNext} aria-label="Scroll down" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
          <ChevronDownIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>;
}