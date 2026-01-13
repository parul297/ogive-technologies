// src/pages/TankOverview.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import closeUp from "../assets/closeUpTank.jpg";
import colorT from "../assets/colorT-72.jpg";
import groupTank from "../assets/groupTank.jpg";
import sandTank from "../assets/sandTank.jpg";
import tankCarrying from "../assets/tankCarryingTank.jpg";
import tankFont from "../assets/tankFront.jpg";

const TankOverview = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('specs');
  const [progress, setProgress] = useState(25);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState({
    specs: false,
    history: false,
    capabilities: false
  });

  // New states for 3D rotation
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const heroImages = [groupTank, colorT, closeUp, sandTank, tankCarrying, tankFont];

  const specifications = [
    { label: "Weight", value: "41.5 tonnes", icon: "⚖️" },
    { label: "Length", value: "9.53 m", icon: "📏" },
    { label: "Width", value: "3.59 m", icon: "↔️" },
    { label: "Height", value: "2.23 m", icon: "↕️" },
    { label: "Crew", value: "3 Personnel", icon: "👥" },
    { label: "Main Gun", value: "125mm 2A46", icon: "🎯" },
    { label: "Engine", value: "V-46-6 Diesel", icon: "⚙️" },
    { label: "Max Speed", value: "60 km/h", icon: "⚡" },
    { label: "Range", value: "460 km", icon: "🛣️" },
    { label: "Armor", value: "Composite", icon: "🛡️" }
  ];

  const capabilities = [
    {
      title: "Main Armament",
      description: "125mm smoothbore gun with autoloader system",
      features: ["APFSDS rounds", "HEAT rounds", "HE-Frag rounds"],
      icon: "🎯",
      image: closeUp
    },
    {
      title: "Fire Control",
      description: "Advanced targeting and night vision capabilities",
      features: ["Laser rangefinder", "Infrared searchlight", "Stabilization system"],
      icon: "📡",
      image: tankFont
    },
    {
      title: "Protection",
      description: "Composite armor with ERA reactive modules",
      features: ["Frontal armor", "Side skirts", "NBC protection"],
      icon: "🛡️",
      image: sandTank
    },
    {
      title: "Mobility",
      description: "High power-to-weight ratio for battlefield agility",
      features: ["Cross-country capability", "Deep fording", "Snorkel equipment"],
      icon: "🚜",
      image: colorT
    }
  ];

  const galleryImages = [
    { src: colorT, title: "T-72 Desert Camouflage", category: "Variants" },
    { src: closeUp, title: "Main Gun Detail", category: "Armament" },
    { src: groupTank, title: "Tank Formation", category: "Operations" },
    { src: sandTank, title: "Field Operations", category: "Combat" },
    { src: tankCarrying, title: "Transport Configuration", category: "Logistics" },
    { src: tankFont, title: "Front Profile", category: "Design" }
  ];

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    
    // Only apply rotation when near edges (within 10% of width/height from edges)
    const edgeThreshold = 0.1; // 10% from edges
    const width = rect.width;
    const height = rect.height;
    
    let rotateX = 0;
    let rotateY = 0;
    
    // Check proximity to edges
    const nearLeft = x < width * edgeThreshold;
    const nearRight = x > width * (1 - edgeThreshold);
    const nearTop = y < height * edgeThreshold;
    const nearBottom = y > height * (1 - edgeThreshold);
    
    if (nearLeft || nearRight || nearTop || nearBottom) {
      // Calculate rotation based on mouse position
      const centerX = width / 2;
      const centerY = height / 2;
      const relativeX = (x - centerX) / centerX;
      const relativeY = (y - centerY) / centerY;
      
      // Enhanced rotation for edges
      rotateY = nearLeft ? -15 : nearRight ? 15 : relativeX * 5;
      rotateX = nearTop ? -15 : nearBottom ? 15 : -relativeY * 5;
      
      // Boost rotation when near corners
      if ((nearLeft && nearTop) || (nearRight && nearTop) || 
          (nearLeft && nearBottom) || (nearRight && nearBottom)) {
        rotateY *= 1.5;
        rotateX *= 1.5;
      }
      
      setIsHovering(true);
    } else {
      setIsHovering(false);
      // Reset rotation smoothly
      rotateX = rotation.x * 0.9;
      rotateY = rotation.y * 0.9;
    }
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smooth reset animation
    const resetAnimation = () => {
      setRotation(prev => ({
        x: prev.x * 0.9,
        y: prev.y * 0.9
      }));
      
      if (Math.abs(rotation.x) > 0.1 || Math.abs(rotation.y) > 0.1) {
        requestAnimationFrame(resetAnimation);
      }
    };
    resetAnimation();
  };

  // Add glow effect on the edges
  const getEdgeGlow = () => {
    const { x, y } = mousePosition;
    if (!heroRef.current || !isHovering) return {};
    
    const rect = heroRef.current.getBoundingClientRect();
    const edgeThreshold = 0.1;
    const width = rect.width;
    const height = rect.height;
    
    const nearLeft = x < width * edgeThreshold;
    const nearRight = x > width * (1 - edgeThreshold);
    const nearTop = y < height * edgeThreshold;
    const nearBottom = y > height * (1 - edgeThreshold);
    
    let gradient = '';
    
    if (nearLeft && nearTop) {
      gradient = `radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.4) 0%, transparent 70%)`;
    } else if (nearRight && nearTop) {
      gradient = `radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.4) 0%, transparent 70%)`;
    } else if (nearLeft && nearBottom) {
      gradient = `radial-gradient(circle at 0% 100%, rgba(56, 189, 248, 0.4) 0%, transparent 70%)`;
    } else if (nearRight && nearBottom) {
      gradient = `radial-gradient(circle at 100% 100%, rgba(56, 189, 248, 0.4) 0%, transparent 70%)`;
    } else if (nearLeft) {
      gradient = `linear-gradient(to right, rgba(56, 189, 248, 0.3) 0%, transparent 30%)`;
    } else if (nearRight) {
      gradient = `linear-gradient(to left, rgba(56, 189, 248, 0.3) 0%, transparent 30%)`;
    } else if (nearTop) {
      gradient = `linear-gradient(to bottom, rgba(56, 189, 248, 0.3) 0%, transparent 30%)`;
    } else if (nearBottom) {
      gradient = `linear-gradient(to top, rgba(56, 189, 248, 0.3) 0%, transparent 30%)`;
    }
    
    return {
      background: gradient,
      transition: 'background 0.3s ease'
    };
  };

  const markSectionComplete = (section) => {
    setCompletedSections(prev => ({
      ...prev,
      [section]: true
    }));
  };

  const handleNext = () => {
    navigate('/controls');
  };

  const handlePrevious = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header with Progress */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MODULE 01: Tank Overview
              </h1>
              <p className="text-sm text-gray-400">T-72 Main Battle Tank Specifications</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Progress</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-cyan-400">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Image Section with 3D Rotation */}
        <div className="mb-12 relative">
          <div 
            ref={heroRef}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovering 
                ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
              transformStyle: 'preserve-3d',
              transition: isHovering ? 'transform 0.2s ease' : 'transform 0.6s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
              boxShadow: isHovering 
                ? '0 25px 50px -12px rgba(6, 182, 212, 0.25), 0 0 30px rgba(56, 189, 248, 0.3)'
                : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Edge glow overlay */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={getEdgeGlow()}
            />
            
            {/* Main Display Image with 3D layers */}
            <div className="relative aspect-video">
              <img 
                src={heroImages[currentImageIndex]} 
                alt="T-72 Main Battle Tank"
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  transform: isHovering 
                    ? `translateZ(30px) scale(1.05)`
                    : 'translateZ(0px) scale(1)',
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              
              {/* Parallax layers for depth */}
              {isHovering && (
                <>
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    style={{
                      transform: `translateZ(20px)`,
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10"
                    style={{
                      transform: `translateZ(25px)`,
                      transition: 'transform 0.5s ease',
                      opacity: isHovering ? 0.6 : 0
                    }}
                  />
                </>
              )}
              
              {/* 3D frame effect */}
              <div 
                className="absolute inset-0 border-2 border-transparent rounded-3xl"
                style={{
                  borderImage: isHovering 
                    ? 'linear-gradient(45deg, rgba(56,189,248,0.5), rgba(6,182,212,0.5), rgba(56,189,248,0.5)) 1'
                    : 'none',
                  transform: `translateZ(40px)`,
                  transition: 'all 0.5s ease'
                }}
              />
            </div>

            {/* Enhanced Thumbnail Strip with 3D */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setCurrentImageIndex(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'scale-125' 
                      : 'scale-100 opacity-60 hover:opacity-100 hover:scale-110'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: currentImageIndex === index 
                      ? `translateZ(20px) rotateY(${isHovering ? 5 : 0}deg)`
                      : 'translateZ(0px)',
                    transition: 'all 0.3s ease',
                    filter: currentImageIndex === index 
                      ? 'drop-shadow(0 8px 12px rgba(56, 189, 248, 0.3))'
                      : 'none'
                  }}
                >
                  <img 
                    src={img} 
                    alt={`View ${index + 1}`}
                    className="w-20 h-14 object-cover rounded-lg border-2 border-white/20 backdrop-blur-sm"
                    style={{
                      borderColor: currentImageIndex === index 
                        ? 'rgba(56, 189, 248, 0.7)'
                        : 'rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  {currentImageIndex === index && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Floating indicator for edge interaction */}
          {isHovering && (
            <div 
              className="absolute top-4 right-4 z-30 backdrop-blur-md bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-2 animate-pulse"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              <p className="text-sm font-semibold flex items-center">
                <span className="mr-2">✨</span>
                3D View Active
              </p>
            </div>
          )}
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <div 
              className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/20 rounded-full px-6 py-3 shadow-lg"
              style={{
                transform: isHovering ? 'translateZ(15px)' : 'translateZ(0px)',
                transition: 'transform 0.5s ease'
              }}
            >
              <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Soviet Union • 1973-Present • Hover edges for 3D view
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8 border-b border-white/10">
          {[
            { id: 'specs', label: 'Specifications', icon: '📊' },
            { id: 'history', label: 'History', icon: '📜' },
            { id: 'capabilities', label: 'Capabilities', icon: '⚔️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                markSectionComplete(tab.id);
              }}
              className={`flex items-center space-x-2 px-6 py-3 font-semibold transition-all relative ${
                activeTab === tab.id
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {completedSections[tab.id] && (
                <span className="text-green-400 text-xs">✓</span>
              )}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          
          {/* Specifications Tab */}
          {activeTab === 'specs' && (
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="mr-3">📊</span>
                  Technical Specifications
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="group backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all hover:scale-105 cursor-pointer"
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                        {spec.icon}
                      </div>
                      <div className="text-xs text-gray-400 mb-1">{spec.label}</div>
                      <div className="text-xl font-bold text-cyan-400">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
                  <div className="text-4xl mb-3">🏭</div>
                  <h3 className="font-bold text-lg mb-2">Production</h3>
                  <p className="text-sm text-gray-300">Over 25,000 units produced, making it one of the most numerous tanks in history</p>
                </div>
                <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="font-bold text-lg mb-2">Global Service</h3>
                  <p className="text-sm text-gray-300">Deployed in over 40 countries worldwide with numerous variants and upgrades</p>
                </div>
                <div className="backdrop-blur-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
                  <div className="text-4xl mb-3">⚔️</div>
                  <h3 className="font-bold text-lg mb-2">Combat Proven</h3>
                  <p className="text-sm text-gray-300">Extensive combat experience in multiple conflicts since the 1970s</p>
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="mr-3">📜</span>
                  Development History
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-400 pl-6 py-2">
                    <div className="text-sm text-cyan-400 font-semibold mb-1">1967-1973</div>
                    <h3 className="text-xl font-bold mb-2">Design & Development</h3>
                    <p className="text-gray-300">
                      The T-72 was developed by the Soviet Union as a cost-effective main battle tank to complement the more expensive T-64. 
                      Designed by the Uralvagonzavod design bureau, it featured innovative autoloader technology and composite armor.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6 py-2">
                    <div className="text-sm text-blue-400 font-semibold mb-1">1973</div>
                    <h3 className="text-xl font-bold mb-2">Introduction to Service</h3>
                    <p className="text-gray-300">
                      The T-72 entered service with Soviet forces in 1973. Its combination of firepower, protection, and mobility 
                      made it an effective and reliable platform that could be produced in large quantities.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6 py-2">
                    <div className="text-sm text-purple-400 font-semibold mb-1">1980s-Present</div>
                    <h3 className="text-xl font-bold mb-2">Evolution & Variants</h3>
                    <p className="text-gray-300">
                      Multiple variants were developed including the T-72A, T-72B, and T-72B3, each incorporating improved armor, 
                      fire control systems, and ammunition. The tank continues to serve in modernized forms today.
                    </p>
                  </div>
                </div>
              </div>

              {/* Historical Images */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                  <img src={tankCarrying} alt="Transport" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-sm text-cyan-400 mb-1">Logistics</p>
                      <p className="font-bold">Tank Transport Operations</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10">
                  <img src={sandTank} alt="Combat" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-sm text-cyan-400 mb-1">Field Operations</p>
                      <p className="font-bold">Desert Combat Configuration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Capabilities Tab */}
          {activeTab === 'capabilities' && (
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={capability.image} 
                      alt={capability.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl">
                      {capability.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                    <p className="text-gray-400 mb-4">{capability.description}</p>
                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Learning Check */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-3">💡</span>
            Quick Knowledge Check
          </h3>
          <p className="text-gray-300 mb-6">
            What is the main gun caliber of the T-72?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl p-4 text-left transition-all hover:scale-105">
              <span className="font-semibold">A)</span> 120mm
            </button>
            <button className="bg-white/5 hover:bg-green-500/20 border border-white/20 hover:border-green-500/50 rounded-xl p-4 text-left transition-all hover:scale-105">
              <span className="font-semibold">B)</span> 125mm ✓
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl p-4 text-left transition-all hover:scale-105">
              <span className="font-semibold">C)</span> 105mm
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            className="flex items-center space-x-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all hover:scale-105"
          >
            <span>←</span>
            <span>Back to Introduction</span>
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/50"
          >
            <span>Next: Main Controls</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TankOverview;