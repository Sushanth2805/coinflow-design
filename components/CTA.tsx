import React from 'react';

const CTA = () => (
  <section className="py-24 px-6">
     <div className="max-w-6xl mx-auto bg-primary rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-r from-accent-green/20 to-accent-teal/20 rounded-full blur-[80px] md:blur-[120px]"></div>
        
        <div className="relative z-10 space-y-8 md:space-y-10">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-8xl text-white tracking-tighter uppercase leading-[0.9]">
            Ready to take <br/> Control?
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Join millions of users worldwide and experience the future of digital asset management today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
             <button className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 bg-white text-primary rounded-full font-bold text-lg hover:bg-accent-yellow transition-colors shadow-[0_10px_40px_rgba(255,255,255,0.2)]">Get Started Now</button>
             <button className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">Contact Sales</button>
          </div>
        </div>
     </div>
  </section>
);

export default CTA;