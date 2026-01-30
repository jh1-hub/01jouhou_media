
import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Printer, FileText } from 'lucide-react';
import { NEWSLETTER_CONTENT } from '../constants.js';

export const Newsletter = () => {
  const [zoom, setZoom] = useState(1);
  return React.createElement('div', { className: "flex flex-col items-center max-w-3xl mx-auto px-4" },
    React.createElement('div', { className: "w-full flex justify-end space-x-2 mb-6 sticky top-20 z-10" },
      React.createElement('div', { className: "bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-gray-200 flex" },
        React.createElement('button', { 
          onClick: () => setZoom(z => Math.max(z - 0.2, 0.8)), 
          className: "p-2 text-gray-600 hover:bg-gray-100 rounded-xl" 
        }, React.createElement(ZoomOut, { className: "w-5 h-5" })),
        React.createElement('button', { 
          onClick: () => setZoom(z => Math.min(z + 0.2, 2)), 
          className: "p-2 text-gray-600 hover:bg-gray-100 rounded-xl" 
        }, React.createElement(ZoomIn, { className: "w-5 h-5" }))
      )
    ),
    React.createElement('div', { 
      className: "bg-[#fcfcfc] w-full shadow-2xl border border-gray-200 overflow-hidden relative origin-top transition-transform", 
      style: { transform: `scale(${zoom})`, fontFamily: '"Noto Serif JP", serif' } 
    },
      React.createElement('div', { className: "p-8 md:p-12 border-b-[3px] border-black mx-4 md:mx-8" },
        React.createElement('h1', { className: "text-3xl font-black text-gray-900" }, "中野中学校 PTA広報"),
        React.createElement('p', { className: "text-xs font-bold text-gray-500" }, "2025年7月26日発行")
      ),
      React.createElement('div', { className: "p-8 md:p-12" },
        React.createElement('h2', { className: "text-3xl md:text-5xl font-black mb-10 text-gray-900 underline decoration-blue-600/20 underline-offset-8" }, "来年度修学旅行の行き先を再考"),
        React.createElement('div', { className: "md:columns-2 gap-12 text-lg text-gray-800" },
          React.createElement('p', { className: "font-bold mb-6" }, NEWSLETTER_CONTENT),
          React.createElement('div', { className: "bg-gray-100 p-3 border border-gray-200 mb-6" },
            React.createElement('div', { className: "aspect-video bg-gray-200 flex items-center justify-center text-gray-400" }, "イメージ写真")
          ),
          React.createElement('p', { className: "font-bold" }, "詳細は9月以降に決定する予定です。")
        )
      )
    )
  );
};
