import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ASSESSMENT_DATA } from '../constants';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p className="font-bold text-sm">{payload[0].name}</p>
        <p className="text-sm font-mono mt-1">{payload[0].value}%</p>
        <p className="text-xs text-gray-500 mt-1">{payload[0].payload.details}</p>
      </div>
    );
  }
  return null;
};

const AssessmentChart: React.FC = () => {
  return (
    <div className="bg-white border border-black p-6 md:p-8 h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-6 border-b border-black pb-4 uppercase tracking-wider">
        课程考核 Assessment
      </h3>
      <div className="flex-grow min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={ASSESSMENT_DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {ASSESSMENT_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="black" strokeWidth={1} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="square"
              formatter={(value, entry: any) => (
                <span className="ml-2 text-sm font-medium text-black">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 text-xs text-gray-500 font-mono text-center border-t border-dashed border-gray-300 pt-4">
        OBE Evaluation System
      </div>
    </div>
  );
};

export default AssessmentChart;