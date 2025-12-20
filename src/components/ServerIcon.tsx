import React from 'react';

const ServerIcon = ({ size = 220 }: { size?: number }) => { 
   return ( 
     <svg 
       width={size} 
       height={size} 
       viewBox="0 0 220 220" 
       fill="none" 
       xmlns="" 
     > 
       <defs> 
         <radialGradient id="bg" cx="0.5" cy="0.5" r="0.7"> 
           <stop offset="0%" stopColor="#0b1020" /> 
           <stop offset="100%" stopColor="#050816" /> 
         </radialGradient> 
  
         <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"> 
           <feGaussianBlur stdDeviation="4" result="blur" /> 
           <feMerge> 
             <feMergeNode in="blur" /> 
             <feMergeNode in="SourceGraphic" /> 
           </feMerge> 
         </filter> 
       </defs> 
  
       {/* Background */} 
       <rect width="220" height="220" rx="16" fill="url(#bg)" /> 
  
       {/* Circle */} 
       <circle 
         cx="110" 
         cy="110" 
         r="64" 
         fill="#2a144f" 
         stroke="rgb(139, 92, 246)" 
         strokeWidth="2" 
         filter="url(#glow)" 
       /> 
  
       {/* Server Icon */} 
       <g 
         stroke="rgb(139, 92, 246)" 
         strokeWidth="3" 
         strokeLinecap="round" 
         strokeLinejoin="round" 
       > 
         <rect x="78" y="86" width="64" height="20" rx="6" /> 
         <circle cx="88" cy="96" r="2.5" fill="rgb(139, 92, 246)" /> 
  
         <rect x="78" y="114" width="64" height="20" rx="6" /> 
         <circle cx="88" cy="124" r="2.5" fill="rgb(139, 92, 246)" /> 
       </g> 
     </svg> 
   ); 
 }; 
  
 export default ServerIcon; 
