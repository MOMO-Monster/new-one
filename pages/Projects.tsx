import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { LayoutGrid, List } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ProjectCategory)];

  return (
    <div className="pt-24 md:pt-32 pb-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">Index</h1>
          <p className="text-zinc-400 max-w-md text-sm md:text-base">
            Selected works demonstrating the intersection of brand aesthetics and operational efficiency.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-end self-end md:self-auto">
           {/* View Toggle */}
           <div className="flex bg-zinc-900 border border-zinc-800 rounded-lg p-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-mono text-xs md:text-sm border transition-all whitespace-nowrap ${
              filter === cat 
                ? 'bg-acid-green text-black border-acid-green font-bold' 
                : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={`
        ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8' : 'flex flex-col gap-4'}
      `}>
        {filteredProjects.map(project => (
          <Link 
            key={project.id} 
            to={`/project/${project.id}`}
            className={`group ${viewMode === 'grid' ? 'block' : 'flex items-center gap-4 md:gap-8 border-b border-zinc-900 py-4 md:py-6 hover:bg-zinc-900/50 px-2 md:px-4 rounded-lg transition-colors'}`}
          >
            {viewMode === 'grid' ? (
              // Grid View Card
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 relative">
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 bg-black/50 backdrop-blur text-acid-green text-xs font-mono rounded-full border border-zinc-700">
                      {project.category}
                     </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-acid-green transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{project.client} • {project.year}</p>
                </div>
              </div>
            ) : (
              // List View Row
              <>
                <div className="w-24 h-24 md:w-32 md:h-24 shrink-0 rounded-lg overflow-hidden bg-zinc-900 hidden md:block">
                   <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-grow">
                   <h3 className="text-xl md:text-3xl font-display font-bold text-white group-hover:text-acid-green transition-colors">{project.title}</h3>
                   <div className="flex gap-2 md:gap-4 text-zinc-500 font-mono text-xs md:text-sm mt-1 md:mt-2">
                      <span>{project.category}</span>
                      <span className="hidden md:inline">—</span>
                      <span className="hidden md:inline">{project.client}</span>
                   </div>
                </div>
                <div className="hidden md:flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-acid-green group-hover:border-acid-green transition-all shrink-0">
                   <span className="text-zinc-400 group-hover:text-black text-sm md:text-base">↗</span>
                </div>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;