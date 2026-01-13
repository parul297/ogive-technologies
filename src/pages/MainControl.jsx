// src/pages/Controls.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import commanderSection from "../assets/commanderSection.jpg";
import insideTank from "../assets/insideTank.png";
import gunner from "../assets/gunnerSights.png";

const Controls = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(50);
  const [selectedControl, setSelectedControl] = useState(null);
  const [exploredControls, setExploredControls] = useState([]);
  const [activeStation, setActiveStation] = useState('driver');

  const stations = {
    driver: {
      title: "Driver's Station",
      icon: "🎮",
      color: "from-blue-500 to-cyan-500",
      image: insideTank,
      controls: [
        {
          id: 1,
          name: "Steering Levers",
          description: "Controls tank direction by varying track speeds. Pull left to turn left, right to turn right. Pull both simultaneously to brake.",
          position: { top: '45%', left: '30%' },
          icon: "🕹️",
          details: "Mechanical linkage system with hydraulic assist"
        },
        {
          id: 2,
          name: "Throttle Pedal",
          description: "Controls engine power output and tank speed. Progressive pressure increases speed from 0-60 km/h.",
          position: { top: '70%', left: '35%' },
          icon: "⚡",
          details: "Connected to V-46-6 diesel engine governor"
        },
        {
          id: 3,
          name: "Gear Selector",
          description: "7-forward, 1-reverse transmission control. Synchronized shifting for smooth gear changes.",
          position: { top: '50%', left: '55%' },
          icon: "⚙️",
          details: "Manual transmission with synchromesh"
        },
        {
          id: 4,
          name: "Vision Periscopes",
          description: "Three viewing periscopes providing 180° forward visibility. Center periscope can be replaced with night vision device.",
          position: { top: '20%', left: '45%' },
          icon: "👁️",
          details: "TNPO-168V day periscopes, interchangeable with TVN-2 night vision"
        },
        {
          id: 5,
          name: "Instrument Panel",
          description: "Displays engine RPM, oil pressure, coolant temperature, fuel level, and transmission indicators.",
          position: { top: '35%', left: '50%' },
          icon: "📊",
          details: "Analog gauges with warning lights"
        }
      ]
    },
    gunner: {
      title: "Gunner's Station",
      icon: "🎯",
      color: "from-red-500 to-orange-500",
      image: gunner,
      controls: [
        {
          id: 6,
          name: "Main Gun Control",
          description: "Hydraulic controls for traversing turret and elevating 125mm main gun. Powered traverse with manual backup.",
          position: { top: '40%', left: '35%' },
          icon: "🎯",
          details: "Hydraulic stabilization system for firing on the move"
        },
        {
          id: 7,
          name: "Fire Control System",
          description: "Integrated targeting computer with laser rangefinder. Calculates ballistic solutions automatically.",
          position: { top: '30%', left: '50%' },
          icon: "🔴",
          details: "TPD-K1 sight with 1D13 laser rangefinder"
        },
        {
          id: 8,
          name: "Ammunition Selection",
          description: "Selector for different ammunition types: APFSDS, HEAT, and HE-Frag rounds. Interfaces with autoloader.",
          position: { top: '55%', left: '40%' },
          icon: "💥",
          details: "22-round autoloader carousel system"
        },
        {
          id: 9,
          name: "Gunner's Sight",
          description: "Primary optical sight with 3.6x and 8x magnification. Integrated with fire control system.",
          position: { top: '25%', left: '45%' },
          icon: "🔭",
          details: "Day/night capable with infrared searchlight"
        },
        {
          id: 10,
          name: "Trigger Controls",
          description: "Main gun trigger and coaxial machine gun trigger. Two-stage trigger for precise firing.",
          position: { top: '60%', left: '55%' },
          icon: "🔫",
          details: "Electronic firing system with manual backup"
        }
      ]
    },
    commander: {
      title: "Commander's Station",
      icon: "⭐",
      color: "from-purple-500 to-pink-500",
      image: commanderSection,
      controls: [
        {
          id: 11,
          name: "Panoramic Sight",
          description: "360° rotating periscopic sight for battlefield observation and target acquisition.",
          position: { top: '25%', left: '45%' },
          icon: "🔄",
          details: "TPK-1 sight with independent stabilization"
        },
        {
          id: 12,
          name: "Commander's Override",
          description: "Allows commander to override gunner and control turret traverse. Emergency fire control capability.",
          position: { top: '40%', left: '35%' },
          icon: "🎛️",
          details: "Full weapons system control authority"
        },
        {
          id: 13,
          name: "Communication System",
          description: "R-123M radio system for external communication and internal intercom for crew coordination.",
          position: { top: '50%', left: '55%' },
          icon: "📡",
          details: "VHF radio with 20km range"
        },
        {
          id: 14,
          name: "Hatch Controls",
          description: "Electro-hydraulic hatch opening mechanism with manual backup. Emergency quick-release system.",
          position: { top: '15%', left: '50%' },
          icon: "🚪",
          details: "Armored hatch with vision blocks"
        },
        {
          id: 15,
          name: "Target Designation",
          description: "System for identifying and marking targets for gunner. Integrated with fire control computer.",
          position: { top: '35%', left: '60%' },
          icon: "📍",
          details: "Laser designation capability"
        }
      ]
    }
  };

  const handleControlClick = (control) => {
    setSelectedControl(control);
    if (!exploredControls.includes(control.id)) {
      setExploredControls([...exploredControls, control.id]);
    }
  };

  const handleNext = () => {
    navigate('/safety');
  };

  const handlePrevious = () => {
    navigate('/overview');
  };

  const currentStation = stations[activeStation];
  const completionPercentage = Math.round((exploredControls.length / 15) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header with Progress */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MODULE 02: Main Controls
              </h1>
              <p className="text-sm text-gray-400">Interactive Control Systems Training</p>
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
          
          {/* Exploration Progress */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">
              Controls Explored: {exploredControls.length}/15
            </span>
            <span className="text-cyan-400 font-semibold">
              {completionPercentage}% Complete
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <span className="mr-3">🎮</span>
            Interactive Control Training
          </h2>
          <p className="text-gray-300 mb-4">
            The T-72 crew consists of three members: Driver, Gunner, and Commander. Each position has specialized controls 
            for operating the tank effectively. Click on the hotspots below to learn about each control system.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-gray-400">Click hotspots to explore</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-gray-400">Explored controls</span>
            </div>
          </div>
        </div>

        {/* Station Selector */}
        <div className="flex justify-center space-x-6 mb-12">
          {Object.entries(stations).map(([key, station]) => (
            <button
              key={key}
              onClick={() => {
                setActiveStation(key);
                setSelectedControl(null);
              }}
              className={`relative group px-8 py-4 rounded-xl border-2 transition-all duration-300 ${
                activeStation === key
                  ? 'border-cyan-400 bg-cyan-400/20 scale-105'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{station.icon}</span>
                <div className="text-left">
                  <div className="font-bold text-lg">{station.title}</div>
                  <div className="text-xs text-gray-400">
                    {station.controls.length} controls
                  </div>
                </div>
              </div>
              {activeStation === key && (
                <div className={`absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r ${station.color} rounded-full`}></div>
              )}
            </button>
          ))}
        </div>

        {/* Interactive Control Panel */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left: Interactive Diagram */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${currentStation.color} bg-clip-text text-transparent`}>
              {currentStation.title}
            </h3>
            
            {/* Interactive Panel Area */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/20 aspect-video overflow-hidden">
              
              {/* Actual Control Panel Image */}
              <img 
                src={currentStation.image} 
                alt={`${currentStation.title} controls`}
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for better hotspot visibility */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Interactive Hotspots */}
              {currentStation.controls.map((control) => {
                const isExplored = exploredControls.includes(control.id);
                const isSelected = selectedControl?.id === control.id;
                
                return (
                  <button
                    key={control.id}
                    onClick={() => handleControlClick(control)}
                    className={`absolute w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center group
                      ${isSelected 
                        ? 'bg-cyan-400 border-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
                        : isExplored
                        ? 'bg-green-400/20 border-green-400 hover:scale-125'
                        : 'bg-cyan-400/20 border-cyan-400 animate-pulse hover:scale-125'
                      }`}
                    style={{
                      top: control.position.top,
                      left: control.position.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <span className="text-lg">{isExplored ? '✓' : '?'}</span>
                    
                    {/* Hover tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:block z-10">
                      <div className="backdrop-blur-xl bg-black/90 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap border border-white/20">
                        {control.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-cyan-400/20 border border-cyan-400 animate-pulse"></div>
                <span>Unexplored</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-400/20 border border-green-400"></div>
                <span>Explored</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-cyan-400 border border-cyan-400"></div>
                <span>Selected</span>
              </div>
            </div>
          </div>

          {/* Right: Control Details */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            {selectedControl ? (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentStation.color} flex items-center justify-center text-3xl`}>
                    {selectedControl.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{selectedControl.name}</h3>
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                      {currentStation.title}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">DESCRIPTION</h4>
                    <p className="text-gray-300">{selectedControl.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">TECHNICAL DETAILS</h4>
                    <p className="text-gray-300">{selectedControl.details}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Control ID</span>
                      <span className="font-mono text-cyan-400">#{selectedControl.id.toString().padStart(3, '0')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center space-x-2 text-sm text-green-400">
                    <span>✓</span>
                    <span>Control information logged</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <div className="space-y-4">
                  <div className="text-6xl">👆</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Select a Control</h3>
                    <p className="text-gray-400">
                      Click on any hotspot to learn about that control system
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Reference Cards */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-3">📚</span>
            Quick Reference Guide
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(stations).map(([key, station]) => (
              <div key={key} className={`bg-gradient-to-br ${station.color} bg-opacity-10 rounded-xl p-6 border border-white/10`}>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{station.icon}</span>
                  <h4 className="font-bold text-lg">{station.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {station.controls.slice(0, 3).map((control) => (
                    <li key={control.id} className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{control.name}</span>
                    </li>
                  ))}
                  {station.controls.length > 3 && (
                    <li className="text-gray-500 italic">+{station.controls.length - 3} more...</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            className="flex items-center space-x-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all hover:scale-105"
          >
            <span>←</span>
            <span>Back to Overview</span>
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/50"
          >
            <span>Next: Safety Procedures</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;