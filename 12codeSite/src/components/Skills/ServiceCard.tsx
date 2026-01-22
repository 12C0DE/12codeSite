import React, { useState } from "react";
import { Layout, GitMerge, Sparkles, Users } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  effectType: string;
}

const getIcon = (icon: string): React.JSX.Element | null => {
  switch (icon) {
    case "Layout":
      return <Layout className="size-6" />;
    case "Code":
      return <GitMerge className="size-6" />;
    case "Sparkles":
      return <Sparkles className="size-6" />;
    case "Users":
      return <Users className="size-6" />;
    default:
      return null;
  }
};

const getCardEffect = (effectType: string): React.JSX.Element | null => {
  switch (effectType) {
    case "build-software":
      return (
         <div className="absolute inset-0 opacity-60 overflow-hidden">
            {/* Code editor lines with syntax highlighting */}
            <div className="absolute top-4 left-4 right-4 space-y-1 text-[9px] font-mono">
              <div className="flex gap-2" style={{ animation: 'fadeInUp 0.4s ease-out forwards' }}>
                <span className="text-purple-400/70">const</span>
                <span className="text-blue-400/70">App</span>
                <span className="text-white/50">=</span>
                <span className="text-yellow-400/70">{'() => {'}</span>
              </div>
              <div className="flex gap-2 pl-4" style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}>
                <span className="text-purple-400/70">return</span>
                <span className="text-green-400/70">{'<Component'}</span>
                <span className="text-cyan-400/70">/{'>'}</span>
              </div>
              <div className="flex gap-2" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
                <span className="text-yellow-400/70">{'}'}</span>
              </div>
            </div>
            
            {/* File tree structure */}
            <div className="absolute top-16 right-6 text-[8px] font-mono text-white/40 space-y-0.5" style={{ animation: 'fadeInScale 0.7s ease-out forwards' }}>
              <div>📁 src/</div>
              <div className="pl-2">📄 App.tsx</div>
              <div className="pl-2">📁 assets/</div>
              <div className="pl-2">📁 components/</div>
              <div className="pl-2">📁 hooks/</div>
              <div className="pl-2">📁 pages/</div>
              <div className="pl-2">📁 types/</div>
            </div>
            
            {/* Terminal/console output */}
            <div className="absolute bottom-8 left-4 text-[8px] font-mono space-y-1" style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
              <div className="text-green-400/60">✓ Build complete</div>
              <div className="text-cyan-400/60">→ npm run dev</div>
            </div>
            
            {/* Git commits/version indicators */}
            <div className="absolute bottom-8 right-4 flex gap-1" style={{ animation: 'fadeInScale 0.9s ease-out forwards' }}>
              <div className="w-2 h-2 rounded-full bg-green-400/50" />
              <div className="w-2 h-2 rounded-full bg-blue-400/50" />
              <div className="w-2 h-2 rounded-full bg-purple-400/50" />
            </div>
            
            {/* Curly braces decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white/5 font-mono">{'{ }'}</div>
            
            {/* Function call arrows */}
            <svg className="absolute inset-0 w-full h-full">
              <path d="M 20 60 Q 50 60, 50 80" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" fill="none" markerEnd="url(#arrowhead)" style={{ animation: 'drawLine 1.5s ease-out 0.5s forwards' }} />
            </svg>
            
            {/* Brackets and semicolons scattered */}
            {['[', ']', ';', '(', ')'].map((char, i) => (
              <div
                key={i}
                className="absolute text-white/10 text-xl font-mono"
                style={{
                  left: `${15 + (i * 18)}%`,
                  top: `${40 + (i * 12)}%`,
                  animation: `fadeInScale ${0.6 + i * 0.1}s ease-out forwards`,
                }}
              >
                {char}
              </div>
            ))}
          </div>
      );
    case "ui-design":
      return (
         <div className="absolute inset-0 opacity-60 text-white">
            {/* Grid lines */}
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255, 255, 255, 0.15) 19px, rgba(255, 255, 255, 0.15) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255, 255, 255, 0.15) 19px, rgba(255, 255, 255, 0.15) 20px)'
            }} />
            
            {/* Wireframe boxes with dimension lines */}
            <div className="absolute top-8 left-8 w-24 h-16 border-2 border-white/40 rounded" style={{ animation: 'fadeInScale 0.4s ease-out forwards' }} />
            <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/40 rounded-full" style={{ animation: 'fadeInScale 0.5s ease-out forwards' }} />
            {/* Spacing indicators - vertical */}
            <div className="absolute top-6 left-6 w-px h-4 bg-red-400/80" />
            <div className="absolute top-5 left-5 text-[10px] font-mono text-red-400/90">8</div>
            
            {/* Spacing indicators - horizontal */}
            <div className="absolute top-6 left-6 w-4 h-px bg-red-400/80" />
            <div className="absolute bottom-10 right-6 w-6 h-px bg-blue-400/80" />
            <div className="absolute bottom-11 right-4 text-[10px] font-mono text-blue-400/90">16</div>
            
            {/* Margin guides */}
            <div className="absolute top-7 left-7 right-7 h-px bg-purple-400/60" style={{ animation: 'drawLine 1.5s ease-out forwards' }} />
            <div className="absolute top-7 bottom-11 left-7 w-px bg-purple-400/60" style={{ animation: 'drawLine 1.5s ease-out 0.2s forwards' }} />
            
            {/* Padding indicators */}
            <div className="absolute top-4 left-4 w-3 h-px bg-emerald-400/70" />
            <div className="absolute top-4 left-4 w-px h-3 bg-emerald-400/70" />
            <div className="absolute top-4 right-4 w-3 h-px bg-emerald-400/70" />
            <div className="absolute top-4 right-4 w-px h-3 bg-emerald-400/70" />
          </div>
      );
    case "ux-research":
      return (
        <div className="absolute inset-0 opacity-70">
            {/* User persona circles with connecting journey lines */}
            <div className="absolute top-8 left-8 w-8 h-8 border-2 border-blue-400/70 rounded-full bg-blue-400/10" style={{ animation: 'fadeInScale 0.3s ease-out forwards' }}>
              <div className="absolute inset-1 rounded-full bg-blue-400/30" />
            </div>
            <div className="absolute top-20 right-12 w-8 h-8 border-2 border-purple-400/70 rounded-full bg-purple-400/10" style={{ animation: 'fadeInScale 0.5s ease-out forwards' }}>
              <div className="absolute inset-1 rounded-full bg-purple-400/30" />
            </div>
            <div className="absolute bottom-16 left-16 w-8 h-8 border-2 border-pink-400/70 rounded-full bg-pink-400/10" style={{ animation: 'fadeInScale 0.7s ease-out forwards' }}>
              <div className="absolute inset-1 rounded-full bg-pink-400/30" />
            </div>
            <div className="absolute bottom-12 right-8 w-8 h-8 border-2 border-cyan-400/70 rounded-full bg-cyan-400/10" style={{ animation: 'fadeInScale 0.9s ease-out forwards' }}>
              <div className="absolute inset-1 rounded-full bg-cyan-400/30" />
            </div>
            
            {/* Journey flow lines connecting users */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="15%" y1="15%" x2="75%" y2="35%" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'drawLine 2s ease-out forwards' }} />
              <line x1="75%" y1="35%" x2="55%" y2="75%" stroke="rgba(192, 132, 252, 0.4)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'drawLine 2s ease-out 0.3s forwards' }} />
              <line x1="20%" y1="70%" x2="75%" y2="80%" stroke="rgba(244, 114, 182, 0.4)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'drawLine 2s ease-out 0.6s forwards' }} />
            </svg>
            
            {/* Feedback/quote bubbles */}
            <div className="absolute top-6 right-20 text-[10px] text-cyan-300/60 font-mono">"Easy to use"</div>
            <div className="absolute bottom-8 left-6 text-[10px] text-pink-300/60 font-mono">"Intuitive"</div>
            
            {/* Data insight points */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                style={{
                  left: `${(i * 31 + 10) % 85}%`,
                  top: `${(i * 43 + 15) % 80}%`,
                  animation: `pulse 2s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
            
            {/* Heatmap overlay */}
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-xl" />
          </div>
      );
    case "prototyping":
      return (
        <div className="absolute inset-0 opacity-70">
            {/* Animation timeline with keyframes */}
            <div className="absolute top-12 left-4 right-4 h-1 bg-white/20 rounded-full" style={{ animation: 'fadeInScale 0.3s ease-out forwards' }}>
              {/* Playhead scrubber */}
              <div className="absolute top-1/2 -translate-y-1/2 w-0.5 h-6 bg-red-400/80" style={{ 
                left: '0%',
                animation: 'slidePlayhead 10s ease-in-out infinite'
              }} />
              
              {/* Keyframe markers */}
              {[0, 25, 50, 75, 100].map((pos, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400/70 rounded-sm rotate-45"
                  style={{
                    left: `${pos}%`,
                    animation: `fadeInScale ${0.4 + i * 0.1}s ease-out forwards`,
                  }}
                />
              ))}
            </div>
            
            {/* Animated element showing motion path */}
            <div 
              className="absolute w-8 h-8 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-lg"
              style={{
                top: '40%',
                left: '20%',
                animation: 'bounceElement 30s ease-in-out infinite',
              }}
            />
            
            {/* Motion path trail */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
                  <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
                </linearGradient>
              </defs>
              <path 
                d="M 80 120 Q 150 80, 220 120 T 340 120" 
                stroke="url(#pathGradient)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
                fill="none" 
                style={{ animation: 'drawLine 2s ease-out forwards' }} 
              />
            </svg>
            
            {/* Transform properties panel */}
            <div className="absolute bottom-8 left-4 space-y-1 text-[8px] font-mono" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
              <div className="text-cyan-400/70">X: <span className="text-white/50">120px</span></div>
              <div className="text-green-400/70">Y: <span className="text-white/50">40px</span></div>
              <div className="text-purple-400/70">Scale: <span className="text-white/50">1.2</span></div>
              <div className="text-pink-400/70">Rotate: <span className="text-white/50">15°</span></div>
            </div>
            
            {/* Easing curves */}
            <div className="absolute bottom-8 right-4 space-y-2" style={{ animation: 'fadeInScale 0.8s ease-out forwards' }}>
              <svg width="50" height="30" className="opacity-60">
                <path d="M 2 28 C 2 28, 15 2, 48 2" stroke="rgba(250, 204, 21, 0.6)" strokeWidth="1.5" fill="none" />
                <circle cx="2" cy="28" r="1.5" fill="rgba(250, 204, 21, 0.8)" />
                <circle cx="48" cy="2" r="1.5" fill="rgba(250, 204, 21, 0.8)" />
              </svg>
              <div className="text-[7px] text-yellow-400/60">ease-out</div>
            </div>
            
            {/* Spring physics indicator */}
            <div className="absolute top-16 right-6" style={{ animation: 'fadeInScale 0.7s ease-out forwards' }}>
              <div className="text-[9px] text-emerald-400/60 font-mono mb-1">Spring</div>
              <div className="flex items-end gap-0.5">
                {[3, 6, 4, 7, 5, 8, 6, 4].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-emerald-400/50 rounded-t"
                    style={{ 
                      height: `${h * 2}px`,
                      animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Duration labels */}
            <div className="absolute top-6 left-4 text-[8px] font-mono text-orange-400/60" style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}>
              0ms
            </div>
            <div className="absolute top-6 right-4 text-[8px] font-mono text-orange-400/60" style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}>
              10000ms
            </div>
            
            {/* Interaction gesture icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-1" style={{ animation: 'fadeInScale 1s ease-out forwards' }}>
              <div className="text-white/10 text-2xl text-center">↔</div>
              <div className="text-[7px] text-white/30 text-center">Drag</div>
            </div>
          </div>
      );
    default:
      return null;
  }
};

export const ServiceCard = ({
  icon,
  title,
  desc,
  effectType,
}: ServiceCardProps) => {
  const [effectActive, setEffectActive] = useState(false);

  return (
    <div
      className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
      onClick={() => setEffectActive(!effectActive)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          effectActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {getCardEffect(effectType)}
      </div>
      <div className="relative z-10">
        <div className="size-14 border border-white/30 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          {getIcon(icon)}
        </div>
        <h3 className="text-2xl text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};
