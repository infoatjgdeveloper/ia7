
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'PROTOCOL LOADED. IA7 GLOBAL TECH SYSTEMS AGENT READY. STATE YOUR INQUIRY.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input.toUpperCase() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const result = await getGeminiResponse(input);
    
    setMessages(prev => [...prev, { 
      role: 'model', 
      text: result.text.toUpperCase(),
      sources: result.sources 
    }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[200]">
      {isOpen ? (
        <div className="w-80 md:w-[450px] h-[650px] bg-white border border-black shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] flex flex-col animate-reveal">
          <div className="p-8 border-b border-black flex items-center justify-between bg-black text-white">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[#0047ff] animate-pulse" />
              <span className="font-black text-[10px] tracking-[0.5em] uppercase">SYSTEM // IA7GT-ASSIST</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#0047ff] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 mono bg-zinc-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-6 text-[13px] leading-relaxed font-bold tracking-tight ${
                  msg.role === 'user' 
                  ? 'bg-black text-white' 
                  : 'border border-black/10 text-zinc-900 bg-white'
                }`}>
                  <div className="text-[9px] uppercase tracking-widest text-zinc-400 mb-4">
                    {msg.role === 'user' ? 'CLIENT_REQUEST' : 'SYSTEM_REPLY'}
                  </div>
                  {msg.text}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-black/5">
                      <div className="text-[9px] text-zinc-400 uppercase font-black tracking-widest mb-4">Technical Database</div>
                      <div className="flex flex-col gap-2">
                        {msg.sources.map((src, sIdx) => (
                          <a key={sIdx} href={src.uri} target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#0047ff] hover:underline">
                             {src.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="text-[10px] font-black uppercase text-[#0047ff] animate-pulse">PROCESSING DATA STREAM...</div>
              </div>
            )}
          </div>
          
          <div className="p-10 border-t border-black bg-white">
            <div className="relative flex gap-4">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="INPUT COMMAND..."
                className="w-full border-b-2 border-black/10 pb-4 text-sm focus:outline-none focus:border-[#0047ff] transition-all text-black font-bold uppercase tracking-widest"
              />
              <button 
                onClick={handleSend}
                className="text-black hover:text-[#0047ff] transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-24 h-24 bg-black text-white hover:bg-[#0055ff] transition-all hover:scale-105 flex flex-col items-center justify-center gap-2 shadow-2xl group"
        >
          <div className="w-3 h-3 bg-[#0055ff] group-hover:bg-white transition-colors" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">IA7G AI</span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
