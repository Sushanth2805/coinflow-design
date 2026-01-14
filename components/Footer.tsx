import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] pt-24 pb-12 px-6 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-2 space-y-6 lg:pr-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-bold font-display text-2xl">
                C
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">CoinFlow.</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              We are building the financial infrastructure for the internet. Open, secure, and accessible to everyone.
            </p>
            <div className="flex gap-4 pt-4">
               {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social, i) => (
                 <a key={social} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-yellow hover:text-primary transition-all duration-300 border border-white/5">
                   <span className="font-bold text-xs">{social[0]}</span>
                 </a>
               ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 lg:pl-12 flex flex-col justify-between">
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12">
                <div className="space-y-6">
                  <h4 className="font-bold text-white text-lg">Platform</h4>
                  <ul className="space-y-3 text-slate-400 font-medium">
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Security</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Enterprise</a></li>
                  </ul>
                </div>
        
                <div className="space-y-6">
                  <h4 className="font-bold text-white text-lg">Company</h4>
                  <ul className="space-y-3 text-slate-400 font-medium">
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Contact</a></li>
                  </ul>
                </div>

                <div className="space-y-6 col-span-2 sm:col-span-1">
                  <h4 className="font-bold text-white text-lg">Legal</h4>
                  <ul className="space-y-3 text-slate-400 font-medium">
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-accent-yellow transition-colors">Cookies</a></li>
                  </ul>
                </div>
             </div>

             <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-white text-lg mb-2">Subscribe to our newsletter</h4>
                <p className="text-slate-400 text-sm mb-4">Latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className="flex gap-3">
                   <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full bg-black/20 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-yellow transition-colors"
                      />
                   </div>
                   <button className="bg-accent-yellow text-primary px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
                     Subscribe
                   </button>
                </div>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 font-medium text-sm">
          <p>&copy; 2024 CoinFlow Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;