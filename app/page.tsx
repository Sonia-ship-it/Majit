"use client"
import React, { useState } from 'react';
import { Instagram, Music, Send, Twitter, X } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-purple-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-lg md:text-xl">(~.~) MOJIK AI</span>
        </div>
        <div className="flex gap-2 md:gap-3">
          <button className="w-9 h-9 md:w-10 md:h-10 bg-pink-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
            <Instagram size={20} className="text-white" />
          </button>
          <button className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
            <Music size={20} className="text-white" />
          </button>
          <button className="w-9 h-9 md:w-10 md:h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
            <Send size={20} className="text-white" />
          </button>
          <button className="w-9 h-9 md:w-10 md:h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
            <Twitter size={20} className="text-white" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="https://pub-ebfb4e01499942d5884e2558c36a4e9c.r2.dev/videos/1008(2).mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-amber-700/40" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 drop-shadow-lg">
            WHERE AI MEETS
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 drop-shadow-lg">
            <span style={{ color: '#90EE90' }}>I</span>
            <span style={{ color: '#DDA0DD' }}>M</span>
            <span style={{ color: '#FF6B6B' }}>a</span>
            <span style={{ color: '#87CEEB' }}>G</span>
            <span style={{ color: '#90EE90' }}>i</span>
            <span style={{ color: '#FFD700' }}>N</span>
            <span style={{ color: '#DDA0DD' }}>a</span>
            <span style={{ color: '#D2691E' }}>T</span>
            <span style={{ color: '#90EE90' }}>i</span>
            <span style={{ color: '#FFA500' }}>O</span>
            <span style={{ color: '#FFD700' }}>N</span>
          </h2>
          
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Mojik AI brings stories, emotions, and play together —
            <br />
            helping kids learn through love and laughter
          </p>
          
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            Join The Waitlist
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-amber-100 to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4">
            <span className="text-4xl md:text-6xl lg:text-7xl font-black">
              <span style={{ color: '#87CEEB' }}>H</span>
              <span style={{ color: '#90EE90' }}>i</span>
              <span style={{ color: '#FFD700' }}>, </span>
              <span style={{ color: '#FF6B6B' }}>I</span>
              <span style={{ color: '#DDA0DD' }}>'</span>
              <span style={{ color: '#FFA500' }}>M </span>
              <span style={{ color: '#FF6B6B' }}>M</span>
              <span style={{ color: '#FFA500' }}>O</span>
              <span style={{ color: '#90EE90' }}>J</span>
              <span style={{ color: '#87CEEB' }}>I</span>
              <span style={{ color: '#FFB6C1' }}>K</span>
              <span style={{ color: '#FFD700' }}>,</span>
            </span>
          </h2>
          <p className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
            A MAGICAL AI TOY HERE
            <br />
            TO GROW WITH YOUR CHILD
          </p>

          {/* Circular Layout Container */}
          <div className="relative mx-auto" style={{ width: '100%', maxWidth: '1200px', height: '900px' }}>
            {/* Decorative dots */}
            <div className="absolute top-32 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-60"></div>
            <div className="absolute top-20 left-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-28 right-1/4 w-10 h-10 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute top-20 right-1/3 w-12 h-12 bg-purple-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-purple-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-32 right-1/4 w-10 h-10 bg-purple-400 rounded-full opacity-60"></div>

            {/* Center Mojik */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
                  <img 
                    src="/Images/baby.png"
                    alt="Mojik Center"
                    className="w-48 h-48 md:w-60 md:h-60 object-contain"
                  />
                </div>
                <div className="absolute top-2 left-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-300 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-300 rounded-full"></div>
                <div className="absolute -bottom-2 right-12 w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Top Left - I spark your curiosity */}
            <div className="absolute top-28 left-8 md:left-16 flex items-start gap-4 z-10">
              <div className="relative flex flex-col items-center">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="./Images/assets_task_01k723sn75f3yrph90wsh918f7_1759934161_img_0 2.png"
                    alt="Kid with Mojik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-300 rounded-full"></div>
              </div>
              <div className="relative mt-8">
                {/* Speech bubble tail */}
                <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <path d="M32 16 L0 8 L0 24 Z" fill="#FCE7F3" />
                  </svg>
                </div>
                <div className="bg-pink-100 rounded-3xl px-6 py-3 shadow-lg">
                  <p className="font-bold text-gray-800 text-sm md:text-base whitespace-nowrap">I spark your curiosity</p>
                </div>
              </div>
            </div>

            {/* Top Right - I make art & crafts */}
            <div className="absolute top-28 right-8 md:right-16 flex items-start gap-4 z-10">
              <div className="relative mt-8">
                {/* Speech bubble tail */}
                <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <path d="M0 16 L32 8 L32 24 Z" fill="#DBEAFE" />
                  </svg>
                </div>
                <div className="bg-blue-100 rounded-3xl px-6 py-3 shadow-lg">
                  <p className="font-bold text-gray-800 text-sm md:text-base whitespace-nowrap">I make art & crafts</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="./Images/20251008_1507_Игрушка с радужным экраном_remix_01k71vcztyfvq9477096baapfy 1.png"
                    alt="Kid making art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Middle Left - I inspire your imagination */}
            <div className="absolute top-1/2 left-4 md:left-12 transform -translate-y-1/2 z-10">
              <div className="relative">
                {/* Speech bubble tail */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-12 h-8">
                  <svg width="48" height="32" viewBox="0 0 48 32">
                    <path d="M0 16 L48 8 L48 24 Z" fill="#E9D5FF" />
                  </svg>
                </div>
                <div className="bg-purple-100 rounded-3xl px-6 py-3 shadow-lg">
                  <p className="font-bold text-gray-800 text-sm md:text-base whitespace-nowrap">I inspire your imagination</p>
                </div>
              </div>
            </div>

            {/* Middle Right - I teach new languages */}
            <div className="absolute top-1/2 right-4 md:right-12 transform -translate-y-1/2 z-10">
              <div className="relative">
                {/* Speech bubble tail */}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-12 h-8">
                  <svg width="48" height="32" viewBox="0 0 48 32">
                    <path d="M48 16 L0 8 L0 24 Z" fill="#CCFBF1" />
                  </svg>
                </div>
                <div className="bg-teal-100 rounded-3xl px-6 py-3 shadow-lg">
                  <p className="font-bold text-gray-800 text-sm md:text-base whitespace-nowrap">I teach new languages</p>
                </div>
              </div>
            </div>

            {/* Bottom Left - I create stories with you */}
            <div className="absolute bottom-32 left-8 md:left-16 flex items-end gap-4 z-10">
              <div className="relative flex flex-col items-center">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="./Images/assets_task_01k7218cwned18jzw84xb5p9x9_1759931409_img_0 1.png"
                    alt="Kid with stories"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-300 rounded-full"></div>
              </div>
              <div className="relative mb-8">
                {/* Speech bubble tail */}
                <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <path d="M32 16 L0 8 L0 24 Z" fill="#FCE7F3" />
                  </svg>
                </div>
                <div className="bg-pink-100 rounded-3xl px-6 py-3 shadow-lg">
                  <p className="font-bold text-gray-800 text-sm md:text-base whitespace-nowrap">I create stories with you</p>
                </div>
              </div>
            </div>

            {/* Bottom Right - I invent fun new games */}
            <div className="absolute bottom-32 right-8 md:right-16 flex items-end gap-4 z-10">
              <div className="relative mb-8">
                {/* Speech bubble tail */}
                <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <path d="M0 16 L32 8 L32 24 Z" fill="#FCE7F3" />
                  </svg>
                </div>
                <div className="bg-pink-100 rounded-3xl px-6 py-3 shadow-lg">
                  <p className="font-bold text-gray-800 text-sm md:text-base whitespace-nowrap">I invent fun new games</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="./Images/20251008_1702_Boy Sleeping Peacefully_remix_01k721yq9mfsb9z1jcp3q90fb8 2.png"
                    alt="Happy kid"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full"></div>
              </div>
            </div>

            {/* Bottom center - I build your confidence */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="relative">
                {/* Decorative lines */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full">
                  <svg width="4" height="60" viewBox="0 0 4 60">
                    <line x1="2" y1="0" x2="2" y2="60" stroke="#C4B5FD" strokeWidth="3" strokeDasharray="5,5"/>
                  </svg>
                </div>
                <div className="bg-purple-200 rounded-3xl px-8 py-4 shadow-lg">
                  <p className="font-bold text-gray-800 text-center text-sm md:text-base">I build your confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 overflow-hidden">
        {/* Wavy top decoration */}
        <div className="absolute top-0 left-0 right-0 h-24">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 Q360,0 720,60 T1440,60 L1440,0 L0,0 Z" fill="#FDE68A" opacity="0.5"/>
            <path d="M0,80 Q360,30 720,80 T1440,80 L1440,0 L0,0 Z" fill="#DDD6FE" opacity="0.3"/>
          </svg>
        </div>

        {/* Wavy bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 Q360,90 720,60 T1440,60 L1440,120 L0,120 Z" fill="#7DD3FC" opacity="0.4"/>
            <path d="M0,40 Q360,70 720,40 T1440,40 L1440,120 L0,120 Z" fill="#93C5FD" opacity="0.3"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                STAY CONNECTED
                <br />
                AND IN CONTROL
                <br />
                WITH THE <span className="text-yellow-300">M</span>
                <span className="text-orange-400">O</span>
                <span className="text-green-400">J</span>
                <span className="text-blue-300">I</span>
                <span className="text-pink-300">K</span>
                <span className="text-yellow-300"> APP</span>
              </h2>
              <ul className="space-y-5 text-lg">
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Track usage and conversations</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Get insights and progress updates</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Add context and special moments</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Personalize your Mojik experience</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Set routines and healthy limits</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 flex justify-center">
              {/* iPhone Mockup */}
              <div className="relative w-80 md:w-96 transform hover:scale-105 transition-transform">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[3rem] shadow-2xl p-3">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
                  
                  {/* Screen */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-b from-amber-50 to-white px-6 pt-12 pb-2 flex items-center justify-between">
                      <div className="text-xs font-semibold">9:41</div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 18h5v-6H2v6zm7-13h10v-3H9v3zm-7 7h5V9H2v3zm7 0h10v-3H9v3zm0 7h10v-3H9v3z"/>
                        </svg>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                        </svg>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="bg-gradient-to-b from-amber-50 to-purple-50 px-5 pb-6">
                      {/* Header */}
                      <div className="bg-white rounded-2xl p-4 mb-4 flex items-center gap-3 shadow-sm">
                        <img 
                          src="/Images/baby.png"
                          alt="Mojik"
                          className="w-14 h-14 rounded-xl object-contain bg-gradient-to-br from-blue-300 to-blue-400 p-2"
                        />
                        <div className="flex-1">
                          <p className="font-bold text-gray-800">Mark's</p>
                          <p className="text-xs text-gray-500">Mojik</p>
                        </div>
                        <div className="text-right">
                          <div className="bg-orange-400 text-white text-xs px-4 py-1.5 rounded-full font-bold mb-1">
                            Chat History
                          </div>
                          <div className="flex items-center gap-3 text-xs text-gray-600">
                            <div>
                              <div className="text-gray-500">Play time</div>
                              <div className="font-bold">10h 59m</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Adventure</div>
                              <div className="font-bold">56</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Emotion Level</div>
                              <div className="font-bold">99%</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Highlights Section */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-base">Highlights for you</h3>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 shadow-sm mb-3">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Language | Thu 9:16</p>
                              <p className="font-bold text-sm mb-2">New Words, New World</p>
                            </div>
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            Today, Mark explored the magic of new words together they learned to say "hello" and "thank you" in three different languages. Each word opened new doors...
                          </p>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-orange-400 text-white py-2 rounded-full font-bold text-xs flex items-center justify-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              Respond
                            </button>
                            <button className="px-4 bg-amber-50 text-gray-700 py-2 rounded-full text-xs flex items-center gap-1">
                              See Chat
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Additional Cards */}
                        <div className="space-y-2">
                          <div className="bg-orange-100 rounded-2xl p-3 flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-500">Creativity | Wed 8:17</p>
                              <p className="font-bold text-sm">The Dragon Story</p>
                            </div>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="bg-purple-100 rounded-2xl p-3 flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-500">Curiosity | Tue 9:24</p>
                              <p className="font-bold text-sm">Shining Star Mystery</p>
                            </div>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="bg-white border-t border-gray-200 px-8 py-3 flex items-center justify-around">
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-xs">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        <span className="text-xs">Saved</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs">Help</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs">Settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* CTA Section */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-br from-blue-300 via-blue-400 to-purple-400 overflow-hidden">
        {/* Wavy top decoration */}
        <div className="absolute top-0 left-0 right-0 h-16">
          <svg className="w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 Q360,0 720,40 T1440,40 L1440,0 L0,0 Z" fill="#DDD6FE" opacity="0.4"/>
          </svg>
        </div>

        {/* Wavy bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z" fill="#FDE68A" opacity="0.8"/>
            <path d="M0,80 Q360,40 720,80 T1440,80 L1440,120 L0,120 Z" fill="#FED7AA" opacity="0.6"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {/* Left Mojik - Organic Blob Shape */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                {/* Organic blob shape */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <clipPath id="blob-left">
                        <path d="M 200,20 C 280,20 360,70 380,150 C 400,230 380,310 300,350 C 220,390 140,380 80,320 C 20,260 10,180 40,110 C 70,40 120,20 200,20 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="absolute inset-0" style={{ clipPath: 'url(#blob-left)' }}>
                    <img 
                      src="./Images/20251010_2342_Children's Plush Toy Play_remix_01k77xn1zcece8wdt29p8k2xsz 2.png"
                      alt="Mojik Toy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 left-8 w-10 h-10 bg-green-300 rounded-full"></div>
              </div>
            </div>

            {/* Center Text */}
            <div className="flex-1 text-center px-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 md:mb-8 drop-shadow-lg leading-tight">
                PRE-ORDER MOJIK AND
                <br />
                <span className="text-black">HELP YOUR CHILD LEARN,</span>
                <br />
                <span className="text-black">GROW, AND DREAM</span>
              </h2>
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                Join The Waitlist
              </button>
            </div>

            {/* Right Kids with Mojik - Organic Blob Shape */}
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="relative">
                {/* Organic blob shape */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <clipPath id="blob-right">
                        <path d="M 200,20 C 280,30 350,90 370,160 C 390,230 370,300 310,350 C 250,400 170,390 100,340 C 30,290 20,210 50,140 C 80,70 120,10 200,20 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="absolute inset-0" style={{ clipPath: 'url(#blob-right)' }}>
                    <img 
                      src="./Images/20251010_2342_Children's Plush Toy Play_remix_01k77xn1zcece8wdt29p8k2xsz 1.png"
                      alt="Kids playing with Mojik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-12 right-4 w-12 h-12 md:w-16 md:h-16 bg-purple-300 rounded-full"></div>
                <div className="absolute top-20 right-12 w-10 h-10 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-amber-100 px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-900 font-bold text-lg">(~.~) MOJIK AI</span>
          </div>
          
          <div className="flex gap-4">
            <button className="w-10 h-10 bg-pink-400 rounded-full hover:scale-110 transition-transform flex items-center justify-center">
              <Instagram size={20} className="text-white" />
            </button>
            <button className="w-10 h-10 bg-blue-400 rounded-full hover:scale-110 transition-transform flex items-center justify-center">
              <Send size={20} className="text-white" />
            </button>
            <button className="w-10 h-10 bg-purple-500 rounded-full hover:scale-110 transition-transform flex items-center justify-center">
              <Music size={20} className="text-white" />
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-full hover:scale-110 transition-transform flex items-center justify-center">
              <Twitter size={20} className="text-white" />
            </button>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-3xl max-w-md w-full mx-auto overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={18} className="text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="bg-gradient-to-b from-amber-50 to-white p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-800 mb-2">
                  JOIN THE WAITLIST
                </h3>
                <p className="text-gray-600 text-sm">
                  Be the first to know when Mojik is available!
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Age
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all">
                    <option value="">Select age range</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-8">6-8 years</option>
                    <option value="9-12">9-12 years</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Join Waitlist
                </button>
              </form>

              {/* Footer Text */}
              <p className="text-center text-xs text-gray-500 mt-4">
                By joining, you agree to our Privacy Policy and Terms of Service
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}