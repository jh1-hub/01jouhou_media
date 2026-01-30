
import React from 'react';
import { MessageCircle, Repeat2, Heart, Share, MoreHorizontal, CheckCircle2, Bookmark, BarChart3 } from 'lucide-react';
import { INFO_SOURCES } from '../constants.js';

const Reply = ({ user, id, text, color }) => (
  <div className="p-4 flex space-x-3 border-t border-gray-100">
    <div className={`w-10 h-10 rounded-full ${color} flex-shrink-0 flex items-center justify-center text-white font-bold text-lg`}>
      {user[0]}
    </div>
    <div className="flex-1">
      <div className="flex items-center space-x-1">
        <span className="font-bold text-gray-900 text-sm">{user}</span>
        <span className="text-gray-500 text-xs">@{id}</span>
        <span className="text-gray-500 text-xs">·</span>
        <span className="text-gray-500 text-xs">15分前</span>
      </div>
      <p className="text-sm text-gray-800 mt-1">{text}</p>
      <div className="mt-3 flex justify-between text-gray-500 max-w-[200px]">
        <MessageCircle className="w-4 h-4 cursor-pointer hover:text-blue-500" />
        <Repeat2 className="w-4 h-4 cursor-pointer hover:text-green-500" />
        <Heart className="w-4 h-4 cursor-pointer hover:text-pink-500" />
        <Share className="w-4 h-4 cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  </div>
);

export const SNSPost = () => {
  const info = INFO_SOURCES.A;
  const replyColors = ['bg-orange-400', 'bg-teal-400', 'bg-rose-400'];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden font-sans">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
         <h4 className="font-bold text-gray-900">ポスト</h4>
         <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </div>

      <div className="p-4 flex space-x-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white font-black text-xl shadow-lg">
          T
        </div>

        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-gray-900">とある中学生</span>
                <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" />
              </div>
              <span className="text-gray-500 text-sm">@2nen_seito</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-4">
            <p className="text-[1.4rem] leading-tight text-gray-900 font-medium">
              {info.content}
            </p>
          </div>

          <div className="mt-4 text-gray-500 text-sm pb-4 border-b border-gray-100">
             <span>午後6:21 · 2025年8月3日</span> · <span className="font-bold text-gray-900">1.2万</span> 表示
          </div>

          {/* Detailed Metrics */}
          <div className="py-4 border-b border-gray-100 flex space-x-6">
            <div className="text-sm"><span className="font-bold text-gray-900">48</span> <span className="text-gray-500">リポスト</span></div>
            <div className="text-sm"><span className="font-bold text-gray-900">324</span> <span className="text-gray-500">いいね</span></div>
            <div className="text-sm"><span className="font-bold text-gray-900">15</span> <span className="text-gray-500">ブックマーク</span></div>
          </div>

          {/* Action Bar */}
          <div className="py-1 flex justify-between text-gray-500 px-2">
            <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded-full transition-colors cursor-pointer"><MessageCircle className="w-5 h-5" /></div>
            <div className="p-2 hover:bg-green-50 hover:text-green-500 rounded-full transition-colors cursor-pointer"><Repeat2 className="w-5 h-5" /></div>
            <div className="p-2 hover:bg-pink-50 hover:text-pink-500 rounded-full transition-colors cursor-pointer"><Heart className="w-5 h-5" /></div>
            <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded-full transition-colors cursor-pointer"><Bookmark className="w-5 h-5" /></div>
            <div className="p-2 hover:bg-blue-50 hover:text-blue-500 rounded-full transition-colors cursor-pointer"><Share className="w-5 h-5" /></div>
          </div>
        </div>
      </div>

      {/* Replies Section */}
      <div className="bg-gray-50/50">
        {/* Added optional chaining to ensure safety if replies are undefined */}
        {info.replies?.map((reply, idx) => (
          <Reply key={idx} {...reply} color={replyColors[idx % replyColors.length]} />
        ))}
      </div>
      
      <div className="p-4 bg-white border-t border-gray-100">
        <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors text-sm">
          返信をさらに表示
        </button>
      </div>
    </div>
  );
};
