import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import StatsDashboard from '../components/StatsDashboard';
import { ArrowLeft, ArrowUp } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle ESC key to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/projects');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!project) return <div className="text-white pt-40 text-center">Project not found</div>;

  return (
    <div className="bg-black min-h-screen pb-32">
      {/* Immersive Header */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        
        {/* Navigation Back - Positioned safely for mobile */}
        <Link 
          to="/projects" 
          className="absolute top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-3 bg-zinc-950/80 backdrop-blur-md px-4 py-2 md:px-5 md:py-3 rounded-full border border-zinc-800 text-white hover:border-acid-green hover:text-acid-green transition-all duration-300 group shadow-lg"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform md:w-[18px]" /> 
          <span className="font-display font-bold text-xs md:text-sm tracking-wide">BACK</span>
          <span className="hidden md:inline-block text-[10px] font-mono text-zinc-500 border-l border-zinc-700 pl-3 ml-1">ESC</span>
        </Link>

        {/* Title Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-8">
            <div>
              <span className="inline-block px-3 py-1 bg-acid-green text-black font-bold font-mono text-xs md:text-sm mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-4 md:mb-6 leading-none break-words">
                {project.title}
              </h1>
              <div className="flex flex-col md:flex-row md:gap-6 text-zinc-400 font-mono text-xs md:text-sm">
                <div>CLIENT: <span className="text-white">{project.client}</span></div>
                <div>YEAR: <span className="text-white">{project.year}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-b border-zinc-900 pb-12 md:pb-16">
          <div className="md:col-span-1">
             <h4 className="text-zinc-500 font-mono text-sm mb-4">THE CHALLENGE</h4>
             <div className="flex flex-wrap gap-2">
               {project.tags.map(tag => (
                 <span key={tag} className="text-xs text-acid-green border border-acid-green/30 px-2 py-1 rounded-sm">{tag}</span>
               ))}
             </div>
          </div>
          <div className="md:col-span-3">
             <p className="text-lg md:text-2xl font-light text-zinc-200 leading-relaxed">
               {project.summary}
             </p>
          </div>
        </div>
      </div>

      {/* Content Builder */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
        {project.blocks.map((block, index) => {
          switch (block.type) {
            case 'text':
              return (
                <div key={index} className="max-w-2xl mx-auto">
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed border-l-2 border-acid-green pl-4 md:pl-6">
                    {block.content}
                  </p>
                </div>
              );
            case 'image':
              return (
                <div key={index} className="rounded-2xl overflow-hidden border border-zinc-800">
                  <img src={block.src} alt={block.alt} className="w-full h-auto" />
                  {block.alt && <p className="text-zinc-600 text-xs font-mono mt-2 text-center px-4">{block.alt}</p>}
                </div>
              );
            case 'stats':
              if (block.statsData && block.chartData) {
                return (
                  <StatsDashboard key={index} stats={block.statsData} chartData={block.chartData} />
                );
              }
              return null;
            case 'gallery':
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {block.galleryImages?.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-zinc-800">
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Footer - Scroll to Top */}
      <div className="mt-24 md:mt-32 border-t border-zinc-900 pt-12 md:pt-16 flex flex-col items-center justify-center">
        <button 
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-4 text-zinc-500 hover:text-white transition-colors"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-acid-green transition-all duration-300">
            <ArrowUp size={20} className="group-hover:text-acid-green group-hover:-translate-y-1 transition-transform md:w-6 md:h-6" />
          </div>
          <span className="font-mono text-xs tracking-widest uppercase">Back to Top</span>
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;