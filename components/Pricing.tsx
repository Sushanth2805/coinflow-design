import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for exploring the crypto world.",
      features: ["Portfolio Tracking", "5 Price Alerts", "Basic Market Data", "Mobile App Access"],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro Trader",
      price: "$29",
      period: "/mo",
      desc: "For serious investors who need real-time data.",
      features: ["Real-time Data Feeds", "Unlimited Alerts", "Advanced Charts", "0% Trading Fees", "Priority Support"],
      cta: "Get Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Institutional grade security and APIs.",
      features: ["API Access", "Dedicated Account Mgr", "Cold Storage", "Tax Reports", "SSO & Audit Logs"],
      cta: "Contact Sales",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
         <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4 tracking-tighter uppercase">Simple Pricing</h2>
         <p className="text-secondary text-lg">Choose the plan that fits your trading style.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative p-8 rounded-[2.5rem] bg-white flex flex-col border ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1'} transition-all duration-300`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="font-bold text-lg text-secondary mb-2 uppercase tracking-wide">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                 <span className="font-display font-bold text-5xl text-primary">{plan.price}</span>
                 {plan.period && <span className="text-secondary font-medium">{plan.period}</span>}
              </div>
              <p className="text-secondary mt-4 leading-relaxed">{plan.desc}</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-accent-yellow text-primary' : 'bg-gray-100 text-gray-500'}`}>
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            
            <Button 
              fullWidth 
              variant={plan.popular ? 'primary' : 'outline'}
              className={plan.popular ? 'bg-primary hover:bg-gray-900' : 'border-gray-200 hover:border-primary'}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;