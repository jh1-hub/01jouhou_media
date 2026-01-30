
import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Printer } from 'lucide-react';
import { NEWSLETTER_CONTENT } from '../constants.js';

export const Newsletter = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.8));

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <div className="w-full flex justify-end space-x-2 mb-4 sticky top-16 z-10 bg-slate-50/80 backdrop-blur p-2 rounded-lg">
        <button onClick={handleZoomOut} className="p-2 bg-white border rounded shadow hover:bg-gray-50"><ZoomOut className="w-5 h-5"/></button>
        <button onClick={handleZoomIn} className="p-2 bg-white border rounded shadow hover:bg-gray-50"><ZoomIn className="w-5 h-5"/></button>
        <button onClick={() => window.print()} className="p-2 bg-white border rounded shadow hover:bg-gray-50"><Printer className="w-5 h-5"/></button>
      </div>

      <div className="bg-[#fcfcfc] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden relative ring-1 ring-black/5" style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s', fontFamily: '"Noto Serif JP", serif' }}>
        {/* Newspaper texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}></div>

        <div className="border-y-4 border-black py-4 mb-8 flex justify-between items-center bg-white/50">
          <div className="flex-1 border-r border-black pr-4">
            <h1 className="text-3xl font-black tracking-tighter text-gray-900 leading-none">中野中学校 PTA広報</h1>
            <p className="text-xs font-bold mt-1 text-gray-600">発行部数：850部</p>
          </div>
          <div className="px-6 text-center">
             <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center font-black text-xl mx-auto mb-1">中</div>
             <p className="text-[10px] font-bold">学校章</p>
          </div>
          <div className="flex-1 border-l border-black pl-4 text-right">
            <p className="text-sm font-black text-gray-900 leading-none">第45号 令和7年度</p>
            <p className="text-xl font-black mt-1 text-gray-900">7月号</p>
            <p className="text-xs font-bold mt-1 text-gray-700 tracking-tighter">発行：2025年7月26日</p>
          </div>
        </div>

        <article className="relative">
          <div className="flex items-center justify-between mb-4 border-b border-black/10 pb-2">
             <span className="bg-black text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-widest">School News</span>
             <span className="text-[10px] text-gray-400 font-bold">PTA広報部 特派員報告</span>
          </div>

          <h2 className="text-4xl font-black mb-8 leading-tight text-gray-900 underline decoration-4 decoration-blue-600/30 underline-offset-8">
            来年度修学旅行のお知らせ
          </h2>
          
          <div className="columns-1 md:columns-2 gap-8">
            <div className="relative">
              <span className="float-left text-6xl font-black leading-none mr-2 mt-2 text-blue-600">来</span>
              <p className="text-lg leading-relaxed text-justify mb-4 font-bold text-gray-800 first-letter:text-6xl first-letter:font-black first-letter:mr-2">
                年度からは修学旅行の行き先を変更し、候補を隣県にも含める予定です。
              </p>
              <p className="text-lg leading-relaxed text-justify mb-4 font-bold text-gray-800">
                生徒へのアンケートを2学期始業式以降に実施し、その結果をもとに最終的な決定を行います。
              </p>
              <p className="text-lg leading-relaxed text-justify font-bold text-gray-800">
                これまで通り、安全面を最優先に考えつつ、実りある学習の機会となるよう準備を進めてまいります。詳細は決まり次第お知らせいたします。
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 break-inside-avoid">
              <div className="bg-gray-100 p-2 border-2 border-gray-200 shadow-inner">
                <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-400 italic text-sm p-4 text-center border-dashed border-2 border-gray-300">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded mb-2 flex items-center justify-center">📷</div>
                    行き先候補地の<br/>イメージ写真
                  </div>
                </div>
                <p className="text-[10px] mt-2 text-center font-bold text-gray-500">（写真：イメージ。隣県の観光名所より）</p>
              </div>
              <div className="mt-6 border-l-4 border-gray-300 pl-4 py-2 italic text-sm text-gray-600 font-bold leading-snug">
                「生徒一人ひとりの希望を大切にした、思い出に残る旅行にしたい」<br/>
                <span className="text-xs font-black text-gray-900 not-italic block mt-1">—— 学年主任 談</span>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 pt-4 border-t border-black flex justify-between items-center text-[10px] font-bold text-gray-400">
          <span>(c) 2025 Nakano J.H.S PTA</span>
          <span>禁・無断転載</span>
        </div>
      </div>
    </div>
  );
};
