import React from 'react';
import { ArrowRight, PlayCircle, Star, Zap } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent-orange/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent-teal/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 md:space-y-10 animate-fade-up text-center lg:text-left">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-orange-100 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default mx-auto lg:mx-0">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-orange"></span>
              </span>
              <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">New Version 2.0</span>
           </div>
           
           <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tighter text-primary leading-[0.95] md:leading-[0.9]">
             CONTROL <br/>
             YOUR WEALTH
           </h1>
           
           <p className="text-lg md:text-xl text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
             The next generation of decentralized finance. Secure, fast, and built for the modern investor. Zero hidden fees, 100% transparency.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
             <Button icon={ArrowRight} className="w-full sm:w-auto text-lg h-14 shadow-xl shadow-primary/20">Start Trading</Button>
             <Button variant="white" icon={PlayCircle} className="w-full sm:w-auto text-lg h-14">Watch Demo</Button>
           </div>

           <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-black/5">
             <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-4 border-canvas overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <div className="text-center sm:text-left">
               <div className="flex items-center justify-center sm:justify-start gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-accent-orange fill-current" />)}
               </div>
               <p className="text-sm font-bold text-primary mt-1">Trusted by 50k+ Traders</p>
             </div>
           </div>
        </div>

        {/* Hero Visual - Visible on all screens, adjusted sizing for mobile */}
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            {/* Main floating card */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] bg-primary rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 shadow-2xl text-white transform rotate-[-5deg] hover:rotate-0 transition-all duration-700 ease-out z-20 border-[6px] md:border-8 border-white/10 scale-90 sm:scale-100">
               <div className="flex justify-between items-start mb-8 md:mb-12">
                 <div>
                   <p className="text-gray-400 text-xs md:text-sm font-medium mb-1">Total Balance</p>
                   <h3 className="font-display text-2xl md:text-4xl font-bold">$124,500.89</h3>
                 </div>
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center">
                   <Zap className="w-5 h-5 md:w-6 md:h-6 text-accent-yellow" />
                 </div>
               </div>
               
               {/* Mock Chart */}
               <div className="h-32 md:h-40 flex items-end justify-between gap-1.5 md:gap-2 mb-8">
                 {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                   <div key={i} className="w-6 md:w-8 bg-accent-green rounded-t-lg transition-all duration-500 hover:bg-accent-yellow" style={{ height: `${h}%`, opacity: 0.8 + (i * 0.05) }}></div>
                 ))}
               </div>

               <div className="space-y-3 md:space-y-4">
                 <div className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">B</div>
                      <div>
                        <p className="font-bold text-sm md:text-base">Bitcoin</p>
                        <p className="text-xs text-gray-400">BTC</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="font-bold text-sm md:text-base">$42,305</p>
                       <p className="text-xs text-accent-green">+2.4%</p>
                    </div>
                 </div>
                 <div className="flex items-center justify-between p-3 md:p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">E</div>
                      <div>
                        <p className="font-bold text-sm md:text-base">Ethereum</p>
                        <p className="text-xs text-gray-400">ETH</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="font-bold text-sm md:text-base">$2,105</p>
                       <p className="text-xs text-accent-green">+1.8%</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Back decorative cards */}
            <div className="absolute top-10 md:top-20 right-4 md:right-10 w-[240px] md:w-[300px] h-[320px] md:h-[400px] bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl transform rotate-[5deg] z-10 opacity-60"></div>
            <div className="absolute bottom-10 md:bottom-20 left-4 md:left-10 w-[160px] md:w-[200px] h-[160px] md:h-[200px] bg-accent-yellow rounded-[1.5rem] md:rounded-[2rem] shadow-lg transform rotate-[-12deg] z-30 flex items-center justify-center animate-float">
               <div className="text-center">
                 <p className="text-primary font-bold text-4xl md:text-5xl mb-1 md:mb-2">0%</p>
                 <p className="text-primary/80 font-medium text-sm md:text-base">Trading Fees</p>
               </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;