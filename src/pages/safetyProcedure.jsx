// src/pages/Safety.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import sunTank from "../assets/sunTanks.mp4";
import sunTank from "../assets/istockphoto-1636739741-640_adpp_is.mp4"

const Safety = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(75);
  const [expandedProcedure, setExpandedProcedure] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  const safetyProcedures = [
    {
      id: 1,
      title: "Pre-Operation Safety Check",
      category: "Preparation",
      icon: "✅",
      color: "from-green-500 to-emerald-500",
      severity: "Critical",
      description: "Essential checks before tank operation to ensure crew safety and equipment functionality.",
      steps: [
        "Verify all crew members are properly seated and secured",
        "Check communication systems are operational",
        "Confirm all hatches can be opened from inside",
        "Test emergency fire suppression system",
        "Verify NBC (Nuclear, Biological, Chemical) protection system",
        "Check fuel levels and engine condition",
        "Inspect track tension and road wheels",
        "Verify ammunition storage is properly secured"
      ]
    },
    {
      id: 2,
      title: "Fire Safety Protocol",
      category: "Emergency",
      icon: "🔥",
      color: "from-red-500 to-orange-500",
      severity: "Critical",
      description: "Immediate actions in case of fire to protect crew and contain damage.",
      steps: [
        "Activate automatic fire suppression system immediately",
        "Alert all crew members via intercom",
        "Cut engine power and fuel supply",
        "Evacuate through nearest accessible hatch",
        "Use manual fire extinguishers if fire is small and contained",
        "Maintain low position to avoid smoke inhalation",
        "Regroup at safe distance (minimum 50 meters)",
        "Report incident and request support"
      ]
    },
    {
      id: 3,
      title: "Ammunition Handling",
      category: "Operations",
      icon: "💥",
      color: "from-yellow-500 to-orange-500",
      severity: "Critical",
      description: "Safe procedures for loading, storing, and handling tank ammunition.",
      steps: [
        "Never smoke or use open flames near ammunition",
        "Handle all rounds with care - avoid dropping or striking",
        "Load ammunition only when authorized",
        "Ensure autoloader carousel is properly secured",
        "Keep ammunition compartment sealed during operation",
        "Report any damaged or defective rounds immediately",
        "Follow proper procedures for ammunition type selection",
        "Maintain awareness of loaded round type at all times"
      ]
    },
    {
      id: 4,
      title: "Emergency Evacuation",
      category: "Emergency",
      icon: "🚪",
      color: "from-red-500 to-pink-500",
      severity: "Critical",
      description: "Rapid evacuation procedures in life-threatening situations.",
      steps: [
        "Commander issues evacuation order via intercom",
        "Driver: Exit through driver's hatch",
        "Gunner: Exit through commander's hatch or loader's hatch",
        "Commander: Exit last, confirm all crew evacuated",
        "Open hatches using emergency quick-release if needed",
        "Assist injured crew members first",
        "Move minimum 100 meters from tank",
        "Take cover and await further orders"
      ]
    },
    {
      id: 5,
      title: "NBC Protection Procedures",
      category: "Operations",
      icon: "☢️",
      color: "from-purple-500 to-pink-500",
      severity: "High",
      description: "Protection against Nuclear, Biological, and Chemical threats.",
      steps: [
        "Activate NBC filtration system immediately upon alert",
        "Seal all hatches and ventilation openings",
        "Don protective masks if available",
        "Minimize exposure time in contaminated areas",
        "Monitor radiation levels using onboard detectors",
        "Decontaminate exterior surfaces after exposure",
        "Report NBC contact to command immediately",
        "Follow decontamination procedures for crew and equipment"
      ]
    },
    {
      id: 6,
      title: "Electrical System Safety",
      category: "Maintenance",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      severity: "High",
      description: "Safe handling of electrical systems and batteries.",
      steps: [
        "Disconnect batteries before electrical maintenance",
        "Wear insulated gloves when handling electrical components",
        "Never work on electrical systems in wet conditions",
        "Check for damaged wiring regularly",
        "Ensure proper grounding of all equipment",
        "Use appropriate voltage-rated tools",
        "Report any electrical malfunctions immediately",
        "Keep fire extinguisher nearby during electrical work"
      ]
    }
  ];

  const emergencyContacts = [
    { role: "Tank Commander", code: "TC-01", frequency: "Intercom Channel 1" },
    { role: "Platoon Leader", code: "PL-01", frequency: "Radio Net Alpha" },
    { role: "Maintenance Support", code: "MAINT-01", frequency: "Radio Net Bravo" },
    { role: "Medical Evacuation", code: "MEDEVAC", frequency: "Emergency Channel" }
  ];

  const safetyEquipment = [
    { name: "Fire Extinguishers", location: "Driver compartment, Turret basket", quantity: "3 units", icon: "🧯" },
    { name: "First Aid Kit", location: "Commander's station", quantity: "1 kit", icon: "🏥" },
    { name: "Emergency Toolkit", location: "External storage", quantity: "1 set", icon: "🔧" },
    { name: "NBC Protection Masks", location: "Each crew position", quantity: "3 masks", icon: "😷" }
  ];

  const toggleProcedure = (id) => {
    setExpandedProcedure(expandedProcedure === id ? null : id);
  };

  const toggleCheckItem = (procedureId, stepIndex) => {
    const itemId = `${procedureId}-${stepIndex}`;
    setCheckedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(i => i !== itemId)
        : [...prev, itemId]
    );
  };

  const isItemChecked = (procedureId, stepIndex) => {
    return checkedItems.includes(`${procedureId}-${stepIndex}`);
  };

  const handleNext = () => {
    navigate('/quiz');
  };

  const handlePrevious = () => {
    navigate('/controls');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Full-screen Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={sunTank} type="video/mp4" />
        </video>
      {/* In the video container section */}
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
      </div>

      {/* Header with Progress - Fixed */}
      <div className="sticky top-0 z-50 backdrop-blur-l bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MODULE 03: Safety Procedures
              </h1>
              <p className="text-sm text-gray-400">Critical Safety Protocols & Emergency Response</p>
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

      {/* Main Content - Scrolls over video */}
      <div className="relative bg-gradient-to-b from-transparent via-black/70 to-black/90">
        {/* Hero Overlay Section */}
        <div className="relative h-[80vh] flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Safety First
              </span>
              <br />
              <span className="text-white">Mission Always</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Comprehensive safety protocols and emergency procedures for T-72 tank operations
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                CRITICAL INFORMATION
              </span>
              <span>•</span>
              <span>6 MAJOR PROCEDURES</span>
              <span>•</span>
              <span>LIFE-SAVING PROTOCOLS</span>
            </div>
          </div>
        
        </div>

        {/* Main Content Container with gradient background that scrolls */}
        <div className="relative bg-gradient-to-b from-transparent via-black/90 to-black">
          <div className="max-w-7xl mx-auto px-6 py-20">
            
            {/* Warning Banner */}
            <div className="backdrop-blur-l bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/50 rounded-2xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">⚠️</div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-red-400">Critical Safety Notice</h2>
                  <p className="text-gray-300 mb-4">
                    Tank operations involve significant risks. Strict adherence to safety procedures is mandatory 
                    to protect crew members and equipment. All personnel must be thoroughly trained and certified 
                    before operating or maintaining the T-72 tank.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-red-400">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                    <span className="font-semibold">IMMEDIATE COMPLIANCE REQUIRED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Procedures Accordion */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-3">📋</span>
                Safety Procedures
              </h2>
              
              <div className="space-y-4">
                {safetyProcedures.map((procedure) => (
                  <div
                    key={procedure.id}
                    className="backdrop-blur-l bg-white/10 border border-white/20 rounded-xl overflow-hidden transition-all hover:bg-white/20 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    {/* Procedure Header */}
                    <button
                      onClick={() => toggleProcedure(procedure.id)}
                      className="w-full p-6 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${procedure.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                          {procedure.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="text-xl font-bold">{procedure.title}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              procedure.severity === 'Critical' 
                                ? 'bg-red-500/20 text-red-400 border border-red-500/50' 
                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                            }`}>
                              {procedure.severity}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{procedure.category} • {procedure.steps.length} steps</p>
                        </div>
                      </div>
                      <div className={`text-2xl transition-transform duration-300 ${expandedProcedure === procedure.id ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </button>

                    {/* Procedure Content */}
                    {expandedProcedure === procedure.id && (
                      <div className="px-6 pb-6 border-t border-white/20">
                        <div className="pt-6">
                          <p className="text-gray-300 mb-6">{procedure.description}</p>
                          
                          <h4 className="text-sm font-semibold text-gray-400 mb-4">PROCEDURE STEPS:</h4>
                          <div className="space-y-3">
                            {procedure.steps.map((step, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all"
                              >
                                <button
                                  onClick={() => toggleCheckItem(procedure.id, index)}
                                  className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                    isItemChecked(procedure.id, index)
                                      ? 'bg-green-500 border-green-500'
                                      : 'border-gray-500 hover:border-cyan-400 hover:scale-110'
                                  }`}
                                >
                                  {isItemChecked(procedure.id, index) && (
                                    <span className="text-white text-xs">✓</span>
                                  )}
                                </button>
                                <div className="flex-1">
                                  <div className="flex items-start space-x-3">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-bold text-cyan-400">
                                      {index + 1}
                                    </span>
                                    <p className={`text-gray-300 flex-1 ${isItemChecked(procedure.id, index) ? 'line-through opacity-50' : ''}`}>
                                      {step}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts & Equipment */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="backdrop-blur-l bg-white/10 border border-white/20 rounded-2xl p-8 hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3">📞</span>
                  Emergency Contacts
                </h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all group hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors">{contact.role}</h4>
                          <p className="text-sm text-gray-400">{contact.frequency}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-cyan-400 font-bold bg-cyan-400/10 px-3 py-1 rounded-lg">
                            {contact.code}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Equipment */}
              <div className="backdrop-blur-l bg-white/10 border border-white/20 rounded-2xl p-8 hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3">🛡️</span>
                  Safety Equipment
                </h3>
                <div className="space-y-4">
                  {safetyEquipment.map((equipment, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all group">
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl group-hover:scale-125 transition-transform">{equipment.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-bold group-hover:text-cyan-400 transition-colors">{equipment.name}</h4>
                          <p className="text-sm text-gray-400 mt-1">
                            <span className="text-cyan-400">📍 {equipment.location}</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">🔢 {equipment.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="backdrop-blur-l bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/50 rounded-2xl p-8 mb-12 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">💡</span>
                Key Safety Reminders
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-all">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <p className="text-gray-300">Always maintain clear communication with all crew members</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-all">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <p className="text-gray-300">Know the location of all emergency equipment and exits</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-all">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <p className="text-gray-300">Report any equipment malfunction immediately</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-all">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <p className="text-gray-300">Never bypass safety systems or protocols</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-all">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <p className="text-gray-300">Complete pre-operation checks before every mission</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-all">
                    <span className="text-cyan-400 text-xl">✓</span>
                    <p className="text-gray-300">Stay alert and aware of surroundings at all times</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl transition-all hover:scale-10 hover:shadow-xl backdrop-blur-sm"
              >
                <span>←</span>
                <span>Back to Controls</span>
              </button>
              
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70"
              >
                <span>Next: Knowledge Check</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;