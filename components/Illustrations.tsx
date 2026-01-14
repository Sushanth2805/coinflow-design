import React from 'react';

export const IsoCoin = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20C72.0914 20 90 15.5228 90 10C90 4.47715 72.0914 0 50 0C27.9086 0 10 4.47715 10 10C10 15.5228 27.9086 20 50 20Z" fill="#FEF08A" stroke="#111827" strokeWidth="2"/>
    <path d="M90 10V25C90 30.5228 72.0914 35 50 35C27.9086 35 10 30.5228 10 25V10" fill="#FDE047" stroke="#111827" strokeWidth="2"/>
    <path d="M90 25V40C90 45.5228 72.0914 50 50 50C27.9086 50 10 45.5228 10 40V25" fill="#FACC15" stroke="#111827" strokeWidth="2"/>
    <text x="50" y="32" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#111827" transform="scale(1, 0.5)">B</text>
  </svg>
);

export const IsoWallet = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
    <path d="M40 60L140 30V130L40 160V60Z" fill="#FCD34D" stroke="#111827" strokeWidth="2"/>
    <path d="M40 60L140 30" stroke="#111827" strokeWidth="2"/>
    <path d="M40 60L10 70V170L40 160V60Z" fill="#F59E0B" stroke="#111827" strokeWidth="2"/>
    <g transform="translate(100, 100)">
       <ellipse cx="0" cy="0" rx="20" ry="10" fill="#FEF08A" stroke="#111827" strokeWidth="2"/>
       <path d="M-20 0V15C-20 20.5 20 20.5 20 15V0" fill="#FDE047" stroke="#111827" strokeWidth="2"/>
       <path d="M-20 15V30C-20 35.5 20 35.5 20 30V15" fill="#FACC15" stroke="#111827" strokeWidth="2"/>
       <text x="0" y="22" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#111827" transform="scale(1, 0.6)">$</text>
    </g>
    <g transform="translate(90, 20)">
      <circle cx="30" cy="30" r="25" fill="#FEF08A" stroke="#111827" strokeWidth="2"/>
      <text x="30" y="40" fontSize="30" fontWeight="bold" textAnchor="middle" fill="#111827">B</text>
    </g>
  </svg>
);

export const IsoChart = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
    <path d="M10 120L100 160L190 120L100 80L10 120Z" fill="#CCFBF1" stroke="#111827" strokeWidth="2"/>
    <path d="M10 120V140L100 180V160L10 120Z" fill="#99F6E4" stroke="#111827" strokeWidth="2"/>
    <path d="M190 120V140L100 180V160L190 120Z" fill="#5EEAD4" stroke="#111827" strokeWidth="2"/>
    <path d="M40 115L70 128V90L40 77V115Z" fill="#5EEAD4" stroke="#111827" strokeWidth="2"/>
    <path d="M40 77L70 64L100 77L70 90L40 77Z" fill="#CCFBF1" stroke="#111827" strokeWidth="2"/>
    <path d="M70 128L100 115V77L70 90V128Z" fill="#2DD4BF" stroke="#111827" strokeWidth="2"/>
    <path d="M80 100L110 113V60L80 47V100Z" fill="#5EEAD4" stroke="#111827" strokeWidth="2"/>
    <path d="M80 47L110 34L140 47L110 60L80 47Z" fill="#CCFBF1" stroke="#111827" strokeWidth="2"/>
    <path d="M110 113L140 100V47L110 60V113Z" fill="#2DD4BF" stroke="#111827" strokeWidth="2"/>
    <g transform="translate(130, 60)">
       <ellipse cx="20" cy="10" rx="20" ry="10" fill="#FEF08A" stroke="#111827" strokeWidth="2"/>
       <path d="M0 10V20C0 25.5 40 25.5 40 20V10" fill="#FDE047" stroke="#111827" strokeWidth="2"/>
       <path d="M0 20V30C0 35.5 40 35.5 40 30V20" fill="#FACC15" stroke="#111827" strokeWidth="2"/>
       <text x="20" y="32" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#111827" transform="scale(1, 0.6)">B</text>
    </g>
  </svg>
);

export const IsoCard = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
    <g transform="translate(20, 100) rotate(-15)">
        <rect x="0" y="0" width="160" height="100" rx="10" fill="#BEF264" stroke="#111827" strokeWidth="2"/>
        <rect x="0" y="20" width="160" height="15" fill="#111827" opacity="0.1"/>
        <circle cx="130" cy="70" r="15" fill="#FEF08A" stroke="#111827" strokeWidth="2"/>
        <rect x="20" y="60" width="40" height="20" rx="4" fill="#FEF08A" stroke="#111827" strokeWidth="1"/>
        <line x1="20" y1="50" x2="100" y2="50" stroke="#111827" strokeWidth="1" strokeDasharray="4 4"/>
        <path d="M160 10L170 15V115L160 110V10Z" fill="#A3E635" stroke="#111827" strokeWidth="2"/>
        <path d="M10 110L170 115" stroke="#111827" strokeWidth="2"/>
    </g>
    <g transform="translate(100, 30)">
       <ellipse cx="20" cy="10" rx="20" ry="10" fill="#FFFFFF" stroke="#111827" strokeWidth="2"/>
       <path d="M0 10V20C0 25.5 40 25.5 40 20V10" fill="#E5E7EB" stroke="#111827" strokeWidth="2"/>
       <path d="M0 20V30C0 35.5 40 35.5 40 30V20" fill="#D1D5DB" stroke="#111827" strokeWidth="2"/>
       <path d="M0 30V40C0 45.5 40 45.5 40 40V30" fill="#9CA3AF" stroke="#111827" strokeWidth="2"/>
       <text x="20" y="24" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#111827" transform="scale(1, 0.6)">B</text>
    </g>
  </svg>
);

export const IsoBitcoinNetwork = () => (
  <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
     <path d="M50 100L150 140L250 100L150 60L50 100Z" fill="#FED7AA" stroke="#111827" strokeWidth="2"/>
     <path d="M50 100V120L150 160V140L50 100Z" fill="#FDBA74" stroke="#111827" strokeWidth="2"/>
     <path d="M250 100V120L150 160V140L250 100Z" fill="#FB923C" stroke="#111827" strokeWidth="2"/>
     <g transform="translate(100, 30)">
        <circle cx="50" cy="50" r="35" fill="#FFFFFF" stroke="#FB923C" strokeWidth="3"/>
        <text x="50" y="65" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#FB923C">B</text>
     </g>
     <g transform="translate(160, 20)" opacity="0.5">
        <circle cx="50" cy="50" r="30" fill="#FFFFFF" stroke="#FB923C" strokeWidth="2"/>
        <text x="50" y="62" fontSize="30" fontWeight="bold" textAnchor="middle" fill="#FB923C">B</text>
     </g>
  </svg>
);