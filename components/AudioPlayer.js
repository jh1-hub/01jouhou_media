
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, FileText, Calendar, MapPin, Mic, Volume2 } from 'lucide-react';
import { PRINCIPAL_MESSAGE, INFO_SOURCES } from '../constants.js';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const utteranceRef = useRef(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const playVoice = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(PRINCIPAL_MESSAGE);
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(v => v.lang.includes('ja')) || voices[0];
    if (japaneseVoice) utterance.voice = japaneseVoice;
    
    utterance.pitch = 0.85;
    utterance.rate = 0.85;
    utterance.volume = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handleReset = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return React.createElement('div', { className: "bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xl mx-auto overflow-hidden relative" },
    React.createElement('div', { className: "absolute inset-0 bg-amber-50/10 pointer-events-none" }),
    React.createElement('div', { className: "relative z-10 text-center mb-8" },
      React.createElement('div', { className: "flex flex-col items-center space-y-2 mb-6" },
        React.createElement('div', { className: "inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100" },
          React.createElement(Calendar, { className: "w-4 h-4 mr-2" }),
          `発信日：${INFO_SOURCES.A.date}`
        ),
        React.createElement('div', { className: "inline-flex items-center px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-bold border border-amber-100" },
          React.createElement(MapPin, { className: "w-4 h-4 mr-2" }),
          `シチュエーション：${INFO_SOURCES.A.description}`
        )
      ),
      React.createElement('div', { className: "w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-100 relative" },
        React.createElement(Mic, { className: `w-10 h-10 text-blue-600 ${isPlaying ? 'animate-bounce' : ''}` }),
        isPlaying && React.createElement('div', { className: "absolute -inset-2 rounded-full border-4 border-blue-200 animate-ping opacity-25" })
      ),
      React.createElement('h3', { className: "text-2xl font-bold text-gray-800 tracking-tight" }, INFO_SOURCES.A.title)
    ),
    React.createElement('div', { className: "relative z-10 flex items-center justify-center space-x-6 mb-8" },
      React.createElement('button', { 
        onClick: handleReset, 
        className: "p-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors",
        title: "最初から"
      }, React.createElement(RotateCcw, { className: "w-6 h-6" })),
      React.createElement('button', { 
        onClick: playVoice, 
        className: `w-20 h-20 rounded-full flex items-center justify-center shadow-xl transform hover:scale-105 active:scale-95 transition-all ${isPlaying ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`
      }, isPlaying ? React.createElement(Pause, { className: "w-10 h-10 fill-current" }) : React.createElement(Play, { className: "w-10 h-10 fill-current ml-1" })),
      React.createElement('button', { 
        onClick: () => setShowTranscript(!showTranscript), 
        className: `p-4 rounded-full transition-colors ${showTranscript ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`
      }, React.createElement(FileText, { className: "w-6 h-6" }))
    ),
    React.createElement('div', { className: "text-center text-[10px] text-gray-400 font-bold mb-4" }, "端末の内蔵音声を使用して再生中"),
    showTranscript && React.createElement('div', { className: "relative z-10 bg-slate-50 p-6 rounded-2xl border border-slate-200" },
      React.createElement('p', { className: "text-slate-700 text-lg italic font-medium" }, `「${PRINCIPAL_MESSAGE}」`)
    )
  );
};
