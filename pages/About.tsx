import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-32 px-4 md:px-6 max-w-5xl mx-auto min-h-screen">
      
      {/* Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
        <div>
           <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 md:mb-8 text-white">
             The <span className="text-acid-green">Hybrid</span>.
           </h1>
           <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-zinc-800 mb-8 relative group">
             <img src="https://picsum.photos/seed/portrait/800/800" alt="Portrait" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
           </div>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            I don't just make things look good; I make them work.
          </p>
          <p className="text-zinc-400 text-sm md:text-base">
            Born from a background in rigorous data operations and raised by a passion for avant-garde design, I sit comfortably in the uncomfortable intersection of Art and Logic.
          </p>
          <p className="text-zinc-400 text-sm md:text-base">
            While most designers run away from Excel sheets, I eat them for breakfast. I use data to inform creative decisions, ensuring that every pixel serves a purpose: <strong>Growth</strong>.
          </p>
          
          <div className="pt-4 md:pt-8 flex flex-col md:flex-row gap-4">
             <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-acid-green transition-colors flex items-center justify-center gap-2">
               <Mail size={18} /> Contact Me
             </button>
             <button className="px-6 py-3 border border-zinc-700 text-white rounded-full hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2">
               <Download size={18} /> Résumé
             </button>
          </div>
        </div>
      </div>

      {/* Skills Radar (Simulated with Bars for cleaner code in this context) */}
      <div className="mb-16 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 border-b border-zinc-800 pb-4">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SKILLS.map(skill => (
             <div key={skill.name}>
               <div className="flex justify-between mb-2">
                 <span className="font-mono text-zinc-400 text-sm">{skill.name}</span>
                 <span className="font-mono text-acid-green text-sm">{skill.level}%</span>
               </div>
               <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-acid-green" 
                   style={{ width: `${skill.level}%` }}
                 ></div>
               </div>
             </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-16 md:mb-24">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 border-b border-zinc-800 pb-4">Trajectory</h2>
        <div className="space-y-12">
           <div className="relative border-l border-zinc-800 pl-8 ml-4">
              <span className="absolute -left-1.5 top-2 w-3 h-3 bg-acid-green rounded-full shadow-[0_0_10px_#ccff00]"></span>
              <span className="text-xs font-mono text-acid-green mb-1 block">2022 - PRESENT</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Lead Product Designer</h3>
              <p className="text-zinc-500 font-mono text-xs md:text-sm mb-4">TechFlow Inc.</p>
              <p className="text-zinc-400 text-sm md:text-base">Spearheaded the redesign of the core dashboard, increasing user retention by 24% in Q3 alone.</p>
           </div>
           
           <div className="relative border-l border-zinc-800 pl-8 ml-4">
              <span className="absolute -left-1.5 top-2 w-3 h-3 bg-zinc-600 rounded-full"></span>
              <span className="text-xs font-mono text-zinc-500 mb-1 block">2020 - 2022</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">Growth Operations Manager</h3>
              <p className="text-zinc-500 font-mono text-xs md:text-sm mb-4">ScaleUp Agency</p>
              <p className="text-zinc-400 text-sm md:text-base">Managed paid acquisition budgets ($50k/mo). Learned that bad design costs money, which drove me to become a designer.</p>
           </div>
        </div>
      </div>

      {/* Contact / Footer */}
      <footer className="border-t border-zinc-900 pt-12 md:pt-16 pb-8">
         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-zinc-500 font-mono text-xs text-center md:text-left">
             © 2024 NEXUS PORTFOLIO.<br/>BUILT WITH REACT & TAILWIND.
           </div>
           <div className="flex gap-6">
             <a href="#" className="text-zinc-400 hover:text-acid-green transition-colors"><Github size={20} /></a>
             <a href="#" className="text-zinc-400 hover:text-acid-green transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="text-zinc-400 hover:text-acid-green transition-colors"><Mail size={20} /></a>
           </div>
         </div>
      </footer>
    </div>
  );
};

export default About;