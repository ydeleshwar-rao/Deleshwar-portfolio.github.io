
// Neural Network Animated Background Component
// function NeuralNetworkBackground() {
//     return (
//         <svg
//             className="absolute inset-0 w-full h-full animate-pulse"
//             style={{ filter: "blur(1.5px)" }}
//             viewBox="0 0 1440 900"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             {/* Glow effect */}
//             <defs>
//                 <radialGradient id="glow" cx="50%" cy="50%" r="50%">
//                     <stop offset="0%" stopColor="#00FFD0" stopOpacity="0.5" />
//                     <stop offset="100%" stopColor="#00FFD0" stopOpacity="0" />
//                 </radialGradient>
//                 <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
//                     <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
//                     <feMerge>
//                         <feMergeNode in="coloredBlur"/>
//                         <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                 </filter>
//             </defs>

//             {/* Darker, more connected lines */}
//             <g stroke="#00bfae" strokeOpacity="0.35" strokeWidth="2.8" strokeDasharray="10 6">
//                 {/* Existing connections */}
//                 <line x1="200" y1="200" x2="400" y2="400">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="400" y1="400" x2="700" y2="300">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.5s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="700" y1="300" x2="1000" y2="600">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.2s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="200" y1="200" x2="700" y2="300">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.8s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="400" y1="400" x2="1000" y2="600">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.1s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="700" y1="300" x2="1200" y2="200">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.6s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="1200" y1="200" x2="1000" y2="600"> 
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.3s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="400" y1="400" x2="1200" y2="200">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.7s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="200" y1="200" x2="1000" y2="600">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.9s" repeatCount="indefinite" />
//                 </line>
//                 {/* More connections for denser network */}
//                 <line x1="200" y1="200" x2="1200" y2="200">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.4s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="400" y1="400" x2="700" y2="300">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.1s" repeatCount="indefinite" />
//                 </line>
//                 {/* <line x1="700" y1="300" x2="400" y2="400">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.2s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="1200" y1="200" x2="400" y2="400">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.5s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="1000" y1="600" x2="200" y2="200">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.7s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="1200" y1="200" x2="700" y2="300">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.3s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="1000" y1="600" x2="1200" y2="200">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.6s" repeatCount="indefinite" />
//                 </line>
//                 <line x1="700" y1="300" x2="200" y2="200">
//                     <animate attributeName="stroke-dashoffset" values="0;20" dur="2.8s" repeatCount="indefinite" />
//                 </line> */}
//             </g>

//             {/* Nodes with glow and pulsing */}
//             <g>
//                 <circle cx="200" cy="200" r="22" fill="url(#glow)" filter="url(#node-glow)" />
//                 <circle cx="400" cy="400" r="18" fill="url(#glow)" filter="url(#node-glow)" />
//                 <circle cx="700" cy="300" r="24" fill="url(#glow)" filter="url(#node-glow)" />
//                 <circle cx="1000" cy="600" r="20" fill="url(#glow)" filter="url(#node-glow)" />
//                 <circle cx="1200" cy="200" r="16" fill="url(#glow)" filter="url(#node-glow)" />
                
//             </g>
//             <g>
//                 <circle cx="200" cy="200" r="12" fill="#00FFD0" fillOpacity="0.22">
//                     <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx="400" cy="400" r="10" fill="#00FFD0" fillOpacity="0.25">
//                     <animate attributeName="r" values="10;14;10" dur="2.2s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx="700" cy="300" r="14" fill="#00FFD0" fillOpacity="0.18">
//                     <animate attributeName="r" values="14;20;14" dur="2.5s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx="1000" cy="600" r="12" fill="#00FFD0" fillOpacity="0.21">
//                     <animate attributeName="r" values="12;18;12" dur="2.1s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx="1200" cy="200" r="8" fill="#00FFD0" fillOpacity="0.19">
//                     <animate attributeName="r" values="8;12;8" dur="2.3s" repeatCount="indefinite" />
//                 </circle>
//             </g>
//         </svg>
//     );
// }