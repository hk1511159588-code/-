import React, { useState } from 'react';
import { CourseModule } from '../types';
import { ChevronDown, ChevronUp, Target, AlertCircle, Layers } from 'lucide-react';

interface ModuleCardProps {
  module: CourseModule;
  isLast: boolean;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group border-b border-black ${isLast ? '' : ''} transition-all duration-300 bg-white`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-neutral-50 transition-colors focus:outline-none"
      >
        <div className="flex items-start md:items-center space-x-6">
          <span className="text-4xl md:text-5xl font-bold text-neutral-200 group-hover:text-black transition-colors font-mono">
            0{module.id}
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-black group-hover:underline decoration-2 underline-offset-4">
              {module.title}
            </h3>
            <div className="flex items-center mt-2 text-sm text-neutral-500 font-mono space-x-4">
              <span className="bg-neutral-100 px-2 py-0.5 rounded text-xs border border-neutral-200 uppercase tracking-wider">
                {module.type}
              </span>
              <span>{module.hours} 学时</span>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 self-end md:self-center">
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      {/* Accordion Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 md:p-8 pt-0 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 border-l-2 border-black pl-6 space-y-4">
            <h4 className="font-bold text-lg flex items-center">
              <Target className="w-4 h-4 mr-2" /> 教学目标
            </h4>
            <ul className="list-disc list-outside ml-4 text-neutral-600 space-y-2 text-sm leading-relaxed">
              {module.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 border-l-2 border-neutral-200 pl-6 space-y-4">
             <h4 className="font-bold text-lg flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" /> 重点难点
            </h4>
            <ul className="text-neutral-600 space-y-3 text-sm leading-relaxed">
              {module.keyPoints.map((point, i) => (
                <li key={i} className="bg-neutral-50 p-2 rounded-sm border border-neutral-100">
                  {point}
                </li>
              ))}
            </ul>
          </div>

           <div className="md:col-span-4 border-l-2 border-neutral-200 pl-6 space-y-4">
             <h4 className="font-bold text-lg flex items-center">
              <Layers className="w-4 h-4 mr-2" /> 交付成果
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {module.deliverables ? module.deliverables : "课堂练习与阶段性汇报"}
            </p>
            <div className="mt-4 p-4 bg-black text-white text-xs font-mono">
              <p className="opacity-70 mb-1">MODULE DESCRIPTION</p>
              {module.description}
            </div>
          </div>

        </div>
        <div className="h-4 bg-neutral-50 border-t border-neutral-100 mx-6 md:mx-8 mb-6 rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default ModuleCard;