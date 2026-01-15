import React from 'react';
import { RESOURCES } from '../constants';
import { Book, Globe, PenTool, ExternalLink } from 'lucide-react';

const ResourceList: React.FC = () => {
  return (
    <div className="bg-black text-white p-6 md:p-8 h-full flex flex-col">
       <h3 className="text-2xl font-bold mb-6 border-b border-neutral-700 pb-4 uppercase tracking-wider">
        参考资料 Resources
      </h3>
      <div className="space-y-4 overflow-y-auto hide-scrollbar flex-grow">
        {RESOURCES.map((res, idx) => (
          <div key={idx} className="flex items-start group">
            <div className="mt-1 mr-4 text-neutral-500 group-hover:text-white transition-colors">
              {res.type === 'book' && <Book size={18} />}
              {res.type === 'web' && <Globe size={18} />}
              {res.type === 'tool' && <PenTool size={18} />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                 <p className="font-medium text-lg leading-tight group-hover:underline decoration-neutral-500 underline-offset-4">
                  {res.title}
                </p>
                {res.url && <ExternalLink size={14} className="ml-2 opacity-50" />}
              </div>
             
              {res.author && (
                <p className="text-neutral-400 text-sm mt-1 font-mono">
                   {res.author}
                </p>
              )}
               {res.type === 'tool' && (
                <p className="text-neutral-500 text-xs mt-1 uppercase tracking-wide">
                   AI / Design Tool
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t border-neutral-800 text-neutral-500 text-xs font-mono">
        RECOMMENDED LEARNING PATH
      </div>
    </div>
  );
};

export default ResourceList;