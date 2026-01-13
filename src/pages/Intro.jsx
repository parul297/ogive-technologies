// src/pages/Introduction.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tank from "../assets/tank.mp4";

const Introduction = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleStartTraining = () => {
    navigate('/overview');
  };

  const modules = [
    {
      number: "01",
      title: "Tank Overview",
      description: "Specifications, history & capabilities",
      color: "from-blue-500 to-cyan-500",
      icon: "🎯"
    },
    {
      number: "02",
      title: "Main Controls",
      description: "Interactive control panel exploration",
      color: "from-purple-500 to-pink-500",
      icon: "🎮"
    },
    {
      number: "03",
      title: "Safety Protocols",
      description: "Essential procedures & emergency response",
      color: "from-orange-500 to-red-500",
      icon: "🛡️"
    },
    {
      number: "04",
      title: "Knowledge Check",
      description: "Test your mastery with assessments",
      color: "from-green-500 to-emerald-500",
      icon: "✅"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src={tank} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className={`min-h-screen flex items-center justify-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl w-full text-center">
            
            {/* Main Title with Glow Effect */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-pulse">
                T-72
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
              <p className="text-2xl md:text-3xl text-white font-light tracking-wider">
                MAIN BATTLE TANK
              </p>
              <p className="text-lg text-gray-300 mt-2 font-light">
                Interactive Combat Training System
              </p>
            </div>

            {/* Learning Objectives - Glassmorphism Card */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">Mission Objectives</h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  "Master T-72 technical specifications",
                  "Command tank control systems",
                  "Execute safety protocols",
                  "Complete combat readiness assessment"
                ].map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center mt-1 group-hover:bg-cyan-400/40 transition-all">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <p className="text-white text-lg">{objective}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center space-x-8 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-sm">20-25 min</span>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📊</span>
                    <span className="text-sm">4 Modules</span>
                  </div>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏆</span>
                    <span className="text-sm">Certificate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{module.icon}</span>
                  </div>
                  
                  <div className="text-left">
                    <div className={`text-sm font-mono font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent mb-2`}>
                      MODULE {module.number}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {module.description}
                    </p>
                  </div>

                  {/* <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center text-cyan-400 text-sm font-semibold">
                      <span>Start</span>
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={handleStartTraining}
                className="group relative px-12 py-5 text-xl font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center">
                  COMMENCE TRAINING
                  <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="mt-16 flex items-center justify-center space-x-12 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>CLASSIFIED LEVEL: AUTHORIZED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none z-5" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  );
};

export default Introduction;