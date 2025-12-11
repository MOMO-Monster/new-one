import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center md:items-start overflow-hidden px-4 md:px-24">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Abstract Fluid Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 ease-in-out scale-105"
          />
          {/* Vignette & Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Background Noise/Grid (Texture Layer) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none z-0"></div>

        {/* Declaration */}
        <div className="z-10 text-center md:text-left max-w-6xl w-full space-y-6 md:space-y-8">
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full border border-zinc-700/50 bg-black/30 backdrop-blur-md text-xs md:text-sm text-zinc-300 font-mono mb-2 md:mb-4 animate-fadeIn shadow-lg">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-acid-green rounded-full animate-pulse"></span>
              OPEN FOR OPPORTUNITIES
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.9] tracking-tighter mix-blend-difference uppercase text-white drop-shadow-2xl">
            Design <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green via-emerald-200 to-white italic pr-4">Portfolio</span>
          </h1>
          
          <p className="text-zinc-300 text-base md:text-xl max-w-2xl font-light leading-relaxed mx-auto md:mx-0 drop-shadow-md bg-black/20 backdrop-blur-sm p-4 rounded-xl md:p-0 md:bg-transparent md:backdrop-blur-none border border-white/5 md:border-none">
            Hybrid Designer & Operations Specialist. 
            I build systems that look beautiful and perform aggressively.
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Link to="/projects" className="group relative px-6 py-3 md:px-8 md:py-4 bg-acid-green text-black font-bold font-display rounded-full overflow-hidden shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-shadow">
              <span className="relative z-10 group-hover:translate-x-1 transition-transform inline-block">VIEW WORK</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Showreel Strip */}
      <div className="w-full bg-acid-green overflow-hidden py-2 md:py-3 mb-16 md:mb-24 border-y-4 border-black relative z-10">
        <div className="animate-marquee whitespace-nowrap flex gap-4 md:gap-8 items-center font-display font-black text-2xl md:text-4xl text-black uppercase tracking-widest">
          <span>Brand Strategy</span> • <span>Visual Design</span> • <span>Operations</span> • <span>Growth Hacking</span> • <span>Data Visualization</span> • <span>Brand Strategy</span> • <span>Visual Design</span> • <span>Operations</span>
        </div>
      </div>

      {/* Bento Grid - Featured Work */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Featured Work</h2>
          <Link to="/projects" className="flex items-center gap-2 text-zinc-400 hover:text-acid-green transition-colors font-mono text-sm md:text-base">
            ALL PROJECTS <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Main Featured Item (Span 2x2) */}
          <Link to={`/project/${featuredProjects[0].id}`} className="group relative md:col-span-2 md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 h-[400px] md:h-auto">
            <img src={featuredProjects[0].coverImage} alt={featuredProjects[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <span className="text-acid-green font-mono text-xs md:text-sm mb-2">{featuredProjects[0].category}</span>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">{featuredProjects[0].title}</h3>
              <p className="text-zinc-400 line-clamp-2 max-w-md text-sm md:text-base">{featuredProjects[0].summary}</p>
            </div>
            {/* Hover Reveal Icon */}
            <div className="hidden md:flex absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <ArrowUpRight className="text-white" />
            </div>
          </Link>

          {/* Secondary Items */}
          {featuredProjects.slice(1).map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="group relative md:col-span-1 rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                <div className="self-end w-8 h-8 bg-black/50 backdrop-blur rounded-full flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-acid-green mb-1 block">{project.category}</span>
                  <h3 className="text-lg md:text-xl font-bold font-display text-white">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Showreel Placeholder Card */}
          <div className="md:col-span-1 rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 relative group cursor-pointer flex items-center justify-center h-[200px] md:h-auto">
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/400/400')] opacity-10 mix-blend-overlay"></div>
             <div className="text-center z-10 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-acid-green flex items-center justify-center mx-auto mb-3 md:mb-4 text-acid-green">
                  <Play fill="currentColor" size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-white font-display font-bold text-lg md:text-xl">WATCH SHOWREEL</h3>
                <p className="text-zinc-500 font-mono text-xs mt-2">00:30 • SOUND ON</p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;