
import React from 'react';
import { Mic, Newspaper, MessageSquare, ChevronRight } from 'lucide-react';

export const InfoCard = ({ source, onClick }) => {
  const IconComponent = {
    mic: Mic,
    newspaper: Newspaper,
    'message-square': MessageSquare
  }[source.icon] || Mic;

  return React.createElement('button', {
    onClick: onClick,
    className: "group relative bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-blue-500 hover:shadow-md transition-all duration-300 text-left flex items-center space-x-6 w-full"
  }, 
    React.createElement('div', { className: "bg-blue-50 p-4 rounded-xl group-hover:bg-blue-100 transition-colors" }, 
      React.createElement(IconComponent, { className: "w-8 h-8 text-blue-600" })
    ),
    React.createElement('div', { className: "flex-1" }, 
      React.createElement('div', { className: "flex items-center justify-between mb-1" }, 
        React.createElement('span', { className: "text-sm font-bold text-blue-500 tracking-wider" }, `情報 ${source.id}`)
      ),
      React.createElement('h3', { className: "text-xl font-bold text-gray-800 mb-1" }, source.title),
      React.createElement('p', { className: "text-gray-500 text-sm font-medium" }, source.description)
    ),
    React.createElement(ChevronRight, { className: "w-6 h-6 text-gray-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" })
  );
};
