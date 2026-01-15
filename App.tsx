import React from 'react';
import CourseHeader from './components/CourseHeader';
import ModuleCard from './components/ModuleCard';
import AssessmentChart from './components/AssessmentChart';
import ResourceList from './components/ResourceList';
import { COURSE_MODULES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-[#1a1a1a]">
      {/* Navigation / Brand Bar */}
      <nav className="bg-black text-white px-6 py-3 flex justify-between items-center text-xs font-mono tracking-widest sticky top-0 z-50">
        <span>WENHUA COLLEGE</span>
        <span className="hidden md:inline">DEPT. OF VISUAL COMMUNICATION DESIGN</span>
        <span>2025</span>
      </nav>

      {/* Hero Section */}
      <CourseHeader />

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Intro Text */}
        <section className="mb-16 max-w-3xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Course Objective</h3>
          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            本课程遵循 <span className="font-medium text-black">OBE</span> 理念，旨在培养学生系统性掌握品牌视觉识别体系的核心理论。
            通过数智化工具，独立承担中小型品牌识别系统的调研、策划与设计。
          </p>
        </section>

        {/* Timeline / Modules Section */}
        <section className="mb-20">
          <div className="flex items-end justify-between mb-8 border-b-4 border-black pb-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Teaching Modules</h2>
            <span className="font-mono text-sm hidden md:block">01 — 05</span>
          </div>
          
          <div className="bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border border-black">
            {COURSE_MODULES.map((module, index) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                isLast={index === COURSE_MODULES.length - 1} 
              />
            ))}
          </div>
        </section>

        {/* Info Grid: Assessment & Resources */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="h-[500px] shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <AssessmentChart />
          </div>
          <div className="h-[500px] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <ResourceList />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-4xl font-black mb-4 tracking-tighter text-neutral-200">DESIGN THINKING</p>
          <div className="text-sm font-mono text-gray-500 space-y-1">
            <p>制定人：李静 | 审核人：[审核人]</p>
            <p>© 2025 文华学院 视觉传达设计系</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;