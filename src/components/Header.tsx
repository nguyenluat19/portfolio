import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-500 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-script text-xl tracking-wider animate-slideInLeft">
          Nonna's Table
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 animate-fadeInUp">
          {['Menu', 'Our Story', 'Events', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative font-serif font-normal hover:text-amber-600 transition-all duration-300 group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </a>)}
        </nav>
        <div className="flex items-center gap-4 animate-slideInRight">
          <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-serif">
            Reserve Table
          </button>
          {/* Mobile menu button */}
          <button className="lg:hidden flex items-center p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="glass-effect shadow-lg mx-4 my-2 rounded-2xl p-6">
          <nav className="flex flex-col space-y-4">
            {['Menu', 'Our Story', 'Events', 'Contact'].map((item, index) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="py-3 border-b border-gray-100 last:border-b-0 hover:text-amber-600 transition-colors font-serif" onClick={() => setIsMenuOpen(false)} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {item}
              </a>)}
          </nav>
        </div>
      </div>
    </header>;
}