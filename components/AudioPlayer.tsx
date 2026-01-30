
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, FileText, Calendar, MapPin, Mic, Volume2 } from 'lucide-react';
import { PRINCIPAL_MESSAGE, INFO_SOURCES } from '../constants.js';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(true);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setVoiceSupported(false);
    }
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

    // Initialize AudioContext for the "Gymnasium Echo" effect
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    // Stop any existing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(PRINCIPAL_MESSAGE);
    
    // Voice settings for "Elderly Principal" feel
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(v => v.lang.includes('ja')) || voices[0];
    if (japaneseVoice) utterance.voice = japaneseVoice;
    
    utterance.pitch = 0.8; // Slightly lower pitch
    utterance.rate = 0.9;  // Slightly slower pace
    utterance.volume = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    
    // Note: Web Speech API doesn't natively route through AudioContext nodes easily 
    // in all browsers, so we simulate the gymnasium "vibe" via UI and clean playback.
  };

  const handleReset = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!voiceSupported) {
    return (
      <div className="bg-red-50 p-6 rounded-2xl text-red-600 border border-red-100">
        お使いのブラウザは音声合成に対応していません。文字起こしを確認してください。
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex flex-col items-center space-y-2 mb-6">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
            <Calendar className="w-4 h-4 mr-2" />
            発信日：{INFO_SOURCES.C.date}
          </div>
          <div className="inline-flex items-center px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-sm font-bold border border-slate-200">
            <MapPin className="w-4 h-4 mr-2" />
            シチュエーション：{INFO_SOURCES.C.description}
          </div>
        </div>
        
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-100 relative overflow-hidden">
          <Mic className={`w-10 h-10 text-blue-600 ${isPlaying ? 'scale-110' : 'scale-100'} transition-transform duration-300`} />
          {isPlaying && (
            <div className="absolute inset-0 bg-blue-400/10 animate-pulse" />
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800">{INFO_SOURCES.C.title}</h3>
        <p className="text-gray-500 text-sm mt-2 font-medium">
          {isPlaying ? '再生中（体育館放送風）' : '再生ボタンを押すと先生の声が流れます'}
        </p>
      </div>

      <div className="flex items-center justify-center space-x-6 mb-8">
        <button 
          onClick={handleReset}
          className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          title="最初から"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
        <button 
          onClick={playVoice}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all ${
            isPlaying ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 fill-current" />
          ) : (
            <Play className="w-8 h-8 fill-current ml-1" />
          )}
        </button>
        <button 
          onClick={() => setShowTranscript(!showTranscript)}
          className={`p-3 rounded-full transition-colors ${showTranscript ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}
          title="文字起こし"
        >
          <FileText className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 font-bold mb-4">
        <Volume2 className="w-3 h-3" />
        <span>端末に内蔵された音声を使用して再生します</span>
      </div>

      {showTranscript && (
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">文字起こし</h4>
          <p className="text-gray-700 leading-relaxed text-lg italic">
            「{PRINCIPAL_MESSAGE}」
          </p>
        </div>
      )}
    </div>
  );
};
