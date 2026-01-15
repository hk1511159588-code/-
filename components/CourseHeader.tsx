import React from 'react';
import { COURSE_INFO } from '../constants';
import { ArrowDownRight, BookOpen, Clock, GraduationCap } from 'lucide-react';

const CourseHeader: React.FC = () => {
  return (
    <header className="w-full border-b-2 border-black bg-white p-6 md:p-12 lg:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <h1 className="text-[10rem] font-bold leading-none tracking-tighter select-none">VIS</h1>
      </div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 text-sm font-mono mb-4">
              {COURSE_INFO.code}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-black">
              {COURSE_INFO.title}
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-neutral-500 tracking-wide">
              {COURSE_INFO.englishTitle}
            </h2>
          </div>
          <div className="mt-8 md:mt-0 flex items-center space-x-2 text-sm font-mono border border-black px-4 py-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>2025 EDITION</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-dashed border-gray-300 pt-8">
          <div className="space-y-2">
            <div className="flex items-center text-gray-500 text-sm mb-1">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>学分</span>
            </div>
            <p className="text-xl font-medium">{COURSE_INFO.credits}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-gray-500 text-sm mb-1">
              <Clock className="w-4 h-4 mr-2" />
              <span>学时</span>
            </div>
            <p className="text-xl font-medium">{COURSE_INFO.hours}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-gray-500 text-sm mb-1">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>类型</span>
            </div>
            <p className="text-xl font-medium">{COURSE_INFO.type}</p>
          </div>
          <div className="md:text-right flex md:justify-end items-end">
             <ArrowDownRight className="w-12 h-12 text-black opacity-20" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;