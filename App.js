
import React, { useState } from 'react';
import { INFO_SOURCES } from './constants.js';
import { InfoCard } from './components/InfoCard.js';
import { AudioPlayer } from './components/AudioPlayer.js';
import { Newsletter } from './components/Newsletter.js';
import { SNSPost } from './components/SNSPost.js';
import { ArrowLeft, BookOpen } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleBack = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setCurrentView('home');
    setSelectedInfo(null);
  };

  const renderDetail = () => {
    if (!selectedInfo) return null;
    const info = INFO_SOURCES[selectedInfo];
    
    let ContentComponent;
    if (selectedInfo === 'A') ContentComponent = AudioPlayer;
    else if (selectedInfo === 'B') ContentComponent = Newsletter;
    else if (selectedInfo === 'C') ContentComponent = SNSPost;

    return React.createElement('div', { className: "min-h-screen pb-20 bg-slate-50" },
      React.createElement('header', { className: "bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50 h-20 flex items-center px-4" },
        React.createElement('div', { className: "max-w-4xl w-full mx-auto flex items-center justify-between" },
          React.createElement('button', { 
            onClick: handleBack, 
            className: "flex items-center space-x-2 text-slate-600 hover:text-blue-600 font-bold transition-all px-4 py-2 rounded-xl hover:bg-slate-100" 
          }, 
            React.createElement(ArrowLeft, { className: "w-5 h-5" }),
            React.createElement('span', null, "戻る")
          ),
          React.createElement('div', { className: "text-center" },
            React.createElement('h1', { className: "text-xl font-black text-slate-900" }, `情報 ${info.id}`)
          ),
          React.createElement('div', { className: "w-12" })
        )
      ),
      React.createElement('main', { className: "max-w-5xl mx-auto px-4 py-12" },
        React.createElement(ContentComponent, null)
      )
    );
  };

  const renderHome = () => React.createElement('div', { className: "max-w-4xl mx-auto px-6 py-16 md:py-28" },
    React.createElement('header', { className: "text-center mb-20" },
      React.createElement('div', { className: "inline-block bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black mb-8 tracking-widest uppercase" }, "Information Literacy"),
      React.createElement('h1', { className: "text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-tight italic" },
        "修学旅行の情報を", React.createElement('br', null), "くらべよう"
      ),
      React.createElement('p', { className: "text-xl text-slate-500 font-bold" }, "3つの情報を調査して、プリントに整理しましょう。")
    ),
    React.createElement('div', { className: "grid grid-cols-1 gap-8 max-w-2xl mx-auto" },
      Object.values(INFO_SOURCES).map((source) =>
        React.createElement(InfoCard, { 
          key: source.id, 
          source: source, 
          onClick: () => { setSelectedInfo(source.id); setCurrentView('detail'); } 
        })
      )
    ),
    React.createElement('footer', { className: "mt-40 text-center text-slate-400 text-xs font-black" },
      React.createElement('p', null, "© 2025 情報教育デジタル教材開発ユニット"),
      React.createElement('p', { className: "mt-2" }, "オフライン環境対応版")
    )
  );

  return React.createElement('div', { className: "antialiased min-h-screen bg-[#fcfdfe] text-slate-900 font-sans" }, 
    currentView === 'home' ? renderHome() : renderDetail()
  );
};

export default App;
