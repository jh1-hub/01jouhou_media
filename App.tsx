
import React, { useState } from 'react';
import { INFO_SOURCES } from './constants.js';
import { InfoCard } from './components/InfoCard.js';
import { AudioPlayer } from './components/AudioPlayer.js';
import { Newsletter } from './components/Newsletter.js';
import { SNSPost } from './components/SNSPost.js';
import { ArrowLeft } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleInfoSelect = (id) => {
    setSelectedInfo(id);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    // Stop any ongoing speech when going back
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setCurrentView('home');
    setSelectedInfo(null);
  };

  const renderDetail = () => {
    if (!selectedInfo) return null;
    const info = INFO_SOURCES[selectedInfo];

    return (
      <div className="min-h-screen pb-20">
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <button 
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-bold transition-all group"
            >
              <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
              <span>トップへ戻る</span>
            </button>
            <div className="text-center flex-1">
              <h1 className="text-xl font-black text-gray-900 tracking-tight">情報 {info.id}</h1>
            </div>
            <div className="w-24" />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-12 animate-in fade-in zoom-in-95 duration-500">
            {selectedInfo === 'A' && <SNSPost />}
            {selectedInfo === 'B' && <Newsletter />}
            {selectedInfo === 'C' && <AudioPlayer />}
          </div>
        </main>
      </div>
    );
  };

  const renderHome = () => (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-16 md:mb-24">
        <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-200 uppercase tracking-widest">
          Information Literacy Digital Material
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-tight italic">
          修学旅行の情報を<br className="md:hidden" />くらべよう
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          同じ出来事でも、情報源が違うと伝わり方はどう変わる？<br className="hidden md:inline" />
          3つの情報を調査して、プリントにまとめましょう。
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
        {Object.values(INFO_SOURCES).map((source) => (
          <InfoCard 
            key={source.id}
            source={source} 
            onClick={() => handleInfoSelect(source.id)} 
          />
        ))}
      </div>

      <footer className="mt-32 text-center text-gray-400 font-bold text-sm">
        <p>※本アプリはオフライン環境でも動作します</p>
        <p className="mt-2">&copy; 2025 情報教育デジタル教材開発ユニット</p>
      </footer>
    </div>
  );

  return (
    <div className="antialiased min-h-screen bg-[#fcfdfe] text-slate-900">
      {currentView === 'home' ? renderHome() : renderDetail()}
    </div>
  );
};

export default App;
