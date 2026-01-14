import React from 'react';
import { ArrowUpRight, Zap, Globe, ChevronRight } from 'lucide-react';
import Tag from './ui/Tag';
import Button from './ui/Button';
import { IsoWallet, IsoChart, IsoCard, IsoBitcoinNetwork } from './Illustrations';

const BentoGrid = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
         <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4 fill-current" />
            <span>Core Features</span>
         </div>
         <h2 className="font-display font-bold text-4xl md:text-6xl text-primary mb-6 tracking-tighter">
           Simplify Your <br className="hidden md:block" /> Digital Finance
         </h2>
         <p className="text-lg md:text-xl text-secondary leading-relaxed">
           Manage, trade, and grow your crypto portfolio with secure tools designed for power users and beginners alike.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
        
        {/* Card 1: Wallet (Yellow) */}
        <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-0"></div>
          
          <div className="relative z-10">
            <Tag color="yellow" text="Wallet" />
            
            <div className="mt-8 mb-6 md:mt-12 md:mb-10 h-40 md:h-48 flex items-center justify-center">
              <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                <IsoWallet />
              </div>
            </div>

            <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 text-primary uppercase">Crypto Vault.</h3>
            <p className="text-secondary font-medium text-base md:text-lg leading-relaxed">Keep your digital assets secure with military-grade encryption and cold storage options.</p>
          </div>
          
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100 flex items-center justify-between">
            <button className="text-primary font-bold text-sm uppercase tracking-wide group-hover:text-black transition-colors">Learn More</button>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent-yellow transition-colors">
               <ArrowUpRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        {/* Card 2: Tracking (Teal) */}
        <div className="group bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5 flex flex-col justify-between overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-0"></div>
           
           <div className="relative z-10">
             <Tag color="blue" text="Tracking" />

             <div className="mt-8 mb-6 md:mt-12 md:mb-10 h-40 md:h-48 flex items-center justify-center">
               <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                 <IsoChart />
               </div>
             </div>

             <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 text-primary uppercase">Watch It Grow.</h3>
             <p className="text-secondary font-medium text-base md:text-lg leading-relaxed">Real-time market data and portfolio performance analytics at your fingertips.</p>
           </div>
           
           <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100 flex items-center justify-between">
             <button className="text-primary font-bold text-sm uppercase tracking-wide group-hover:text-black transition-colors">Learn More</button>
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent-teal transition-colors">
                <ArrowUpRight className="w-4 h-4 text-primary" />
             </div>
           </div>
        </div>

        {/* Card 3: Payments (Green - Tall) */}
        <div className="group md:row-span-1 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5 flex flex-col overflow-hidden relative min-h-[400px]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-0"></div>
           
           <div className="relative z-10 flex flex-col h-full">
             <div className="mb-6">
                <Tag color="green" text="Payments" />
             </div>
             
             <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-primary uppercase leading-tight">Get Paid <br/> Your Way.</h3>
             <p className="text-secondary font-medium text-base md:text-lg leading-relaxed mb-auto">Skip banks. Pay and get paid instantly, anywhere in the world with zero hidden fees and instant settlement.</p>
             
             <div className="mt-8 md:mt-12 h-56 md:h-64 flex items-center justify-center relative">
                 <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                    <IsoCard />
                 </div>
             </div>
           </div>
        </div>

        {/* Card 4: Network (Orange - Wide) */}
        <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 group overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
           
           <div className="relative z-10 flex-1">
             <div className="mb-6">
               <Tag color="orange" text="Network" />
             </div>
             <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-primary uppercase">Trust The Chain.</h3>
             <p className="text-secondary font-medium text-base md:text-lg leading-relaxed max-w-md mb-8">Every transaction is verified, immutable, and secured by the decentralized network. No single point of failure.</p>
             
             <Button variant="outline" className="px-8 bg-transparent">Explore Network</Button>
           </div>
           
           <div className="flex-1 w-full h-48 md:h-64 flex items-center justify-center relative z-10">
              <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                <IsoBitcoinNetwork />
              </div>
           </div>
        </div>

        {/* Card 5: Trusted (Dark) */}
        <div className="bg-primary rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between overflow-hidden relative group min-h-[300px]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 backdrop-blur-md border border-white/10">
               <Globe className="text-white w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Trusted by 2M+ users.</h3>
            <p className="text-gray-400 text-base md:text-lg">Join a growing network of financial pioneers globally.</p>
          </div>

          <div className="relative z-10 mt-8 md:mt-12">
            <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-5 py-4 md:px-6 md:py-5 rounded-2xl transition-colors backdrop-blur-md border border-white/5 group-hover:border-white/20">
              <span className="font-bold text-white">Get Started</span>
              <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-primary">
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;