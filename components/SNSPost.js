
import React from 'react';
import { MessageCircle, Repeat2, Heart, Share, MoreHorizontal, CheckCircle2, Bookmark } from 'lucide-react';
import { INFO_SOURCES } from '../constants.js';

const Reply = ({ user, id, text, color }) => (
  React.createElement('div', { className: "p-4 flex space-x-3 border-t border-gray-100 hover:bg-gray-50 transition-colors" },
    React.createElement('div', { 
      className: `w-10 h-10 rounded-full ${color} flex-shrink-0 flex items-center justify-center text-white font-bold shadow-sm` 
    }, user[0]),
    React.createElement('div', { className: "flex-1" },
      React.createElement('div', { className: "flex items-center space-x-1" },
        React.createElement('span', { className: "font-bold text-gray-900 text-sm" }, user),
        React.createElement('span', { className: "text-gray-500 text-xs" }, `@${id}`),
        React.createElement('span', { className: "text-gray-400 text-xs" }, "·"),
        React.createElement('span', { className: "text-gray-400 text-xs" }, "2時間前")
      ),
      React.createElement('p', { className: "text-sm text-gray-800 mt-1 leading-snug" }, text),
      React.createElement('div', { className: "flex items-center space-x-4 mt-2" },
        React.createElement(MessageCircle, { className: "w-4 h-4 text-gray-400" }),
        React.createElement(Heart, { className: "w-4 h-4 text-gray-400" })
      )
    )
  )
);

export const SNSPost = () => {
  const info = INFO_SOURCES.C;
  return React.createElement('div', { className: "max-w-xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden" },
    React.createElement('div', { className: "p-4 border-b border-gray-50 bg-white sticky top-0 z-10 flex justify-between items-center backdrop-blur-md bg-white/90" },
       React.createElement('h4', { className: "font-black text-gray-900 text-lg" }, "ポスト"),
       React.createElement(MoreHorizontal, { className: "text-gray-500 w-5 h-5 cursor-pointer" })
    ),
    React.createElement('div', { className: "p-6" },
      React.createElement('div', { className: "flex space-x-3 mb-4" },
        React.createElement('div', { className: "w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-lg" }, "T"),
        React.createElement('div', { className: "flex flex-col" },
          React.createElement('div', { className: "flex items-center gap-1" },
             React.createElement('span', { className: "font-bold text-gray-900 text-lg" }, "とある中学生"),
             React.createElement(CheckCircle2, { className: "w-4 h-4 text-blue-500" })
          ),
          React.createElement('span', { className: "text-gray-500 text-sm" }, "@2nen_seito")
        )
      ),
      React.createElement('p', { className: "text-[1.5rem] leading-[1.3] text-gray-900 font-bold tracking-tight mt-4 whitespace-pre-wrap" }, info.content),
      React.createElement('div', { className: "mt-6 text-gray-500 text-sm font-medium pb-4 border-b border-gray-100" }, "午後6:21 · 2025年8月3日"),
      React.createElement('div', { className: "py-2 flex justify-around text-gray-500" },
        React.createElement(MessageCircle, { className: "w-6 h-6 cursor-pointer hover:text-blue-500" }),
        React.createElement(Repeat2, { className: "w-6 h-6 cursor-pointer hover:text-green-500" }),
        React.createElement(Heart, { className: "w-6 h-6 cursor-pointer hover:text-pink-500" }),
        React.createElement(Share, { className: "w-6 h-6 cursor-pointer hover:text-blue-500" })
      )
    ),
    React.createElement('div', { className: "bg-gray-50/50" },
      info.replies?.map((reply, idx) => React.createElement(Reply, { key: idx, ...reply }))
    )
  );
};
