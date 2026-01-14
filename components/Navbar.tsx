import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div 
        className={`w-full max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-lg border border-white/40' 
            : 'bg-white/30 backdrop-blur-sm border border-transparent'
        }`}
      >
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold font-display text-xl shadow-md group-hover:rotate-6 transition-transform">
            C
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tighter text-primary">CoinFlow.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'About', 'Blog'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-bold text-primary hover:text-secondary px-3">Log in</button>
          <Button className="py-2 px-5 text-sm h-10 min-h-0">Get Started</Button>
        </div>

        <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/20 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-down z-50">
          <div className="flex flex-col gap-4">
            {['Features', 'Pricing', 'About', 'Blog'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-bold text-primary hover:text-accent-orange transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
             <Button fullWidth onClick={() => setIsOpen(false)}>Get Started</Button>
             <button onClick={() => setIsOpen(false)} className="w-full py-3 font-bold text-secondary hover:text-primary">Log In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;